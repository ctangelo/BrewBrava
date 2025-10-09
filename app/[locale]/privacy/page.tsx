import Link from 'next/link';
import { getCmsContent } from '@/lib/get-cms';
import { isLocale, type Locale } from '@/lib/i18n';

const privacyContent = {
  en: {
    title: 'Privacy Policy',
    paragraphs: [
      'We collect contact details submitted through the partner form solely for communication about Brew Brava products.',
      'Data is stored securely and not shared with third parties without explicit consent.',
      'You may request removal of your data at any time by emailing hello@brewbrava.com.'
    ]
  },
  ru: {
    title: 'Политика конфиденциальности',
    paragraphs: [
      'Мы собираем контактные данные из формы партнёров исключительно для коммуникации о продуктах Brew Brava.',
      'Данные хранятся безопасно и не передаются третьим лицам без явного согласия.',
      'Вы можете запросить удаление данных в любое время, написав на hello@brewbrava.com.'
    ]
  },
  vn: {
    title: 'Chính sách bảo mật',
    paragraphs: [
      'Chúng tôi chỉ thu thập thông tin liên hệ từ biểu mẫu đối tác để trao đổi về sản phẩm Brew Brava.',
      'Dữ liệu được lưu trữ an toàn và không chia sẻ cho bên thứ ba nếu không có sự đồng ý rõ ràng.',
      'Bạn có thể yêu cầu xóa dữ liệu bất cứ lúc nào bằng cách gửi email đến hello@brewbrava.com.'
    ]
  }
} as const;

export default async function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    return null;
  }
  const locale = params.locale as Locale;
  const content = privacyContent[locale];
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
