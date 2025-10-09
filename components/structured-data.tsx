import { useMemo } from 'react';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface StructuredDataProps {
  locale: Locale;
}

export function StructuredData({ locale }: StructuredDataProps) {
  const { content } = useI18n();
  const { siteSettings, beers } = content;

  const data = useMemo(() => {
    const organization = {
      '@context': 'https://schema.org',
      '@type': 'FoodEstablishment',
      '@id': 'https://brewbrava.example.com/#organization',
      name: siteSettings.brand,
      description: siteSettings.meta.description[locale],
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteSettings.address.line1[locale],
        addressLocality: 'Nha Trang',
        addressRegion: 'Khanh Hoa',
        addressCountry: 'VN'
      },
      telephone: siteSettings.phone,
      email: siteSettings.email,
      image: siteSettings.meta.ogImage,
      sameAs: Object.values(siteSettings.social)
    };

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'Brewery',
      name: siteSettings.brand,
      description: siteSettings.meta.description[locale],
      telephone: siteSettings.phone,
      email: siteSettings.email,
      image: siteSettings.meta.ogImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteSettings.address.line1[locale],
        addressLocality: 'Nha Trang',
        addressRegion: 'Khanh Hoa',
        postalCode: '650000',
        addressCountry: 'VN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteSettings.coordinates.lat,
        longitude: siteSettings.coordinates.lng
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '23:00'
        }
      ],
      url: 'https://brewbrava.example.com'
    };

    const products = beers.map((beer) => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: beer.name[locale],
      description: beer.desc_short[locale],
      brand: siteSettings.brand,
      image: beer.image_main,
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'AlcoholByVolume',
          value: `${beer.abv}%`
        },
        beer.ibu
          ? {
              '@type': 'PropertyValue',
              name: 'IBU',
              value: String(beer.ibu)
            }
          : null
      ].filter(Boolean)
    }));

    return [organization, localBusiness, ...products];
  }, [beers, locale, siteSettings]);

  return (
    <>
      {data.map((entry, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}
    </>
  );
}
