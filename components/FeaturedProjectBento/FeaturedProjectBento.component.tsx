import Link from "next/link";

type ImageSource = string | { src: string };

export type FeaturedProjectBentoProps = {
  href?: string;
  category?: string;
  year?: string;
  title?: string;
  label?: string;
  description?: string;
  heroImage?: ImageSource;
  supportImage?: ImageSource;
  className?: string;
};

const defaultHeroImage =
  "https://images.unsplash.com/photo-1664158287783-680a2d444f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODA0NzAxMjh8&ixlib=rb-4.1.0&q=80&w=1080";

const defaultSupportImage =
  "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODA0NzAxMzF8&ixlib=rb-4.1.0&q=80&w=1080";

const getImageSrc = (image: ImageSource) =>
  typeof image === "string" ? image : image.src;

const ImageFill = ({
  src,
  alt,
}: {
  src: ImageSource;
  alt: string;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={getImageSrc(src)}
    alt={alt}
    className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
  />
);

const FeaturedProjectBento = ({
  href = "https://tecnovidrio-projects-eight.vercel.app/",
  category = "INDUSTRIAL WEBSITE",
  year,
  title = "GRUPO TECNOVIDRIO",
  label,
  description = "Presencia para soluciones de vidrio y aluminio con navegacion directa, prueba comercial y una lectura institucional limpia.",
  heroImage = defaultHeroImage,
  supportImage = defaultSupportImage,
  className = "",
}: FeaturedProjectBentoProps) => {
  const card = (
    <article className={`border-t-2 border-white pt-6 text-white ${className}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-[#111111]">
        <ImageFill src={heroImage} alt={`${title} hero`} />
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4 font-geist-mono text-[11px] font-bold uppercase leading-[1.35]">
        <p className="text-white">{category}</p>
        <p className="text-[#a6a6a6]">{year}</p>
      </div>

      <h3 className="mt-3 font-geist text-[clamp(1.7rem,3.2vw,2rem)] font-bold leading-[1.05] tracking-normal text-white">
        {title}
      </h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(8rem,11rem)_minmax(0,1fr)] sm:items-start sm:gap-8">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
          <ImageFill src={supportImage} alt={`${title} support`} />
        </div>

        <div className="min-w-0">
          {label ? (
            <p className="mb-3 font-geist-mono text-[11px] font-bold uppercase leading-[1.35] text-[#a6a6a6]">
              {label}
            </p>
          ) : null}
          <p className="font-geist text-base font-medium leading-[1.45] text-[#a6a6a6] sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <Link href={href} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full outline-none transition duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {card}
      </a>
    </Link>
  );
};

export default FeaturedProjectBento;
