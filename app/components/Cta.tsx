import Image from "next/image";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
  industries,
  sqFt,
} from "./contact";

const field =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-4 py-[12.5px] text-xs text-[#080808] placeholder:text-[#757575] sm:py-3.5 sm:text-base sm:placeholder:text-[#6b6b6b] xl:px-3 2xl:px-4 lg:text-sm";

// Native <select> with the design's chevron on mobile.
const selectField =
  "text-[#757575] max-sm:appearance-none max-sm:bg-[url(/hero/chevron.svg)] max-sm:bg-[length:15px] max-sm:bg-[position:right_16px_center] max-sm:bg-no-repeat max-sm:pl-5 max-sm:pr-10 sm:text-[#6b6b6b]";

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
      <label
        htmlFor={id}
        className="sr-only text-sm font-bold tracking-[0.3px] text-[#5a5a5a] sm:not-sr-only"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactCard({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex w-full items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 sm:gap-5 sm:rounded-[29px] sm:p-7 xl:max-w-[693px]"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] sm:size-16 sm:rounded-3xl">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:gap-0">
        {children}
      </span>
      <Image
        src="/cta/arrow.svg"
        alt=""
        width={27}
        height={26}
        unoptimized
        className="h-auto w-6 shrink-0 sm:w-[27px]"
      />
    </a>
  );
}

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#090909] px-5 py-9 sm:px-8 sm:py-20 lg:px-20 lg:py-24"
    >
      {/* Photo: mobile = faint, top 563px only; sm+ = whole section */}
      <div className="absolute inset-x-0 top-0 -z-30 h-[563px] sm:h-full">
        <Image
          src="/cta/bg.webp"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-center opacity-20 sm:opacity-55"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-black to-[54%] sm:bg-gradient-to-t sm:from-[#080b0f] sm:via-[#080b0f]/85 sm:to-[#080b0f]/60 sm:to-100% lg:bg-gradient-to-tr lg:from-[#080b0f] lg:from-[17%] lg:via-[#080b0f]/70 lg:to-transparent" />
      {/* Red glow: static radial gradient instead of a blurred element (cheaper to paint) */}
      <div className="pointer-events-none absolute -top-[61px] left-[46%] -z-10 size-[274px] rounded-full bg-[radial-gradient(closest-side,rgba(228,0,21,0.3),transparent)] sm:hidden lg:-right-[213px] lg:-top-[267px] lg:left-auto lg:block lg:size-[1035px]" />

      <div className="mx-auto flex max-w-[1500px] flex-col items-start gap-4 sm:gap-12 xl:flex-row xl:items-center xl:justify-between xl:gap-12 2xl:gap-[100px]">
        {/* Copy + contact cards */}
        <div className="flex w-full min-w-0 flex-col gap-4 sm:gap-6 xl:flex-1">
          <div className="flex flex-col items-start gap-3.5 px-6 py-3.5 sm:gap-6 sm:p-0">
            <span className="rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18px] py-1 text-[10px] font-semibold text-[#cc000a] sm:px-5 sm:py-2 sm:text-base">
              Ready to Build?
            </span>
            <h2 className="text-[28px] font-extrabold leading-[34px] text-white sm:text-6xl sm:leading-[1.1] 2xl:text-[79px] 2xl:leading-[82px]">
              Start Building.
              <br />
              Turn plans into{" "}
              <span className="text-[#ed1d23]">infrastructure.</span>
            </h2>
            <p className="max-w-[693px] text-sm font-medium leading-normal text-white/65 max-sm:-mt-0.5 sm:text-2xl sm:leading-[37px]">
              Stop delaying critical expansion and start executing. Consult with
              our principal engineers today.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-5">
            <ContactCard
              href={PHONE_HREF}
              icon={
                <Image
                  src="/cta/phone.svg"
                  alt=""
                  width={27}
                  height={27}
                  unoptimized
                  className="size-6 sm:size-[27px]"
                />
              }
            >
              <span className="text-[10px] font-bold uppercase leading-4 text-[#a9a9a9] sm:text-base sm:leading-normal">
                Call Now
              </span>
              <span className="text-sm font-extrabold leading-6 text-white sm:text-[21px] sm:leading-normal">
                {PHONE_DISPLAY}
              </span>
            </ContactCard>
            <ContactCard
              href={WHATSAPP_URL}
              icon={
                <Image
                  src="/cta/wa.webp"
                  alt=""
                  width={39}
                  height={39}
                  loading="lazy"
                  className="size-[30px] sm:size-[39px]"
                />
              }
            >
              <span className="text-sm font-bold leading-6 text-white sm:text-[26px] sm:leading-normal">
                WhatsApp Us Now
              </span>
            </ContactCard>
          </div>
        </div>

        {/* Form */}
        <form
          action="#"
          method="post"
          className="flex w-full flex-col items-center gap-4 rounded-3xl border border-[#e2e2e2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] sm:gap-5 sm:rounded-[29px] sm:px-[46px] sm:py-[42px] max-xl:mx-auto max-xl:max-w-[760px] xl:w-[480px] xl:shrink-0 2xl:w-[600px]"
        >
          <div className="flex w-full flex-col gap-2 text-center sm:gap-1.5">
            <h3 className="text-lg font-extrabold tracking-[-0.5px] text-[#080808] sm:text-[22px]">
              Request Your Project Blueprint
            </h3>
            <p className="text-xs font-medium text-[#9a9a9a] sm:text-[13px] sm:text-[#6b6b6b]">
              Get a custom layout, cost range &amp; 150-day* timeline
            </p>
          </div>

          <div className="grid w-full gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-3">
            <Field id="cta-name" label="Full Name*">
              <input id="cta-name" name="name" required autoComplete="name" placeholder="Enter Your name" className={field} />
            </Field>
            <Field id="cta-location" label="Project Location">
              <input id="cta-location" name="location" placeholder="Enter project location" className={field} />
            </Field>
            <Field id="cta-phone" label="Mobile Number*">
              <input id="cta-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="Mobile Number*" className={field} />
            </Field>
            <Field id="cta-email" label="Email Address">
              <input id="cta-email" name="email" type="email" autoComplete="email" placeholder="Enter Email Address" className={field} />
            </Field>
            <Field id="cta-industry" label="Industry Type*">
              <select id="cta-industry" name="industry" required defaultValue="" className={`${field} ${selectField}`}>
                <option value="" disabled>Select your Industry</option>
                {industries.map((i) => (
                  <option key={i} value={i} className="text-[#080808]">{i}</option>
                ))}
              </select>
            </Field>
            <Field id="cta-area" label="Project Sq. Ft*">
              <select id="cta-area" name="area" required defaultValue="" className={`${field} ${selectField}`}>
                <option value="" disabled>Select Sq. Ft Requirement</option>
                {sqFt.map((s) => (
                  <option key={s} value={s} className="text-[#080808]">{s}</option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="cta-details" label="Requirement Details">
                <input id="cta-details" name="details" placeholder="Enter requirement details" className={field} />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#c4161c] px-9 py-3.5 text-sm font-semibold text-[#f5f5f5] drop-shadow-[0_8px_16px_rgba(196,22,28,0.3)] sm:h-[58px] sm:py-0 sm:text-base sm:font-extrabold"
          >
            Get My Free Quote →
          </button>
          <p className="text-center text-xs font-medium tracking-[0.3px] text-[#5a5a5a] sm:text-[11px]">
            100% Transparent Consultation with single point project support
          </p>
        </form>
      </div>
    </section>
  );
}
