import Image from "next/image";
import { PHONE_HREF, WHATSAPP_URL, industries, sqFt } from "./contact";

const features = [
  "Single-Point Design-Build Accountability",
  "40,000-Tonne Annual Fabrication Capacity",
  "175+ In-House Structural Engineers",
  "ISO 9001:2015 & CE Certified Process",
];

const stats = [
  { value: "200", accent: "+", label: "Projects" },
  { value: "18", accent: "+", label: "Years Experience" },
  { value: "40,000 ", accent: "MT", label: "Annual Production" },
  { value: "175", accent: "+", label: "Engineering Team" },
];

// size = rendered logo size (px) inside the 90x40 tile, from the design.
const logos = [
  { file: "vwu", size: 42 },
  { file: "voltas", size: 75 },
  { file: "tvs", size: 75 },
  { file: "tata", size: 75 },
  { file: "stetter", size: 75 },
  { file: "srf", size: 75 },
  { file: "saveetha", size: 48 },
  { file: "sarvam", size: 31 },
  { file: "sanmar1", size: 51 },
  { file: "sanmar2", size: 41 },
  { file: "reliance", size: 44 },
  { file: "orbittal", size: 49 },
  { file: "nsi", size: 46 },
  { file: "mrf", size: 30 },
  { file: "lt", size: 32 },
  { file: "laf", size: 56 },
  { file: "komatsu", size: 30 },
];

// The mobile design shows only these four, in a static wrapped row.
const mobileLogos = [
  { file: "vwu", size: 39 },
  { file: "voltas", size: 50 },
  { file: "tvs", size: 52 },
  { file: "tata", size: 54 },
];

const selectBase =
  "max-sm:appearance-none max-sm:bg-[url(/hero/chevron.svg)] max-sm:bg-[length:15px] max-sm:bg-[position:right_22px_center] max-sm:bg-no-repeat max-sm:pl-[22px] max-sm:pr-[44px] text-[#757575] sm:text-[#6b6b6b]";

const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const fieldBase =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-[18px] py-3.5 text-xs text-[#060606] placeholder:text-[#757575] sm:px-4 sm:text-base sm:placeholder:text-[#6b6b6b] xl:px-3 2xl:px-4 lg:text-xs";

function LogoList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 gap-[50px] pr-[50px] pl-8"
      aria-hidden={hidden || undefined}
    >
      {logos.map(({ file, size }) => (
        <li
          key={file}
          className="flex h-10 w-[90px] shrink-0 items-center justify-center rounded-lg bg-[#f9f6f7]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny pre-sized webp; avoids 17 optimizer round-trips */}
          <img
            src={`/logos/${file}.webp`}
            alt=""
            width={size}
            height={size}
            loading="lazy"
            decoding="async"
            className="max-w-none object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

// Labels are visually hidden on mobile (placeholder-only design) but kept for screen readers.
function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="sr-only text-sm font-bold sm:not-sr-only">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactButtons({ className }: { className: string }) {
  return (
    <div className={className}>
      <a
        href={WHATSAPP_URL}
        className="flex h-12 w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#e5091f] sm:h-[55px] sm:w-auto sm:gap-2.5 sm:px-6 sm:text-base"
      >
        WhatsApp
        <Image src="/hero/wa.svg" alt="" width={18} height={18} unoptimized />
      </a>
      <a
        href={PHONE_HREF}
        className="flex h-12 w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 text-sm font-bold sm:h-[55px] sm:w-auto sm:gap-2.5 sm:px-6 sm:text-base"
      >
        Call Now
        <Image src="/hero/phone.svg" alt="" width={18} height={18} unoptimized />
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808] sm:bg-ink">
      {/* Background — tablet/desktop: building photo */}
      {/* A <picture> whose off-viewport source is a 1px gif, so only one hero photo is ever downloaded. */}
      <picture className="absolute inset-0 -z-20 hidden sm:block">
        <source media="(max-width: 639px)" srcSet={BLANK} />
        <source media="(min-width: 1280px)" srcSet="/hero/hero.webp" />
        <source media="(min-width: 640px)" srcSet="/hero/hero-md.webp" />
        <img
          src="/hero/hero.webp"
          alt=""
          width={1920}
          height={768}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-[75%_center] lg:object-center"
        />
      </picture>
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-b from-ink/90 via-ink/75 to-ink/95 sm:block xl:bg-gradient-to-r xl:from-ink xl:from-[25%] xl:via-ink/80 xl:via-[43%] xl:to-ink/0 xl:to-[88%]" />

      {/* Background — mobile: steel-frame photo from 419px down, as in the design */}
      <div className="absolute inset-0 -z-20 overflow-hidden sm:hidden">
        <div className="absolute inset-x-0 bottom-0 top-[419px] overflow-hidden">
          <div className="absolute left-1/2 top-0 aspect-[714/2202] w-[128.5%] -translate-x-1/2">
            <Image
              src="/hero/bg-m.webp"
              alt=""
              fill
              quality={60}
              sizes="130vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 top-[284px] bottom-0 bg-[#0f0f0f]/40" />
        <div className="absolute inset-x-0 top-0 h-[1250px] bg-gradient-to-b from-[#080808] via-[#080808]/90 via-45% to-transparent" />
      </div>

      {/* Top bar */}
      <header className="mx-auto flex max-w-[1920px] items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-20">
        <Image
          src="/hero/mekark-logo.webp"
          alt="Mekark"
          width={132}
          height={46}
          unoptimized
          className="h-auto w-[96px] sm:w-[104px] lg:w-[132px]"
        />
        <a
          href="#quote"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-[#f5f5f5] sm:px-5 sm:py-2.5 shadow-[0_8.8px_17.6px_rgba(196,22,28,0.3)] lg:text-base"
        >
          Get Free Quote
        </a>
      </header>

      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 px-5 pb-12 pt-4 sm:gap-10 sm:px-8 sm:pt-6 xl:flex-row xl:items-center xl:justify-between xl:gap-8 lg:px-20 lg:pb-16 lg:pt-8">
        {/* Left column */}
        <div className="relative flex min-w-0 flex-col items-start gap-[13px] sm:gap-6 xl:max-w-[891px] xl:flex-1">
          {/* Mobile banner behind badge + headline */}
          <div className="absolute -inset-x-5 top-[43px] -z-10 h-[174px] sm:hidden">
            <picture>
              <source media="(min-width: 640px)" srcSet={BLANK} />
              <img
                src="/hero/hero-m.webp"
                alt=""
                width={900}
                height={502}
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover object-bottom"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/5 via-45% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-[#080808]" />
          </div>

          <p className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[9px] font-medium sm:gap-2.5 sm:px-4 sm:py-2 sm:text-sm">
            <span className="size-2 shrink-0 rounded-full bg-[#e40015] sm:size-2.5" />
            18+ Years | Multi Storey Steel Building Contractor Chennai &amp;
            South India
          </p>

          <h1 className="text-[25px] font-bold leading-[30px] max-sm:-mb-[7px] sm:text-[40px] sm:leading-[1.1] lg:text-5xl lg:leading-[53px]">
            <span className="block max-sm:mb-[154px]">One Partner. Less Risk.</span>
            <span className="block text-sm leading-normal text-white sm:text-[1em] sm:leading-[inherit] sm:text-brand-bright">
              Multi-Storey Steel Buildings
              <span className="text-white max-sm:hidden">.</span>
            </span>
          </h1>

          <p className="text-sm text-[#a9a9a9] sm:text-xl sm:font-semibold sm:leading-[26px]">
            No subcontractor handoffs, no fragmented accountability.
            Mekark&apos;s multi storey steel structure construction runs on one
            integrated team — 175+ engineers, 40,000-tonne fabrication
            capacity, and 18+ years of delivery.
          </p>

          <ul className="grid w-full gap-x-6 gap-y-1.5 sm:w-auto sm:grid-cols-2 sm:gap-y-5">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 px-3 text-xs text-white/70 sm:px-0 sm:text-base"
              >
                <Image
                  src="/hero/check.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className="size-[15px] shrink-0 sm:size-6"
                />
                {f}
              </li>
            ))}
          </ul>

          {/* Trusted across India */}
          <div className="relative w-full max-w-[847px] overflow-hidden rounded-[10px] bg-[linear-gradient(175.7deg,#08090a_1.3%,#654528_91%)] px-4 py-6 sm:rounded-[18px] sm:bg-gradient-to-b sm:from-ink sm:to-[#693f1d]/50 sm:px-0 sm:pb-4 sm:pt-5">
            <p className="text-sm font-semibold uppercase text-[#ed1d23] sm:px-8 sm:text-[#fa7783]">
              Trusted Across India
            </p>
            <ul className="mt-4 flex justify-between gap-2 sm:hidden">
              {mobileLogos.map(({ file, size }) => (
                <li
                  key={file}
                  className="flex h-10 w-16 min-w-0 shrink items-center justify-center overflow-hidden rounded-md bg-[#f9f6f7]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- tiny pre-sized webp */}
                  <img
                    src={`/logos/${file}.webp`}
                    alt=""
                    width={size}
                    height={size}
                    loading="lazy"
                    decoding="async"
                    style={{ width: `${(size / 64) * 100}%` }}
                    className="h-auto max-w-none object-contain"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4 hidden overflow-hidden sm:block">
              <div className="animate-marquee flex w-max">
                <LogoList />
                <LogoList hidden />
              </div>
            </div>
          </div>

          {/* Stats */}
          <dl className="grid w-full max-w-[847px] grid-cols-2 gap-3 sm:flex sm:justify-start sm:gap-x-8 sm:border-t sm:border-[#e2e2e2] sm:pt-6 2xl:gap-x-12">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse justify-end gap-1 rounded-[10px] border border-white/[0.08] bg-[#1a1a1a] px-5 py-3 sm:gap-1.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
              >
                <dt className="text-[10px] font-semibold uppercase leading-tight text-[#9a9a9a] sm:text-sm lg:text-base">
                  {s.label}
                </dt>
                <dd className="whitespace-nowrap text-2xl font-extrabold leading-none sm:text-[clamp(16px,4.8vw,40px)] 2xl:text-[42px]">
                  {s.value}
                  <span className="text-brand">{s.accent}</span>
                </dd>
              </div>
            ))}
          </dl>

          {/* CTAs (desktop/tablet; on mobile they sit under the form) */}
          <ContactButtons className="hidden flex-wrap items-center gap-[30px] sm:flex" />
        </div>

        {/* Form */}
        <form
          id="quote"
          action="#"
          method="post"
          className="flex w-full scroll-mt-4 flex-col items-center gap-4 rounded-3xl bg-white/[0.01] px-5 py-6 shadow-[0_26px_88px_rgba(0,0,0,0.06)] backdrop-blur-[15px] max-sm:mx-4 max-sm:w-auto sm:gap-6 sm:shadow-[0_26px_88px_rgba(0,0,0,0.6)] sm:backdrop-blur-none sm:rounded-[32px] sm:bg-black/60 sm:px-8 sm:py-8 lg:px-[50px] lg:py-11 xl:bg-black/[0.01] lg:backdrop-blur-[30px] max-xl:mx-auto max-xl:max-w-[760px] xl:w-[480px] xl:shrink-0 2xl:w-[661px]"
        >
          <div className="flex w-full flex-col gap-1.5 lg:w-[364px]">
            <h2 className="text-2xl font-extrabold">
              Request Your Project Blueprint
            </h2>
            <p className="text-sm font-medium">
              Get a custom layout, cost range &amp; 150-day* timeline
            </p>
          </div>

          <div className="grid w-full gap-x-9 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
            <Field id="name" label="Full Name*">
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Enter Your name"
                className={fieldBase}
              />
            </Field>
            <Field id="location" label="Project Location">
              <input
                id="location"
                name="location"
                placeholder="Enter Project Location"
                className={fieldBase}
              />
            </Field>
            <Field id="phone" label="Mobile Number*">
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                placeholder="Mobile Number*"
                className={fieldBase}
              />
            </Field>
            <Field id="email" label="Email Address">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter Email Address"
                className={fieldBase}
              />
            </Field>
            <Field id="industry" label="Industry Type*">
              <select
                id="industry"
                name="industry"
                required
                defaultValue=""
                className={`${fieldBase} ${selectBase}`}
              >
                <option value="" disabled>
                  Select your Industry type
                </option>
                {industries.map((i) => (
                  <option key={i} value={i} className="text-[#060606]">
                    {i}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="area" label="Project Sq. Ft*">
              <select
                id="area"
                name="area"
                required
                defaultValue=""
                className={`${fieldBase} ${selectBase}`}
              >
                <option value="" disabled>
                  Select Sq.ft Requirement
                </option>
                {sqFt.map((s) => (
                  <option key={s} value={s} className="text-[#060606]">
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="details" label="Requirement Details">
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  placeholder="Enter Requirement Details"
                  className={`${fieldBase} resize-none max-sm:h-[50px]`}
                />
              </Field>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:gap-3.5">
            <button
              type="submit"
              className="h-12 w-full rounded-[10px] bg-brand text-sm font-bold text-[#f5f5f5] drop-shadow-[0_8.8px_17.6px_rgba(196,22,28,0.3)] sm:h-16 sm:rounded-[9px] sm:text-lg"
            >
              Get My Free Quote →
            </button>
            <p className="text-center text-xs font-medium tracking-[0.33px] text-[#8a8a8a] sm:text-[#bfbfbf]">
              100% Transparent Consultation with single point project support
            </p>
          </div>
        </form>

        <ContactButtons className="flex justify-center gap-3.5 sm:hidden" />
      </div>
    </section>
  );
}
