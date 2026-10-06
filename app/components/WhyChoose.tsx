type Card = {
  n: string;
  text: string;
  className?: string;
  textClass?: string;
  accent?: boolean;
  red?: boolean;
};

const cards: readonly Card[] = [
  {
    n: "01",
    text: "Leading Multi Storey Steel Building Company with 18+ years of expertise in commercial and industrial projects.",
    className: "sm:col-span-2 2xl:rounded-tl-[33px]",
    textClass: "sm:text-2xl sm:leading-8 2xl:text-[30px] 2xl:leading-10",
  },
  {
    n: "02",
    text: "40,000+ MT Annual PEB Manufacturing Capacity with advanced in-house fabrication facilities.",
    accent: true,
  },
  {
    n: "03",
    text: "175+ In-House Structural Engineers delivering precision-engineered multi storey steel components.",
    className: "2xl:rounded-tr-[33px]",
  },
  {
    n: "04",
    text: "Trusted Multi Storey Steel Structure Construction Company delivering commercial buildings, industrial facilities, warehouses, and office buildings.",
    className: "2xl:rounded-bl-[33px]",
  },
  {
    n: "05",
    text: "ISO 9001:2015 & CE Certified manufacturing for structural safety and compliance",
    accent: true,
  },
  {
    n: "06",
    text: "Complete Turnkey Multi Storey Steel Building Construction—design, engineering, fabrication, erection, and project handover under one roof.",
    className: "sm:col-span-2 2xl:rounded-br-[33px]",
    red: true,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-8 sm:bg-[#040303] sm:px-8 sm:py-20 lg:px-[106px]">
      <div className="mx-auto flex max-w-[1706px] flex-col gap-4 sm:gap-10 lg:gap-[50px]">
        <div className="flex flex-col items-start gap-2.5 text-left sm:items-center sm:text-center">
          <p className="text-xs font-bold uppercase text-[#e50818] sm:text-base">
            Market Leaders
          </p>
          <h2 className="text-[32px] font-extrabold leading-[38px] text-white sm:text-6xl sm:font-bold sm:leading-[1.05] lg:text-7xl xl:text-[88px] xl:leading-[80px]">
            Why Top Industries <br className="sm:hidden" />
            <span className="text-[#ed1d23] sm:text-[#e50818]">
              Choose <span className="max-sm:uppercase">Mekark</span>
            </span>
          </h2>
        </div>

        {/* Mobile: editorial list. sm+: card grid. */}
        <ul className="grid sm:grid-cols-2 sm:gap-4 2xl:grid-cols-4 2xl:gap-8">
          {cards.map((c, i) => (
            <li
              key={c.n}
              className={`flex gap-2.5 border-b border-white/10 py-4 sm:flex-col sm:gap-6 sm:rounded-3xl sm:border sm:border-black sm:p-8 2xl:min-h-[307px] 2xl:justify-center 2xl:gap-[27px] 2xl:rounded-none 2xl:px-10 ${
                c.red ? "sm:bg-[#e50818]" : "sm:bg-[#1e1e1e]"
              } ${c.className ?? ""}`}
            >
              <span
                className={`w-[50px] shrink-0 text-[26px] font-extrabold leading-[25px] sm:w-auto sm:text-[34px] sm:font-bold sm:uppercase sm:leading-5 sm:tracking-[1.6px] ${
                  i % 2 === 0 ? "text-[#e53935]" : "text-[#ccc]"
                } ${c.accent ? "sm:text-[#fb2c36]" : "sm:text-white"}`}
              >
                {c.n}
              </span>
              <p
                className={`min-w-0 text-lg font-semibold leading-normal sm:font-bold ${
                  c.red ? "text-white 2xl:leading-[34px]" : "text-[#f0f0f0]"
                } ${c.textClass ?? "sm:text-xl sm:leading-[30px] 2xl:text-2xl"}`}
              >
                {c.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
