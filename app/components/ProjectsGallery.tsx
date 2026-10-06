import Image from "next/image";

type Photo = { src: string; alt: string; position?: string };

const photos: Record<"a" | "b" | "c" | "d" | "e" | "f", Photo> = {
  a: {
    src: "/projects/p1.webp",
    alt: "Teal and white multi-storey steel industrial building, aerial view",
    position: "object-right",
  },
  b: {
    src: "/projects/p4.webp",
    alt: "Steel roof sheeting being installed on a building under construction",
  },
  c: {
    src: "/projects/p5.webp",
    alt: "Interior of a completed steel warehouse with tall columns",
  },
  d: {
    src: "/projects/p2.webp",
    alt: "Completed white multi-storey steel factory building",
  },
  e: {
    src: "/projects/p3.webp",
    alt: "Steel framework of a large building under erection, aerial view",
  },
  f: {
    src: "/projects/p6.webp",
    alt: "Industrial shed with construction equipment on site",
  },
};

function Tile({
  photo,
  sizes,
  className = "",
}: {
  photo: Photo;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden bg-[#d9d9d9] lg:aspect-auto lg:h-full ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        quality={70}
        className={`object-cover ${photo.position ?? ""}`}
      />
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <section className="bg-[#f9f6f7] px-5 py-8 sm:px-8 sm:py-[70px] lg:px-20">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-6 sm:gap-8 lg:gap-12">
        <div className="flex flex-col gap-4 sm:gap-3.5">
          <div className="flex flex-col gap-2.5 font-bold sm:gap-3">
            <p className="text-xs uppercase leading-[18px] tracking-[1.6px] text-[#ed1d23] sm:text-base">
              our work
            </p>
            <h2 className="text-[28px] leading-8 text-[#0f172a] sm:text-5xl sm:leading-[1.1] lg:text-[66px] lg:leading-[60px]">
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
          <p className="text-sm font-medium leading-5 text-[#64748b] sm:text-lg sm:leading-normal lg:text-2xl lg:leading-9">
            Completed Multi story structures across Tamil Nadu and beyond.
          </p>
        </div>

        {/*
          Mobile: 4 photos (1 wide, 2 side by side, 1 wide) as in the design — the other two are hidden,
          so they are never downloaded. Tablet: 2-col grid. Desktop: 2-block mosaic.
        */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-4 lg:aspect-[1760/968] lg:grid-cols-[569fr_1171fr] lg:gap-6">
          <div className="contents lg:grid lg:grid-rows-[643fr_305fr] lg:gap-5">
            <Tile
              photo={photos.a}
              sizes="(min-width:1024px) 32vw, (min-width:640px) 50vw, 100vw"
              className="max-sm:order-1 max-sm:col-span-2 max-sm:aspect-auto max-sm:h-[220px]"
            />
            <Tile
              photo={photos.d}
              sizes="(min-width:1024px) 32vw, (min-width:640px) 50vw, 100vw"
              className="max-sm:order-4 max-sm:col-span-2 max-sm:aspect-auto max-sm:h-[196px]"
            />
          </div>
          <div className="contents lg:grid lg:grid-rows-[477fr_471fr] lg:gap-5">
            <div className="contents lg:grid lg:grid-cols-[424fr_719fr] lg:gap-6">
              <Tile
                photo={photos.b}
                sizes="(min-width:1024px) 25vw, 50vw"
                className="max-sm:order-2 max-sm:aspect-auto max-sm:h-[174px]"
              />
              <Tile
                photo={photos.c}
                sizes="(min-width:1024px) 40vw, 50vw"
                className="max-sm:order-3 max-sm:aspect-auto max-sm:h-[174px]"
              />
            </div>
            <div className="contents lg:grid lg:grid-cols-2 lg:gap-6">
              <Tile
                photo={photos.e}
                sizes="(min-width:1024px) 32vw, 50vw"
                className="max-sm:hidden"
              />
              <Tile
                photo={photos.f}
                sizes="(min-width:1024px) 32vw, 50vw"
                className="max-sm:hidden"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#quote"
            className="w-full rounded-lg bg-brand px-6 py-3.5 text-center text-sm font-semibold text-[#f5f5f5] drop-shadow-[0_8.8px_17.6px_rgba(196,22,28,0.3)] sm:w-auto sm:rounded-[9px] sm:px-10 sm:py-5 sm:text-xl sm:font-extrabold lg:px-[50px] lg:text-2xl"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}
