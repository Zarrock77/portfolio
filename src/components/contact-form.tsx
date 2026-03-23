'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? '');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setStatus('success');
      event.currentTarget.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder={t('namePlaceholder')}
          className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 transition-[border-color] duration-200 focus:border-foreground/40 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">
          {t('email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={t('emailPlaceholder')}
          className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 transition-[border-color] duration-200 focus:border-foreground/40 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t('messagePlaceholder')}
          className="resize-none border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 transition-[border-color] duration-200 focus:border-foreground/40 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-50"
        >
          {status === 'sending' ? t('sending') : t('send')}
        </button>
        {status === 'success' && <span className="text-sm text-muted-foreground">{t('success')}</span>}
        {status === 'error' && <span className="text-sm text-red-500">{t('error')}</span>}
      </div>
    </form>
  );
}
