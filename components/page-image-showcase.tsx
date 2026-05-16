import Image from "next/image";

export type ShowcaseImage = {
  src: string;
  label: string;
  kicker: string;
};

export const showcaseImages: ShowcaseImage[] = [
  { src: "/hero-cache/hero-01.jpg", label: "Symmetry Sauna", kicker: "Wellness creative" },
  { src: "/hero-cache/hero-02.jpg", label: "Nyrah", kicker: "Skincare proof" },
  { src: "/hero-cache/hero-03.jpg", label: "Fabu Wellness", kicker: "Product story" },
  { src: "/hero-cache/hero-04.jpg", label: "All Real Nutrition", kicker: "Offer creative" },
  { src: "/hero-cache/hero-05.jpg", label: "Blynk+", kicker: "Consumer testing" },
  { src: "/hero-cache/hero-06.jpg", label: "Symmetry Sauna", kicker: "Lifestyle signal" },
  { src: "/hero-cache/hero-07.jpg", label: "All Real Nutrition", kicker: "Product clarity" },
  { src: "/hero-cache/hero-08.jpg", label: "Fabu Wellness", kicker: "Performance ad" },
  { src: "/hero-cache/hero-09.jpg", label: "Nyrah", kicker: "Customer result" },
  { src: "/hero-cache/hero-10.jpg", label: "Blynk+", kicker: "Review signal" },
  { src: "/hero-cache/hero-11.jpg", label: "Symmetry Sauna", kicker: "Architecture" },
  { src: "/hero-cache/hero-12.jpg", label: "Fabu Wellness", kicker: "Routine creative" },
];

export function PageHeroImageGrid({
  images,
  className = "",
}: {
  images: ShowcaseImage[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {images.slice(0, 4).map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className={`group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] ${
            index === 0 || index === 3 ? "aspect-[0.82]" : "aspect-[1.05]"
          }`}
        >
          <Image
            src={image.src}
            alt={`${image.label} ${image.kicker}`}
            fill
            sizes="(min-width: 1024px) 280px, 45vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--palette-navy)]/82 via-transparent to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/62">{image.kicker}</p>
            <p className="mt-1 font-display text-2xl leading-none text-white">{image.label}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ImageEvidenceBand({
  eyebrow,
  title,
  images,
  light = false,
}: {
  eyebrow: string;
  title: string;
  images: ShowcaseImage[];
  light?: boolean;
}) {
  return (
    <section
      className={`overflow-hidden border-y border-[var(--border)] py-20 lg:py-24 ${
        light ? "bg-[var(--foreground)] text-[var(--palette-navy)]" : "bg-[var(--surface)]/35"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className={light ? "font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--palette-navy)]/55" : "kbd"}>
              {eyebrow}
            </p>
            <h2 className="mt-5 max-w-[14ch] font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl">
              {title}
            </h2>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {images.slice(0, 6).map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`group relative min-h-[260px] overflow-hidden rounded-lg border ${
                light ? "border-[var(--palette-navy)]/12 bg-[var(--palette-navy)]/5" : "border-[var(--border)] bg-[var(--palette-navy)]"
              } ${index % 3 === 0 ? "lg:col-span-2 lg:min-h-[360px]" : "lg:col-span-1"}`}
            >
              <Image
                src={image.src}
                alt={`${image.label} ${image.kicker}`}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/62">{image.kicker}</p>
                <p className="mt-2 font-display text-2xl leading-none">{image.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
