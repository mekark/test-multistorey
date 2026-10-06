import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Requirement Discussion",
    text: "Understanding client needs & site conditions",
    icon: 40,
  },
  {
    n: "02",
    title: "Structural Design",
    text: "3D analysis & approval of drawings.",
    icon: 33,
  },
  {
    n: "03",
    title: "PEB Manufacturing",
    text: "Precision fabrication in our unit.",
    icon: 40,
  },
  {
    n: "04",
    title: "Quality Check",
    text: "Rigorous inspection of materials.",
    icon: 40,
  },
  {
    n: "05",
    title: "On-Site Installation",
    text: "Safe and fast erection by certified team.",
    icon: 40,
  },
  {
    n: "06",
    title: "Final Handover",
    text: "Project delivery on time, every time.",
    icon: 40,
  },
];

export default function Process() {
  return (
    <section className="bg-[#f9f6f7] px-5 py-8 sm:px-8 sm:py-20 lg:px-20">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 sm:gap-10 lg:gap-[50px]">
        <div className="flex max-w-[1015px] flex-col gap-3 sm:gap-4">
          <h2 className="text-[28px] font-bold leading-[30px] text-[#0f172a] sm:text-5xl sm:leading-[1.1] lg:text-[66px] lg:leading-[73px]">
            Our <span className="text-[#ed1d23]">Manufacturing Process</span>
          </h2>
          <p className="text-sm leading-5 text-[#64748b] sm:text-xl sm:leading-normal lg:text-2xl lg:leading-[34px]">
            From first consultation to final handover — a proven 6-step process
            for on-time delivery.
          </p>
        </div>

        <ol className="relative flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-6 xl:gap-x-10">
          {/* Vertical connector (mobile) */}
          <span
            aria-hidden
            className="absolute bottom-[49px] left-6 top-5 w-px bg-[#e4dfe0] sm:hidden"
          />
          {/* Horizontal connector (desktop) */}
          <span
            aria-hidden
            className="absolute left-0 right-[calc((100%-200px)/6)] top-[47px] hidden h-px bg-[#e4dfe0] xl:block"
          />
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative flex gap-4 sm:flex-col sm:gap-8 xl:gap-[53px]"
            >
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-lg border border-[#e4dfe0] bg-white sm:h-[92px] sm:w-[100px] sm:rounded-[18px]">
                <Image
                  src={`/process/${s.n}.svg`}
                  alt=""
                  width={s.icon}
                  height={s.icon}
                  unoptimized
                  loading="lazy"
                  className="max-sm:size-6"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-2 sm:justify-start sm:gap-3">
                <span
                  className={`text-lg font-bold leading-normal sm:text-[26px] sm:font-extrabold sm:leading-[21px] sm:text-[#ed1d23] ${
                    s.n === "05" ? "text-[#ffa5a8]" : "text-[#ff8f92]"
                  }`}
                >
                  {s.n}
                </span>
                <h3 className="text-lg font-bold leading-normal text-[#080808] sm:text-[19px] sm:leading-6 sm:text-black lg:text-[21px]">
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-normal sm:text-base sm:leading-[22.7px] sm:text-[#64748b] lg:text-lg ${
                    s.n === "01" || s.n === "06"
                      ? "text-[#64748b]"
                      : "text-[#9a9a9a]"
                  }`}
                >
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
