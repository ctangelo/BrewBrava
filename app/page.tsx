import Image from "next/image";
import { ShieldCheck, ScrollText, CheckCircle2, Hop, Wheat } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { BeerCard } from "@/components/BeerCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const beerStyles = [
  {
    title: "Pilsner — лёгкий и освежающий (ABV ~4.8%)",
    description: "Классика лагерного стиля: светлый, мягкий, идеально подходит для жаркого дня.",
    abv: "~4.8%",
    tags: ["лёгкое", "лагер", "освежающее"],
  },
  {
    title: "IPA — яркий и хмельной (ABV ~5.6%)",
    description:
      "Пиво с насыщенным ароматом цитрусов и тропических фруктов. Любимый выбор любителей крафта и хмеля.",
    abv: "~5.6%",
    tags: ["хмельное", "цитрусовое", "ароматное"],
  },
  {
    title: "Porter — насыщенный и мягкий (ABV ~5.5%)",
    description: "Тёмное пиво с нотками шоколада и кофе, лёгкое и питкое. Отличный выбор для вечера.",
    abv: "~5.5%",
    tags: ["тёмное", "шоколад", "мягкое"],
  },
  {
    title: "Mango Ale — фруктовый и тропический (ABV ~5%)",
    description: "Нежный эль с добавлением манго. Яркий фруктовый вкус и лёгкая освежающая горчинка.",
    abv: "~5%",
    tags: ["фруктовое", "манго", "тропическое"],
  },
];

const locations = [
  "Бар SEA WAVE — набережная Нячанга",
  "Ресторан Lotus Terrace — Tran Phu",
  "Маркет Craft Corner — центр города",
  "Beach Club Breeze — север Нячанга",
  "Pizzeria Vespa — туристический квартал",
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-white">
      <Header />
      <Hero />

      <Section id="about" title="Мы варим честно" subtitle="Процессы">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-gray-200">
            <p>
              Мы варим пиво честно — с вниманием к каждой детали и строгим контролем технологического процесса. Используем
              только натуральные ингредиенты: импортный солод, ароматный хмель, специальные пивные дрожжи и чистую воду.
            </p>
            <p>
              Работаем по классическим рецептам и подходим к варке каждой партии с опытом, точностью и уважением к ремеслу.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Контроль качества", "Свежесть каждой варки", "Уважение к стилям"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft md:h-full">
            <Image src="/images/about.jpg" alt="Процесс варки" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
          </div>
        </div>
      </Section>

      <Section id="craft" title="Классика + эксперименты" subtitle="Стили" tone="muted">
        <div className="space-y-4 text-gray-200">
          <p>
            Мы варим классику, которую любят во всём мире — Pilsner, IPA, Porter. А ещё экспериментируем с местными
            тропическими ингридиентами, как Mango Ale. Всё пиво свежее, сваренное в Нячанге.
          </p>
          <div className="flex items-center gap-6 text-accent">
            <div className="h-px flex-1 bg-gradient-to-r from-accent/50 via-accent to-accent/0" />
            <Hop />
            <Wheat />
            <ShieldCheck />
            <div className="h-px flex-1 bg-gradient-to-l from-accent/50 via-accent to-accent/0" />
          </div>
        </div>
      </Section>

      <Section id="team" title="Команда" subtitle="Люди">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4 text-gray-200">
            <p>
              Мы команда искренних любителей пива, которые давно работают в Нячанге. Раньше наши пивовары варили пиво и
              создавали рецепты для ресторанов Story, Pankoff и Shultz, а с 2024 года открыли собственную пивоварню Brew
              Brava.
            </p>
            <p>Наша цель — делать крафтовое пиво, которое любят и местные, и гости города.</p>
            <blockquote className="rounded-2xl border border-accent/40 bg-accent/10 p-4 text-lg text-accent">
              «Крафт — это честность и вкус моря в каждой кружке.»
            </blockquote>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft">
            <Image src="/images/team.jpg" alt="Команда Brew Brava" fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </Section>

      <Section id="cafe" title="Кафе при пивоварне" subtitle="Тапрум" tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4 text-gray-200">
            <p>
              В нашем кафе вы можете попробовать пиво прямо на пивоварне и своими глазами увидеть оборудование, которое мы
              используем. Прямой розлив из танков брожения — свежесть и вкус, которых не найти в бутылках из супермаркета.
              Уютная атмосфера, доступные цены и настоящая крафтовая культура в Нячанге.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Прямой розлив", copy: "Пиво из танков — максимум свежести." },
                { title: "Увидеть производство", copy: "Оборудование и процесс в открытом доступе." },
                { title: "Культура и атмосфера", copy: "Место, куда хочется вернуться." },
              ].map((item) => (
                <div key={item.title} className="card-sheen rounded-2xl border border-white/10 bg-surface/80 p-4">
                  <h4 className="font-display text-lg text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft">
            <Image src="/images/cafe.jpg" alt="Кафе при пивоварне" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
          </div>
        </div>
      </Section>

      <Section id="trust" title="Легально и сертифицировано" subtitle="Доверие">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Лицензии", copy: "Лицензии на производство и продажу пива.", icon: ScrollText },
            { title: "Сертификаты", copy: "Сертификаты качества на каждый сорт.", icon: CheckCircle2 },
            { title: "Честность", copy: "Открытость в документации и поставках.", icon: ShieldCheck },
          ].map(({ title, copy, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#0f0f15] p-5 shadow-soft">
              <div className="mb-3 inline-flex rounded-full bg-accent/15 p-2 text-accent">
                <Icon size={20} />
              </div>
              <h4 className="font-display text-lg text-white">{title}</h4>
              <p className="text-sm text-gray-300">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="styles" title="Сорта" subtitle="Линейка" tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {beerStyles.map((style, index) => (
            <BeerCard key={style.title} index={index} {...style} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300">Хотите попробовать или получить прайс? Мы быстро ответим и подберём формат поставок.</p>
          <a
            href="#b2b"
            className="rounded-full bg-accent px-6 py-3 text-center text-black font-semibold shadow-soft transition hover:-translate-y-1"
          >
            Запросить прайс (B2B)
          </a>
        </div>
      </Section>

      <Section id="locations" title="Где можно найти наше пиво" subtitle="Точки">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-3 text-gray-200">
            <p>
              Наше пиво подают в барах, ресторанах и магазинах Нячанга. Мы активно расширяем сеть партнёров и готовы
              предложить лучшие условия для новых заведений.
            </p>
            <ul className="space-y-2 text-sm">
              {locations.map((place) => (
                <li key={place} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {place}
                </li>
              ))}
              <li className="text-gray-400">Список обновляется</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 text-white shadow-soft">
            <h4 className="font-display text-xl">Добавить своё заведение</h4>
            <p className="text-sm text-gray-200">Напишите нам — подберём формат поставок и оборудование.</p>
            <a
              href="#b2b"
              className="mt-4 inline-flex w-full justify-center rounded-full border border-accent bg-accent px-4 py-3 text-black font-semibold shadow-soft transition hover:-translate-y-1"
            >
              Добавить своё заведение
            </a>
          </div>
        </div>
      </Section>

      <Section id="b2b" title="B2B — Партнёрам Brew Brava" subtitle="Сотрудничество" tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 text-gray-200">
            <p>
              Brew Brava — надёжный поставщик крафтового пива для магазинов, баров и ресторанов. Мы предлагаем стабильные
              поставки пива в бутылках и кегах, профессиональное оборудование для розлива и высокий уровень сервиса на каждом
              этапе сотрудничества.
            </p>
            <p className="font-display text-xl text-white">Что мы предлагаем:</p>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                "Пиво в бутылках и кегах — свежие партии и стабильное качество",
                "Оборудование для розлива — установка, настройка и техническая поддержка",
                "Работа с магазинами, барами, кафе и ресторанами",
                "Регулярные поставки и удобная логистика",
                "Лицензированный продукт, соответствующий всем требованиям",
                "Персональный подход и оперативный сервис",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-200">
              Сотрудничая с Brew Brava, вы получаете не просто поставщика пива, а партнёра, заинтересованного в росте ваших
              продаж и долгосрочном успехе.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
