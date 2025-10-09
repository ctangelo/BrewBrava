import Link from 'next/link';
import { getCmsContent } from '@/lib/get-cms';
import { isLocale, type Locale } from '@/lib/i18n';

const termsContent = {
  en: {
    title: 'Terms of Service',
    paragraphs: [
      'By visiting Brew Brava you agree to comply with Vietnamese alcohol regulations and confirm you are of legal drinking age.',
      'Partnership agreements are confirmed via signed contracts with mutually agreed commercial terms.',
      'All visual assets and brand materials remain the intellectual property of Brew Brava unless otherwise stated.'
    ]
  },
  ru: {
    title: 'Условия использования',
    paragraphs: [
      'Посещая Brew Brava, вы соглашаетесь соблюдать вьетнамские правила в сфере алкоголя и подтверждаете совершеннолетие.',
      'Партнёрские соглашения закрепляются подписанными договорами с согласованными коммерческими условиями.',
      'Все визуальные материалы и бренд-ассеты остаются интеллектуальной собственностью Brew Brava, если не указано иное.'
    ]
  },
  vn: {
    title: 'Điều khoản sử dụng',
    paragraphs: [
      'Khi đến Brew Brava, bạn đồng ý tuân thủ quy định về đồ uống có cồn tại Việt Nam và xác nhận đủ tuổi uống bia.',
      'Thoả thuận hợp tác được xác nhận bằng hợp đồng với các điều khoản thương mại đã thống nhất.',
      'Tất cả tư liệu hình ảnh và tài sản thương hiệu thuộc sở hữu trí tuệ của Brew Brava trừ khi có thỏa thuận khác.'
    ]
  }
} as const;

export default async function TermsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    return null;
  }
  const locale = params.locale as Locale;
  const content = termsContent[locale];
  const cms = await getCmsContent();
  const basePath = locale === 'vn' ? '/' : `/${locale}`;

  return (
    <section className="section-spacer">
      <div className="mx-auto max-w-4xl px-4">
        <Link href={basePath} className="text-sm text-brand">
          ← {cms.siteSettings.brand}
        </Link>
        <h1 className="mt-4 text-3xl font-display text-night">{content.title}</h1>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
