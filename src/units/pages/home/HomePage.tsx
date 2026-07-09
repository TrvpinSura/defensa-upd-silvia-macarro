import { cn } from "@/lib/utils";

import container from "@/assets/containers/container_1.png";

import letter from "@/assets/images/decor/letter.png";
import packet from "@/assets/images/decor/packet.png";
import compass from "@/assets/images/decor/compass.png";
import globe from "@/assets/images/decor/globe.png";

import star1 from "@/assets/images/decor/decor_star_1.png";
import star2 from "@/assets/images/decor/decor_star_2.png";
import star3 from "@/assets/images/decor/decor_star_3.png";
import star4 from "@/assets/images/decor/decor_star_4.png";

import dot1 from "@/assets/images/decor/decor_dot_1.png";
import dot2 from "@/assets/images/decor/decor_dot_2.png";
import dot3 from "@/assets/images/decor/decor_dot_3.png";
import dot4 from "@/assets/images/decor/decor_dot_4.png";

import passport1 from "@/assets/images/passport_1.png";
import passport2 from "@/assets/images/passport_2.png";
import passport3 from "@/assets/images/passport_3.png";

const decorativeImages = [
  {
    src: packet,
    alt: "Paquete de misión",
    className: `
      left-4 top-80 w-54 rotate-3
      sm:left-2 sm:top-64 sm:w-40
      md:left-10 md:top-80 md:w-66
      lg:-left-2 lg:top-72 lg:w-70
      xl:-left-4 xl:top-96 xl:w-120
    `,
  },
  {
    src: letter,
    alt: "Carta de misión",
    className: `
      -left-2 top-50 w-24 rotate-20
      sm:left-1 sm:top-42 sm:w-32
      md:left-6 md:top-50 md:w-36
      lg:left-20 lg:top-46 lg:w-42
      xl:left-40 xl:top-50 xl:w-86
    `,
  },
  {
    src: globe,
    alt: "Globo terráqueo",
    className: `
      -right-1 top-80 w-40 rotate-6
      sm:right-2 sm:top-35 sm:w-40
      md:right-0 md:top-70 md:w-60
      lg:-right-2 lg:top-50 lg:w-76
      xl:right-34 xl:top-36 xl:w-112
    `,
  },
  {
    src: compass,
    alt: "Brújula",
    className: `
      right-6 top-160 w-32 rotate-12
      sm:right-6 sm:top-70 sm:w-26
      md:right-10 md:top-210 md:w-30
      lg:right-2 lg:top-140 lg:w-38
      xl:right-24 xl:top-152 xl:w-54
    `,
  },
  {
    src: star1,
    alt: "Estrella decorativa",
    className: `
      left-5 top-30 w-6 rotate-12 opacity-85
      sm:left-15 sm:top-35 sm:w-7
      md:left-26 md:top-42 md:w-8
      lg:left-50 lg:top-38 lg:w-8
      xl:left-128 xl:top-56 xl:w-10
    `,
  },
  {
    src: star2,
    alt: "Estrella decorativa",
    className: `
      left-3 top-110 w-7 -rotate-6 opacity-75
      sm:left-1 sm:top-105 sm:w-7
      md:left-1 md:top-120 md:w-8
      lg:left-5 lg:top-124 lg:w-10
      xl:left-66 xl:top-184 xl:w-11
    `,
  },
  {
    src: star3,
    alt: "Estrella decorativa",
    className: `
      right-40 top-82 w-6 rotate-6 opacity-80
      sm:right-56 sm:top-84 sm:w-8
      md:right-96 md:top-86 md:w-8
      lg:right-140 lg:top-96 lg:w-9
      xl:right-196 xl:top-120 xl:w-10
    `,
  },
  {
    src: star4,
    alt: "Estrella decorativa",
    className: `
      right-30 top-160 w-7 -rotate-12 opacity-70
      sm:right-10 sm:top-156 sm:w-9
      md:right-46 md:top-210 md:w-9
      lg:right-26 lg:top-180 lg:w-10
      xl:right-34 xl:top-216 xl:w-11
    `,
  },
  {
    src: dot1,
    alt: "Punto decorativo",
    className: `
      left-32 top-134 w-5 -rotate-12 opacity-70
      sm:left-10 sm:top-156 sm:w-6
      md:left-60 md:top-170 md:w-8
      lg:left-94 lg:top-160 lg:w-8
      xl:left-195 xl:top-200 xl:w-9
    `,
  },
  {
    src: dot2,
    alt: "Punto decorativo",
    className: `
      right-8 top-52 w-6 -rotate-12 opacity-70
      sm:right-10 sm:top-156 sm:w-6
      md:right-20 md:top-50 md:w-7
      lg:right-40 lg:top-32 lg:w-7
      xl:right-160 xl:top-70 xl:w-9
    `,
  },
  {
    src: dot3,
    alt: "Punto decorativo",
    className: `
      right-30 top-110 w-6 -rotate-12 opacity-70
      sm:right-10 sm:top-156 sm:w-9
      md:right-60 md:top-120 md:w-9
      lg:right-90 lg:top-105 lg:w-9
      xl:right-80 xl:top-140 xl:w-10
    `,
  },
  {
    src: dot4,
    alt: "Punto decorativo",
    className: `
      left-3 top-74 w-5 -rotate-12 opacity-70
      sm:left-10 sm:top-156 sm:w-7
      md:left-12 md:top-80 md:w-7
      lg:left-14 lg:top-70 lg:w-7
      xl:left-20 xl:top-70 xl:w-8
    `,
  },
];

export const HomePage = () => {
  return (
    <main>
      {/* Title */}
      <div className="mx-auto max-w-3xl text-center w-full relative z-10">
        <p className="font-caveat text-soft-ink-blue text-3xl
        lg:text-4xl">
          Defensa de la UNIDAD de
        </p>
        <h1 className="font-playwrite font-bold text-4xl text-deep-ink-blue uppercase mt-1 tracking-wide 
        md:mt-2 
        lg:text-5xl 
        xl:text-6xl xl:mt-3">
          programación
          <span className="block text-soft-coral leading-15 
          lg:leading-20 
          xl:leading-28">
            didáctica
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="mx-auto -mt-8 max-w-74 relative z-10
      sm:max-w-88
      md:-mt-12 md:max-w-104
      lg:-mt-15 lg:max-w-120
      xl:max-w-130">
        <div
          className="flex min-h-32 items-center justify-center bg-contain bg-center bg-no-repeat px-5
          md:min-h-44 md:px-12 
          lg:min-h-52 lg:px-12"
          style={{ backgroundImage: `url(${container})` }}
        >
          <p className="max-w-66 text-center font-indieflower font-bold text-md leading-tight text-soft-ink-blue 
          md:max-w-md md:text-xl 
          lg:max-w-lg lg:text-2xl">
            15 unidades para explorar, descubrir y aprender de 3 a 5 años
          </p>
        </div>
      </div>

      {/* Passports images */}
      <div className="relative overflow-hidden w-full z-10 mt-30 sm:mt-30 lg:mt-0">
        <svg
          className="pointer-events-none absolute left-1/2 top-15 -z-10 h-72 w-xl max-w-none -translate-x-1/2 -translate-y-1/2 text-pastel-brown
          sm:top-30 sm:w-3xl
          md:w-4xl
          xl:top-45 xl:w-6xl"
          viewBox="0 0 1400 420"
          fill="none"
          aria-hidden
        >
          <path
            d="M -120 320 Q 180 120 460 260 T 980 200 T 1520 300"
            stroke="currentColor"
            strokeWidth="5"
            strokeDasharray="2 10"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>

        <div
          className="mx-auto flex justify-center px-4 
          sm:gap-1
          md:gap-2"
        >
          {[
            {
              src: passport1,
              alt: "Pasaporte de Iniciación",
              rotate: "-rotate-3",
              hoverRotate: "hover:-rotate-1",
            },
            {
              src: passport2,
              alt: "Pasaporte de Exploración Avanzada",
              rotate: "rotate-0",
              hoverRotate: "hover:rotate-0",
            },
            {
              src: passport3,
              alt: "Pasaporte Grandes Descubridores",
              rotate: "rotate-3",
              hoverRotate: "hover:rotate-1",
            },
          ].map((passport) => (
            <img
              key={passport.alt}
              src={passport.src}
              alt={passport.alt}
              className={cn(
                "w-full max-w-30 object-contain drop-shadow-[0_20px_30px_-18px_oklch(0.3_0.08_60/0.45)]",
                "transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03]",
                "sm:max-w-50 md:max-w-60 lg:max-w-60 xl:max-w-80",
                passport.rotate,
                passport.hoverRotate
              )}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full overflow-hidden"
      >
        {decorativeImages.map((image, index) => (
          <img
            key={`${image.alt}-${index}`}
            src={image.src}
            alt=""
            aria-hidden
            loading="lazy"
            className={cn(
              "pointer-events-none absolute object-contain select-none",
              image.className
            )}
          />
        ))}
      </div>
    </main >
  );
};
