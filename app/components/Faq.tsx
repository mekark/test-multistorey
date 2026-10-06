import Image from "next/image";

type Item = { q: string; a?: string };

// TODO: only the first answer exists in the design; add the rest to make them expandable.
const items: Item[] = [
  {
    q: "What does a multi storey steel building contractor provide?",
    a: "A multi storey steel building contractor provides structural engineering, detailing, fabrication, transportation, and erection of steel structures. Mekark can coordinate these stages to deliver an integrated steel building solution.",
  },
  {
    q: "How does a multi storey steel building construction company ensure structural safety?",
  },
  { q: "Why choose Mekark as a multi storey steel structure contractor?" },
  { q: "What are the advantages of multi storey steel building construction?" },
  {
    q: "Can a multi storey steel structure construction company handle customized buildings?",
  },
  { q: "How do I select a reliable multi storey steel building company?" },
  {
    q: "Is a multi storey steel building builder suitable for industrial and commercial projects?",
  },
  {
    q: "What is the benefit of hiring a multi storey steel construction company for my project?",
  },
  {
    q: "Can a steel multi storey building contractor provide complete structural solutions?",
  },
  { q: "Why choose Mekark for steel multi storey building construction?" },
];

const row =
  "flex items-center justify-between gap-4 text-base font-medium leading-6 text-[#080808] sm:items-start sm:py-6 sm:text-xl lg:py-8 lg:text-2xl lg:leading-8";

const toggle =
  "flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-[21px] leading-none text-[#9a9a9a] sm:size-[37px]";

function Question({ n, q }: { n: number; q: string }) {
  // Inline on mobile (wraps under the number, as in the design); hanging indent from sm up.
  return (
    <span className="sm:flex sm:gap-2">
      <span>{n}.</span> {q}
    </span>
  );
}

export default function Faq() {
  return (
    <section className="overflow-x-clip bg-[#f9f6f7] px-5 py-8 sm:px-8 sm:py-20 lg:py-24 lg:pl-0 lg:pr-20">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-6 sm:gap-10 lg:flex-row lg:gap-16">
        {/* Left: heading + illustration */}
        <div className="flex flex-col sm:gap-6 lg:sticky lg:top-8 lg:w-[42%] lg:shrink-0 lg:self-start">
          <div className="flex flex-col items-start gap-3 py-1.5 sm:gap-6 sm:py-0 lg:pl-20">
            <span className="rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18.67px] py-2 text-base font-semibold text-[#cc000a] sm:px-5">
              FAQ
            </span>
            <h2 className="text-[28px] font-bold leading-8 text-[#070506] sm:text-5xl sm:leading-[1.15] lg:text-[66px] lg:leading-[81px]">
              <span className="sm:hidden">Frequently asked</span>
              <span className="max-sm:hidden">Frequently Asked</span>
              <br />
              <span className="text-[#cc000a]">
                <span className="sm:hidden">questions.</span>
                <span className="max-sm:hidden">Questions.</span>
              </span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/projects/faq.webp"
              alt="Multi-storey steel frame structure"
              width={1536}
              height={1024}
              sizes="(min-width:1024px) 42vw, 100vw"
              quality={70}
              className="-ml-[16.7%] h-auto w-[117%] max-w-none"
            />
          </div>
        </div>

        {/* Right: accordion */}
        <div className="min-w-0 flex-1 lg:ml-auto lg:max-w-[912px] lg:self-start">
          {items.map((item, i) => (
            <div
              key={item.q}
              className="border-b border-[#e2e2e2] py-3 first:pt-0 max-sm:last:border-b-0 max-sm:last:pb-0 sm:py-0"
            >
              {item.a ? (
                <details name="faq" open={i === 0} className="group">
                  <summary
                    className={`${row} cursor-pointer list-none marker:hidden group-open:text-[#c4161c] [&::-webkit-details-marker]:hidden`}
                  >
                    <Question n={i + 1} q={item.q} />
                    <span
                      aria-hidden
                      className={`${toggle} group-open:rotate-45 group-open:bg-[#c4161c] group-open:text-[#f5f5f5]`}
                    >
                      +
                    </span>
                  </summary>
                  <p className="pt-2.5 text-sm font-medium leading-normal text-[#5a5a5a] sm:pb-8 sm:pl-7 sm:pr-12 sm:pt-0 sm:text-xl sm:leading-[30px]">
                    {item.a}
                  </p>
                </details>
              ) : (
                <div className={row}>
                  <Question n={i + 1} q={item.q} />
                  <span aria-hidden className={toggle}>
                    +
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
