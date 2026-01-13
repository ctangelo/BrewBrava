"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ScrollText, CheckCircle2, Hop, Wheat } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero, HeroContent } from "@/components/Hero";
import { Section } from "@/components/Section";
import { BeerCard } from "@/components/BeerCard";
import { ContactForm, ContactFormCopy } from "@/components/ContactForm";
import { Footer, FooterCopy } from "@/components/Footer";
import { Language } from "@/lib/i18n";
import { ImageCarousel } from "@/components/ImageCarousel";


interface PageCopy {
  header: {
    links: { href: string; label: string }[];
    cta: string;
    language: string;
  };
  hero: HeroContent;
  about: {
    title: string;
    subtitle: string;
    body: string[];
    tags: string[];
  };
  craft: {
    title: string;
    subtitle: string;
    body: string;
  };
  team: {
    title: string;
    subtitle: string;
    body: string[];
    quote: string;
  };
  cafe: {
    title: string;
    subtitle: string;
    copy: string;
    cards: { title: string; copy: string }[];
  };
  trust: {
    title: string;
    subtitle: string;
    text: string;
    items: { title: string; copy: string }[];
  };
  styles: {
    title: string;
    subtitle: string;
    beers: { title: string; description: string; abv: string; tags: string[] }[];
    note: string;
    cta: string;
  };
  locations: {
    title: string;
    subtitle: string;
    copy: string;
    places: string[];
    note: string;
    button: string;
    ctaCopy: string;
  };
  b2b: {
    title: string;
    subtitle: string;
    intro: string;
    listTitle: string;
    bullets: string[];
    outro: string;
  };
  form: ContactFormCopy;
  footer: FooterCopy;
}

const translations: Record<Language, PageCopy> = {
  ru: {
    header: {
      links: [
        { href: "#about", label: "О нас" },
        { href: "#styles", label: "Сорта" },
        { href: "#team", label: "Команда" },
        { href: "#cafe", label: "Кафе" },
        // { href: "#trust", label: "Лицензии" },
        { href: "#locations", label: "Где найти" },
        { href: "#b2b", label: "B2B" },
        { href: "#contacts", label: "Контакты" },
      ],
      cta: "Стать партнёром",
      language: "Язык",
    },
    hero: {
      kicker: "Brew Brava",
      title: "Brew Brava — Крафтовое пиво, Нячанг",
      subtitle: "Крафтовое пиво с характером",
      badges: ["Сварено в Нячанге", "Натуральные ингредиенты", "Свежий розлив"],
      primaryCta: "Посмотреть сорта",
      secondaryCta: "Где попробовать",
    },
    about: {
      title: "Варка пива",
      subtitle: "Наши ингредиенты",
      body: [
        "Мы варим честно, с пристальным вниманием к технологическому процесу.",
        "Используем только натуральные ингредиенты: импортный солод, ароматный хмель, специальные дрожжи и чистую воду. Варим по классическим рецептам, подходим с опытом и вниманием к производству каждой партии.",
      ],
      tags: ["Контроль качества", "Свежесть каждой варки", "Уважение к стилям"],
    },
    craft: {
      title: "Классика + эксперименты",
      subtitle: "Стили",
      body: "Мы варим классику, которую любят во всём мире — Pilsner, IPA, Porter. А ещё экспериментируем с местными тропическими ингредиентами, как Mango Ale. Всё пиво свежее, сваренное в Нячанге.",
    },
    team: {
      title: "Команда",
      subtitle: "Кто мы",
      body: [
        "Мы команда искренних любителей пива, которые давно работают в Нячанге. Раньше наши пивовары варили пиво и создавали рецепты для ресторанов Story, Pankoff и Shultz, а с 2024 года открыли собственную пивоварню Brew Brava.",
        
      ],
      quote: "«Наша цель — делать крафтовое пиво, которое любят и местные, и гости города.»",
    },
    cafe: {
      title: "Кафе-пивоварня",
      subtitle: "Тапрум",
      copy: "В нашем кафе вы можете попробовать пиво прямо на пивоварне и своими глазами увидеть оборудование, которое мы используем. Прямой розлив из танков брожения, свежесть и вкус, которых нет в бутылках из супермаркета. Уютная атмосфера, доступные цены и настоящая крафтовая культура в Нячанге.",
      cards: [
        { title: "Прямой розлив", copy: "Пиво из танков — максимум свежести." },
        { title: "Увидеть производство", copy: "Оборудование и процесс в открытом доступе." },
        { title: "Культура и атмосфера", copy: "Место, куда хочется вернуться." },
      ],
    },
    trust: {
      title: "Лицензии и сертификаты",
      subtitle: "Доверие",
      text:"Вся продукция Brew Brava легальна и сертифицирована. У нас есть лицензии на производство и продажу пива, сертификаты качества по каждому сорту. Мы открыты и честны со своими клиентами и партнёрами.",
      items: [
        { title: "Лицензии", copy: "Лицензии на производство и продажу пива." },
        { title: "Сертификаты", copy: "Сертификаты качества на каждый сорт." },
        { title: "Честность", copy: "Открытость в документации и поставках." },
      ],
    },

    styles: {
      title: "Сорта",
      subtitle: "Линейка",
      beers: [
        {
          title: "Pilsner",
          description: "Классический светлый лагер с прозрачным цветом и сбалансированным вкусом. Мягкая солодовая основа сочетается с лёгкой, освежающей хмелевой горчинкой. Пьётся легко и оставляет чистое, сухое послевкусие.",
          abv: "~4.8%",
          tags: ["лёгкое", "лагер", "освежающее"],
        },
        {
          title: "IPA",
          description: "Ароматный и насыщенный эль с ярко выраженным хмелевым характером. Во вкусе раскрываются цитрусовые и фруктовые оттенки, дополненные приятной горчинкой. Полнотелый, выразительный и запоминающийся сорт для любителей интенсивного вкуса.",
          abv: "~5.6%",
          tags: ["хмельное", "цитрусовое", "ароматное"],
        },
        {
          title: "Porter",
          description: "Тёмный эль с глубоким цветом и мягкой текстурой. Вкус округлый и сбалансированный, с лёгкими сладковатыми нотами и бархатным послевкусием. Спокойный и насыщенный сорт, идеально подходящий для неспешного наслаждения.",
          abv: "~5.5%",
          tags: ["тёмное", "шоколад", "мягкое"],
        },
        {
          title: "Mango Ale",
          description: "Сочный фруктовый эль с ярким ароматом спелого манго. Вкус свежий и гармоничный, с лёгкой сладостью и мягкой кислинкой. Освежающий и экзотический сорт, который легко пьётся и оставляет приятное послевкусие.",
          abv: "~5%",
          tags: ["фруктовое", "манго", "тропическое"],
        },
      ],
      note: "Мы варим классику, которую любят во всём мире — Pilsner, IPA, Porter. А ещё экспериментируем с местными тропическими ингридиентами, как Mango Ale. Всё пиво свежее, сваренное в Нячанге.",
      cta: "Запросить прайс (B2B)",
    },
    locations: {
      title: "Где можно найти наше пиво",
      subtitle: "Точки",
      copy: "Наше пиво подают в барах, ресторанах и магазинах Нячанга. Мы активно расширяем сеть партнёров и готовы предложить лучшие условия для новых заведений.",
      places: [
        "Бар SEA WAVE — набережная Нячанга",
        "Ресторан Lotus Terrace — Tran Phu",
        "Маркет Craft Corner — центр города",
        "Beach Club Breeze — север Нячанга",
        "Pizzeria Vespa — туристический квартал",
      ],
      note: "Список обновляется",
      button: "Добавить своё заведение",
      ctaCopy: "Напишите нам — подберём формат поставок и оборудование.",
    },
    b2b: {
      title: "B2B — Партнёрам Brew Brava",
      subtitle: "Сотрудничество",
      intro:
        "Мы работаем с кафе, барами, ресторанами и магазинами. Поставляем пиво в кегах и бутылках. При необходимости устанавливаем оборудование для розлива и предоставляем фирменные кружки. Сотрудничество с Brew Brava — это свежие поставки, лицензированный продукт и поддержка партнёров.",
      listTitle: "Что мы предлагаем:",
      bullets: [
        "Пиво в бутылках и кегах — свежие партии и стабильное качество",
        "Оборудование для розлива — установка, настройка и техническая поддержка",
        "Работа с магазинами, барами, кафе и ресторанами",
        "Регулярные поставки и удобная логистика",
        "Лицензированный продукт, соответствующий всем требованиям",
        "Персональный подход и оперативный сервис",
      ],
      outro:
        "Сотрудничая с Brew Brava, вы получаете не просто поставщика пива, а партнёра, заинтересованного в росте ваших продаж и долгосрочном успехе.",
    },
    form: {
      labels: {
        name: "Имя",
        company: "Заведение / Компания",
        phone: "Телефон / WhatsApp",
        email: "Email",
        message: "Сообщение",
      },
      placeholders: {
        name: "Ваше имя",
        company: "Название заведения",
        phone: "+84 ...",
        email: "you@example.com",
        message: "Расскажите, как вам удобно сотрудничать",
      },
      submitLabel: "Отправить заявку",
      requiredError: "Обязательное поле",
      emailError: "Некорректный email",
      disclaimer: "Мы ответим в течение 1 рабочего дня.",
      success: "Заявка сохранена. Мы свяжемся с вами — проверьте корректность контактов.",
    },
    footer: {
      contactsLabel: "Контакты",
      contactsTitle: "Всегда на связи",
      phone: "+84 (000) 000-00-00",
      email: "hello@brewbrava.com",
      address: "Нячанг, Вьетнам",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Google Maps", href: "https://maps.google.com" },
      ],
      scrollLabel: "Наверх",
      scrollTitle: "Плавный скролл",
      scrollBody: "Хотите ещё раз взглянуть на сорта? Вернитесь к началу страницы и выберите разделы, которые важны для вас.",
      scrollCta: "Наверх",
      footerNote: "Крафтовое пиво с уважением к ремеслу.",
    },
  },
  en: {
    header: {
      links: [
        { href: "#about", label: "About" },
        { href: "#styles", label: "Lineup" },
        { href: "#team", label: "Team" },
        { href: "#cafe", label: "Cafe" },
        { href: "#locations", label: "Where to find" },
        { href: "#b2b", label: "B2B" },
        { href: "#contacts", label: "Contacts" },
      ],
      cta: "Become a partner",
      language: "Language",
    },
    hero: {
      kicker: "Brew Brava",
      title: "Brew Brava — Craft beer, Nha Trang",
      subtitle: "Craft beer with character",
      badges: ["Brewed in Nha Trang", "Natural ingredients", "Freshly tapped"],
      primaryCta: "See the beers",
      secondaryCta: "Where to drink",
    },
    about: {
      title: "Our Brewing Process & Ingredients",
      subtitle: "Process",
      body: [
        "We brew our beer honestly, with close attention to every detail of the brewing process. We use only natural ingredients: imported malt, aromatic hops, carefully selected brewing yeast, and clean water.",
        "Each batch is brewed using classic recipes, guided by experience, precision, and craftsmanship.",
      ],
      tags: ["Quality control", "Fresh every batch", "Respect for styles"],
    },
    craft: {
      title: "Classics + experiments",
      subtitle: "Styles",
      body: "We brew the classics loved worldwide — Pilsner, IPA, Porter. And we experiment with local tropical ingredients like Mango Ale. Every beer is fresh, brewed in Nha Trang.",
    },
    team: {
      title: "Who We Are",
      subtitle: "People",
      body: [
        "We are a group of passionate beer lovers who have been working in Nha Trang for many years. Our brewers previously developed beer recipes for restaurants such as Story, Pankoff, and Shultz. In 2024, we opened our own brewery, Brew Brava.",
        "Our goal is to create high-quality craft beers enjoyed by both locals and visitors.",
      ],
      quote: '“Craft is honesty and the taste of the sea in every glass.”',
    },
    cafe: {
      title: "Café & Brewery",
      subtitle: "Cafe",
      copy: "At our café, you can enjoy beer right at the brewery and see the brewing equipment firsthand. Our beer is served fresh directly from the fermentation tanks, offering a level of freshness and flavor completely different from bottled beer found in supermarkets. With a cozy atmosphere, affordable prices, and an authentic craft beer culture, we bring a true brewery experience to Nha Trang.",
      cards: [
        { title: "Tank-to-tap", copy: "Beer straight from the tanks — maximum freshness." },
        { title: "See the brewhouse", copy: "Equipment and process in open view." },
        { title: "Culture & vibe", copy: "A place you want to return to." },
      ],
    },
    trust: {
      title: "Licenses & Certifications",
      subtitle: "Trust",
      text:"All Brew Brava products are fully legal and certified. We hold all required licenses for beer production and business operations, as well as quality certifications for each product. We are committed to transparency and honesty with our customers and partners.",
      items: [
        { title: "Licenses", copy: "Licenses for brewing and selling beer." },
        { title: "Certificates", copy: "Quality certificates for every style." },
        { title: "Transparency", copy: "Openness in documentation and supply." },
      ],
    },
    styles: {
      title: "Our Beers",
      subtitle: "Lineup",
      beers: [
        {
          title: "Pilsner — light and crisp (ABV ~4.8%)",
          description: "A classic light lager with a clear appearance and a well-balanced flavor. Soft malt notes blend with a gentle, refreshing hop bitterness. Easy to drink, with a clean, dry finish.",
          abv: "~4.8%",
          tags: ["light", "lager", "refreshing"],
        },
        {
          title: "IPA — bold and hoppy (ABV ~6%)",
          description: "A bold and aromatic beer with a distinctive hop character. Bright citrus and fruity notes are complemented by a pleasant bitterness. Well-rounded, full-flavored, and unforgettable—perfect for those who appreciate intense taste.",
          abv: "~6%",
          tags: ["hoppy", "citrus", "aromatic"],
        },
        {
          title: "Porter — rich and smooth (ABV ~5.5%)",
          description: "A dark beer with a rich color and a smooth, velvety body. Well-rounded and balanced, with gentle sweetness and a soft, lingering finish. A mellow yet full-flavored beer, ideal for relaxed sipping.",
          abv: "~5.5%",
          tags: ["dark", "chocolate", "smooth"],
        },
        {
          title: "Mango Ale — fruity and tropical (ABV ~5%)",
          description: "A rich and flavorful fruit beer infused with the vibrant aroma of ripe mango. Fresh and well-balanced, with light sweetness and gentle acidity. Refreshing, distinctive, and easy to drink, leaving a pleasant aftertaste.",
          abv: "~5%",
          tags: ["fruity", "mango", "tropical"],
        },
      ],
      note: "We brew classic beer styles loved all over the world—Pilsner, IPA, and Porter—while also experimenting with local tropical ingredients, such as our Mango Ale. All of our beers are fresh and brewed locally in Nha Trang.",
      cta: "Request price list (B2B)",
    },
    locations: {
      title: "Where to find our beer",
      subtitle: "Locations",
      copy: "Our beer is served at bars, restaurants, and retail outlets throughout Nha Trang. We are actively expanding our partner network and are ready to offer competitive terms to new business partners.",
      places: [
        "SEA WAVE Bar — Nha Trang promenade",
        "Lotus Terrace Restaurant — Tran Phu",
        "Craft Corner Market — city center",
        "Beach Club Breeze — north Nha Trang",
        "Pizzeria Vespa — tourist district",
      ],
      note: "List keeps growing",
      button: "Add your venue",
      ctaCopy: "Tell us about your spot — we’ll suggest supply formats and equipment.",
    },
    b2b: {
      title: "B2B – For Our Partners",
      subtitle: "Collaboration",
      intro:
        "We work with cafés, bars, restaurants, and retail stores. We supply beer in both kegs and bottles, install draft beer systems, and provide branded glassware when needed.",
      listTitle: "What we offer:",
      bullets: [
        "Beer in bottles and kegs — fresh batches and stable quality",
        "Draft equipment — installation, setup, and technical support",
        "Work with shops, bars, cafes, and restaurants",
        "Regular deliveries and convenient logistics",
        "Licensed product that meets all requirements",
        "Personal approach and responsive service",
      ],
      outro:
        "Partnering with Brew Brava means fresh deliveries, fully licensed products, and reliable, professional support.",
    },
    form: {
      labels: {
        name: "Name",
        company: "Venue / Company",
        phone: "Phone / WhatsApp",
        email: "Email",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        company: "Venue name",
        phone: "+84 ...",
        email: "you@example.com",
        message: "Tell us how you prefer to work together",
      },
      submitLabel: "Send request",
      requiredError: "Required field",
      emailError: "Invalid email",
      disclaimer: "We’ll reply within 1 business day.",
      success: "Request saved. We’ll get back to you — please check your contacts are correct.",
    },
    footer: {
      contactsLabel: "Contacts",
      contactsTitle: "Always in touch",
      phone: "+84 (000) 000-00-00",
      email: "hello@brewbrava.com",
      address: "Nha Trang, Vietnam",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Google Maps", href: "https://maps.google.com" },
      ],
      scrollLabel: "Back to top",
      scrollTitle: "Smooth scroll",
      scrollBody: "Want another look at the lineup? Return to the top and jump to the sections you need.",
      scrollCta: "To top",
      footerNote: "Craft beer with respect for the craft.",
    },
  },
  vi: {
    header: {
      links: [
        { href: "#about", label: "Về chúng tôi" },
        { href: "#styles", label: "Dòng bia" },
        { href: "#cafe", label: "Taproom" },
        { href: "#locations", label: "Địa điểm" },
        { href: "#b2b", label: "B2B" },
        { href: "#contacts", label: "Liên hệ" },
      ],
      cta: "Trở thành đối tác",
      language: "Ngôn ngữ",
    },
    hero: {
      kicker: "Brew Brava",
      title: "Brew Brava — Bia thủ công, Nha Trang",
      subtitle: "Bia thủ công đậm cá tính. Nấu bằng cả tâm huyết bên bờ biển.",
      badges: ["Nấu tại Nha Trang", "Nguyên liệu tự nhiên", "Rót tươi"],
      primaryCta: "Xem các dòng bia",
      secondaryCta: "Địa điểm thưởng thức",
    },
    about: {
      title: "Chúng tôi nấu bia chân thật",
      subtitle: "Quy trình",
      body: [
        "Chúng tôi nấu bia với sự chỉn chu từng chi tiết và kiểm soát chặt chẽ quy trình. Nguyên liệu hoàn toàn tự nhiên: malt nhập khẩu, hoa bia thơm, men bia chuyên dụng và nguồn nước sạch.",
        "Dựa trên công thức cổ điển và thực hiện mỗi mẻ bằng kinh nghiệm, sự chính xác và tôn trọng nghề làm bia.",
      ],
      tags: ["Kiểm soát chất lượng", "Tươi ở mỗi mẻ nấu", "Tôn trọng phong cách"],
    },
    craft: {
      title: "Cổ điển + thử nghiệm",
      subtitle: "Phong cách",
      body: "Chúng tôi nấu những phong cách kinh điển được yêu thích khắp thế giới — Pilsner, IPA, Porter. Và thử nghiệm với nguyên liệu nhiệt đới địa phương như Mango Ale. Tất cả đều tươi, nấu tại Nha Trang.",
    },
    team: {
      title: "Đội ngũ",
      subtitle: "Con người",
      body: [
        "Chúng tôi là những người yêu bia thực thụ đã gắn bó với Nha Trang nhiều năm. Trước đây, các brewmaster của chúng tôi nấu và phát triển công thức cho Story, Pankoff và Shultz; từ 2024 mở riêng Brew Brava.",
        "Mục tiêu của chúng tôi — làm bia thủ công được cả người địa phương lẫn du khách yêu thích.",
      ],
      quote: '“Bia thủ công là sự chân thật và vị biển trong mỗi ly.”',
    },
    cafe: {
      title: "Quán cafe tại nhà nấu",
      subtitle: "Taproom",
      copy: "Tại quán, bạn có thể thử bia ngay tại nhà nấu và tận mắt xem thiết bị chúng tôi dùng. Rót thẳng từ tank lên ly — độ tươi mà chai siêu thị không có được. Không khí ấm cúng, giá hợp lý và văn hóa craft thật sự ở Nha Trang.",
      cards: [
        { title: "Rót từ tank", copy: "Bia trực tiếp từ tank – tươi tối đa." },
        { title: "Xem quy trình", copy: "Thiết bị và quy trình luôn mở để tham quan." },
        { title: "Văn hóa & không khí", copy: "Nơi bạn muốn quay lại nhiều lần." },
      ],
    },
    trust: {
      title: "Hợp pháp và được chứng nhận",
      subtitle: "Tin cậy",
      text:"",
      items: [
        { title: "Giấy phép", copy: "Đầy đủ giấy phép sản xuất và bán bia." },
        { title: "Chứng nhận", copy: "Chứng nhận chất lượng cho từng dòng bia." },
        { title: "Minh bạch", copy: "Mở với tài liệu và chuỗi cung ứng." },
      ],
    },
    styles: {
      title: "Các dòng bia",
      subtitle: "Lineup",
      beers: [
        {
          title: "Pilsner — nhẹ và sảng khoái (ABV ~4.8%)",
          description: "Phong cách lager kinh điển: sáng, mượt, hoàn hảo cho ngày nóng.",
          abv: "~4.8%",
          tags: ["nhẹ", "lager", "mát lạnh"],
        },
        {
          title: "IPA — đậm và nhiều hoa bia (ABV ~5.6%)",
          description: "Bia tràn ngập hương cam chanh và trái cây nhiệt đới. Lựa chọn yêu thích của tín đồ hop.",
          abv: "~5.6%",
          tags: ["nhiều hop", "cam chanh", "thơm"],
        },
        {
          title: "Porter — đậm đà và êm (ABV ~5.5%)",
          description: "Bia đen với nốt chocolate và cà phê, dễ uống và ấm áp.",
          abv: "~5.5%",
          tags: ["bia đen", "chocolate", "êm"],
        },
        {
          title: "Mango Ale — trái cây và nhiệt đới (ABV ~5%)",
          description: "Ale nhẹ với xoài. Vị trái cây nổi bật và hậu vị đắng mát.",
          abv: "~5%",
          tags: ["trái cây", "xoài", "nhiệt đới"],
        },
      ],
      note: "Muốn thử hoặc nhận bảng giá? Chúng tôi phản hồi nhanh và gợi ý cách giao phù hợp.",
      cta: "Yêu cầu bảng giá (B2B)",
    },
    locations: {
      title: "Có thể tìm bia ở đâu",
      subtitle: "Địa điểm",
      copy: "Bia của chúng tôi có tại các quán bar, nhà hàng và cửa hàng ở Nha Trang. Chúng tôi đang mở rộng mạng lưới đối tác và sẵn sàng ưu đãi cho địa điểm mới.",
      places: [
        "SEA WAVE Bar — dọc bờ biển Nha Trang",
        "Lotus Terrace Restaurant — Trần Phú",
        "Chợ Craft Corner — trung tâm",
        "Beach Club Breeze — phía bắc Nha Trang",
        "Pizzeria Vespa — khu du lịch",
      ],
      note: "Danh sách đang cập nhật",
      button: "Thêm địa điểm của bạn",
      ctaCopy: "Hãy nói về địa điểm của bạn — chúng tôi sẽ đề xuất cách cung cấp và thiết bị phù hợp.",
    },
    b2b: {
      title: "B2B — Đối tác Brew Brava",
      subtitle: "Hợp tác",
      intro:
        "Brew Brava là nhà cung cấp bia thủ công đáng tin cậy cho cửa hàng, quán bar và nhà hàng. Chúng tôi cung cấp bia chai và keg ổn định, thiết bị rót chuyên nghiệp và dịch vụ tận tâm ở mọi bước.",
      listTitle: "Chúng tôi cung cấp:",
      bullets: [
        "Bia chai và keg — mẻ tươi, chất lượng ổn định",
        "Thiết bị rót — lắp đặt, cân chỉnh và hỗ trợ kỹ thuật",
        "Làm việc với cửa hàng, quán bar, cafe và nhà hàng",
        "Giao hàng định kỳ và logistics thuận tiện",
        "Sản phẩm có giấy phép, đáp ứng mọi tiêu chuẩn",
        "Tiếp cận cá nhân và hỗ trợ nhanh chóng",
      ],
      outro:
        "Hợp tác với Brew Brava, bạn nhận được không chỉ nhà cung cấp bia mà là đối tác đồng hành trong tăng trưởng doanh số và thành công dài hạn.",
    },
    form: {
      labels: {
        name: "Tên",
        company: "Địa điểm / Công ty",
        phone: "Điện thoại / WhatsApp",
        email: "Email",
        message: "Tin nhắn",
      },
      placeholders: {
        name: "Tên của bạn",
        company: "Tên địa điểm",
        phone: "+84 ...",
        email: "you@example.com",
        message: "Hãy cho biết bạn muốn hợp tác thế nào",
      },
      submitLabel: "Gửi yêu cầu",
      requiredError: "Bắt buộc",
      emailError: "Email không hợp lệ",
      disclaimer: "Chúng tôi sẽ phản hồi trong 1 ngày làm việc.",
      success: "Đã lưu yêu cầu. Chúng tôi sẽ liên hệ — vui lòng kiểm tra thông tin liên lạc.",
    },
    footer: {
      contactsLabel: "Liên hệ",
      contactsTitle: "Luôn sẵn sàng",
      phone: "+84 (000) 000-00-00",
      email: "hello@brewbrava.com",
      address: "Nha Trang, Việt Nam",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Google Maps", href: "https://maps.google.com" },
      ],
      scrollLabel: "Lên đầu trang",
      scrollTitle: "Cuộn mượt",
      scrollBody: "Muốn xem lại các dòng bia? Quay về đầu trang và chọn mục bạn cần.",
      scrollCta: "Lên trên",
      footerNote: "Bia thủ công với sự tôn trọng nghề làm bia.",
    },
  },
};

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("ru");
  const copy = translations[language];

  return (
    <main className="relative min-h-screen bg-background text-white">
      <Header
        links={copy.header.links}
        ctaLabel={copy.header.cta}
        language={language}
        languageLabel={copy.header.language}
        onLanguageChange={setLanguage}
      />
      <Hero content={copy.hero} />

      <Section id="about" title={copy.about.title} subtitle={copy.about.subtitle}>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-gray-200">
            {copy.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-3 text-sm">
              {copy.about.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft md:h-full">
            {/* <Image src="/images/about.jpg" alt="Процесс варки" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /> */}
            <ImageCarousel
              images={[
                { src: "/images/about_1.jpg", alt: "Brew Brava" },
                { src: "/images/about_4.jpg", alt: "Brew Brava" },
                { src: "/images/about_3.jpg", alt: "Brew Brava" },
                { src: "/images/about_2.jpg", alt: "Brew Brava" },
              ]}
              slideClassName="h-72"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
          </div>
        </div>
      </Section>

      <Section id="styles" title={copy.styles.title} subtitle={copy.styles.subtitle} tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {copy.styles.beers.map((style, index) => (
            <BeerCard key={style.title} index={index} {...style} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300">{copy.styles.note}</p>
          <a
            href="#b2b"
            className="rounded-full bg-accent px-6 py-3 text-center text-black font-semibold shadow-soft transition hover:-translate-y-1"
          >
            {copy.styles.cta}
          </a>
        </div>
      </Section>

      <Section id="team" title={copy.team.title} subtitle={copy.team.subtitle}>
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4 text-gray-200">
            {copy.team.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote className="rounded-2xl border border-accent/40 bg-accent/10 p-4 text-lg text-accent">{copy.team.quote}</blockquote>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft">
            {/* <Image src="/images/team.jpg" alt="Команда Brew Brava" fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" /> */}
            <ImageCarousel
              images={[
                { src: "/images/team_1.jpg", alt: "Brew Brava" },
                { src: "/images/team_2.jpg", alt: "Brew Brava" },
                { src: "/images/team_3.jpg", alt: "Brew Brava" },
              ]}
              slideClassName="h-[300px] md:h-[360px]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </Section>

      <Section id="cafe" title={copy.cafe.title} subtitle={copy.cafe.subtitle} tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4 text-gray-200">
            <p>{copy.cafe.copy}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {/* {copy.cafe.cards.map((item) => (
                <div key={item.title} className="card-sheen rounded-2xl border border-white/10 bg-surface/80 p-4">
                  <h4 className="font-display text-lg text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.copy}</p>
                </div>
              ))} */}
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft">
            {/* <Image src="/images/cafe.jpg" alt="Кафе при пивоварне" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" /> */}
            <ImageCarousel
              images={[
                { src: "/images/cafe_1.jpg", alt: "Brew Brava" },
                { src: "/images/cafe_2.jpg", alt: "Brew Brava" },
                { src: "/images/cafe_3.jpg", alt: "Brew Brava" },
              ]}
              slideClassName="h-72"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" /> */}
          </div>
        </div>
      </Section>

      <Section id="trust" title={copy.trust.title} subtitle={copy.trust.subtitle} tone="muted">
        {/* ПОДПИСЬ НАД ДОКУМЕНТАМИ */}
        <p className="mb-6 space-y-4 text-gray-200">
          {copy.trust.text}
        </p>

        {/* 2 A4 ДОКУМЕНТА ПО ЦЕНТРУ */}
        <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
          {/* Док 1 */}
          <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-soft aspect-[210/297]">
            <Image
              src="/images/trust_1.jpg"
              alt="Документ Brew Brava"
              fill
              className="object-contain bg-white"
              sizes="(min-width: 1024px) 30vw, 80vw"
              priority
            />
          </div>

          {/* Док 2 */}
          <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-soft aspect-[210/297]">
            <Image
              src="/images/trust_2.jpg"
              alt="Документ Brew Brava"
              fill
              className="object-contain bg-white"
              sizes="(min-width: 1024px) 30vw, 80vw"
            />
          </div>
        </div>

      </Section>

      <Section id="locations" title={copy.locations.title} subtitle={copy.locations.subtitle}>
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-3 text-gray-200">
            <p>{copy.locations.copy}</p>
            <ul className="space-y-2 text-sm">
              {copy.locations.places.map((place) => (
                <li key={place} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {place}
                </li>
              ))}
              <li className="text-gray-400">{copy.locations.note}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 text-white shadow-soft">
            <h4 className="font-display text-xl">{copy.locations.button}</h4>
            <p className="text-sm text-gray-200">{copy.locations.ctaCopy}</p>
            <a
              href="#b2b"
              className="mt-4 inline-flex w-full justify-center rounded-full border border-accent bg-accent px-4 py-3 text-black font-semibold shadow-soft transition hover:-translate-y-1"
            >
              {copy.locations.button}
            </a>
          </div>
        </div>
      </Section>

      <Section id="b2b" title={copy.b2b.title} subtitle={copy.b2b.subtitle} tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 text-gray-200">
            <p>{copy.b2b.intro}</p>
            <p className="font-display text-xl text-white">{copy.b2b.listTitle}</p>
            <ul className="space-y-2 text-sm text-gray-200">
              {copy.b2b.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-200">{copy.b2b.outro}</p>
          </div>
          <ContactForm copy={copy.form} />
        </div>
      </Section>

      <Footer copy={copy.footer} />
    </main>
  );
}
