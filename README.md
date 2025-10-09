# Brew Brava Web

Одностраничный лендинг Brew Brava с локализацией на английский, русский и вьетнамский языки. Проект построен на Next.js 14 (App Router) с Tailwind CSS и файловой CMS (JSON), удовлетворяет требованиям по i18n, SEO и B2B-форме.

## Стек
- Next.js 14 (App Router, SSG-ready)
- TypeScript
- Tailwind CSS
- Headless UI + Heroicons
- Zod для серверной валидации формы

## Структура
```
app/                # App Router, локализованные маршруты
├─ [locale]/        # Основной лендинг и юридические страницы
├─ actions.ts       # server action для B2B формы
├─ layout.tsx       # глобальный html-шаблон
├─ page.tsx         # редирект на default locale
├─ robots.txt/      # robots.txt маршрут
└─ sitemap.ts       # генерация sitemap.xml
components/         # UI-компоненты и секции
content/cms.json    # «CMS» с локализованными данными и медиа
lib/                # i18n и загрузка контента
styles/             # глобальные стили Tailwind
```

## Запуск
```bash
npm install
npm run dev
```

### Проверки
```bash
npm run lint
npm run typecheck
npm run build
```

## Переводы
Все тексты, CTA и подписи находятся в `content/cms.json` и доступны в трёх локалях. Новые поля добавляйте с ключами `{ en, ru, vi }`.

## Форма B2B
- Реализована через server action `submitB2BLead`
- Сохраняет заявки в `.data/b2b-leads.json`
- Валидация (Zod) и локализованные сообщения об ошибках

## SEO и аналитика
- Генерация hreflang и OG-тегов через `generateMetadata`
- Структурированные данные JSON-LD (Organization, Brewery, Product)
- Sitemap и robots готовы к деплою
- CTA содержит `data-analytics` атрибуты: `cta_visit_brewery`, `cta_contact`, `cta_become_partner`, `beer_card_click`, `lead_b2b_submit`

## Карта
- Встроенная Google Maps iframe с локальным адресом. Замените placeholder API key (`AIzaSyD-sample`) на валидный.

## Деплой
1. Настройте переменные окружения (см. `.env.example`).
2. Выполните `npm run build` и деплойте на Vercel/Netlify.
3. Обновите `metadataBase` и домен в sitemap/robots на реальный.

## Локализационная таблица
В `docs/localization-map.csv` приведено сопоставление ключей и переводов для hand-off редакторам.

## CMS-схема и аналитика
- `docs/cms-schema.md` — описание структуры `cms.json`.
- `docs/analytics-events.md` — карта событий и рекомендации по подключению GA4/GTM.

## Дизайн-гайд и ассеты
- См. `docs/design-guidelines.md` для цветовой палитры, типографики и рекомендаций по изображениям (WebP/srcset/LQIP).

