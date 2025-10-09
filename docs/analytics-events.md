# Brew Brava — события аналитики

| Event key             | Trigger                                          | Recommended parameters                |
|-----------------------|--------------------------------------------------|---------------------------------------|
| `cta_visit_brewery`   | Клик по CTA «Visit the brewery» / «Приехать…»    | `locale`, `section: 'hero'`           |
| `cta_contact`         | Клик по CTA «Get in touch» или кнопке модала     | `locale`, `section` (`hero/contact`)  |
| `cta_become_partner`  | Клик по CTA «Become a partner»                   | `locale`                              |
| `beer_card_click`     | Клик по кнопкам «Where to try» или карточкам     | `locale`, `beer_slug`                 |
| `lead_b2b_submit`     | Успешная отправка формы B2B                      | `locale`, `business_type`, `volume`   |

## Интеграция GA4/GTM
1. Подключите GA4 через `NEXT_PUBLIC_GA4_ID` и инициализацию в `app/layout.tsx` (скрипт не включен по умолчанию).
2. Продублируйте события в Meta Pixel / Telegram-бот при необходимости.
3. Для событий формы используйте `fetch` к backend или webhook в server action (дополнительно).

## Cookie Consent
- Рекомендуется внедрить баннер согласия (CMP) перед активацией аналитики.
- Храните факт согласия в localStorage и инициализируйте трекеры только после согласия.
