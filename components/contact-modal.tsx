'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
}

export function ContactModal({ open, onClose, locale }: ContactModalProps) {
  const { content } = useI18n();
  const { contact, siteSettings } = content;

  const contactOptions = [
    { label: 'Zalo', href: siteSettings.social.zalo },
    { label: 'Facebook', href: siteSettings.social.facebook },
    { label: 'Telegram', href: siteSettings.social.telegram },
    { label: 'Instagram', href: siteSettings.social.instagram },
    { label: 'Email', href: `mailto:${siteSettings.email}` },
    { label: 'Phone', href: `tel:${siteSettings.phone}` }
  ];

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="modal-backdrop" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center px-4 py-10">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="card w-full max-w-xl">
                <Dialog.Title className="card-inner text-2xl font-display text-night">
                  {contact.modalTitle[locale]}
                </Dialog.Title>
                <div className="card-inner pt-0 text-sm text-slate-600">
                  <p>{contact.modalText[locale]}</p>
                  <ul className="mt-4 space-y-3">
                    {contactOptions.map((option) => (
                      <li key={option.label}>
                        <a
                          href={option.href}
                          className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-night hover:border-brand"
                          target={option.href.startsWith('http') ? '_blank' : undefined}
                        >
                          <span>{option.label}</span>
                          <span className="text-xs text-slate-500">{option.href}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="button-secondary mt-6"
                    onClick={onClose}
                  >
                    {locale === 'ru' ? 'Закрыть' : locale === 'vn' ? 'Đóng' : 'Close'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
