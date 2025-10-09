# Структура контента `content/cms.json`

```json
{
  "siteSettings": {
    "brand": "Brew Brava",
    "address": { "line1": {"en": "..."}, "line2": {"en": "..."} },
    "phone": "+84 ...",
    "email": "hello@...",
    "hours": { "en": "Daily 11:00 – 23:00", ... },
    "coordinates": { "lat": 12.24, "lng": 109.19 },
    "mapsLink": "https://...",
    "social": { "facebook": "https://...", ... },
    "meta": {
      "title": {"en": "...", "ru": "...", "vi": "..."},
      "description": { ... },
      "ogImage": "https://..."
    }
  },
  "hero": { ... },
  "brewing": { "title": { ... }, "text": { ... }, "gallery": [ {"slug": "malt", "image": "https://...", "caption": { ... }} ] },
  "beers": [
    {
      "slug": "pilsner",
      "style": "Pilsner",
      "abv": 4.8,
      "ibu": 24,
      "available": true,
      "image_main": "https://...",
      "gallery": ["https://..."],
      "name": {"en": "Pilsner", ...},
      "desc_short": {"en": "...", ...},
      "desc_long": {"en": "...", ...}
    }
  ],
  "beersIntro": {"title": { ... }, "subtitle": { ... }, "cta": { ... }, "footer": { ... }},
  "team": {"title": { ... }, "text": { ... }, "gallery": [...]},
  "brewpub": {"title": { ... }, "highlights": [{"slug": "fresh", "text": { ... }}], "image": "https://..."},
  "licenses": {"items": [{"title": { ... }, "issue_date": "2024-02-12", "image": "https://..."}]},
  "availability": {"partners": [{"name": "Shoreside Hotel", "logo": "https://..."}], "fallback": { ... }},
  "b2b": {
    "title": { ... },
    "intro": { ... },
    "points": [{"slug": "formats", "text": { ... }}],
    "form": {
      "name": { ... },
      "phone": { ... },
      "email": { ... },
      "format": { ... },
      "volume": { ... },
      "comment": { ... },
      "consent": { ... },
      "submit": { ... },
      "success": { ... },
      "error": { ... },
      "validation": {"required": { ... }, "email": { ... }}
    },
    "image": "https://..."
  },
  "contact": {"title": { ... }, "ctaDirections": { ... }, "modalTitle": { ... }, "modalText": { ... }},
  "footer": {"mission": { ... }, "navigation": {"beers": { ... }, ... }, "privacy": { ... }, "terms": { ... }, "copyright": { ... }},
  "seo": {"og": {"type": "website", "image": "https://..."}}
}
```

## Добавление новых сущностей
- **Beer**: добавьте объект в массив `beers` и заполните поля `name`, `desc_short`, `desc_long` для всех локалей. `available` используется для фильтрации сезонных сортов.
- **Partner**: массив `availability.partners`; укажите `type` (`bar`, `hotel`, etc.) и ссылку.
- **Licenses**: массив `licenses.items`; `issue_date` — ISO8601.
- **B2B форма**: при добавлении поля добавьте перевод в `b2b.form` и настройте отображение в `components/sections/b2b-section.tsx`.

## Хранение ассетов
Пока используется CDN Unsplash. Для продакшена замените на собственный CDN и обновите ссылки.
