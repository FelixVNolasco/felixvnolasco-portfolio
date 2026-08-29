import Link from "next/link";

type ImageSource = string | { src: string };

export type FeaturedProjectHorizontalProps = {
  href?: string;
  category?: string;
  year?: string;
  title?: string;
  description?: string;
  image?: ImageSource;
  className?: string;
};

const defaultImage =
  "https://images.unsplash.com/photo-1664158287783-680a2d444f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODA0NzAxMjh8&ixlib=rb-4.1.0&q=80&w=1080";

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

const FeaturedProjectHorizontal = ({
  href = "https://tecnovidrio-projects-eight.vercel.app/",
  category = "INDUSTRIAL WEBSITE",
  year,
  title = "GRUPO TECNOVIDRIO",
  description = "Presencia para soluciones de vidrio y aluminio con navegacion directa, prueba comercial y una lectura institucional limpia.",
  image = defaultImage,
  className = "",
}: FeaturedProjectHorizontalProps) => {
  const card = (
    <article
      className={`grid gap-5 border-t border-white/20 pt-6 text-white sm:grid-cols-[minmax(10rem,13rem)_minmax(0,1fr)] sm:gap-8 ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111111] sm:aspect-[4/3]">
        <ImageFill src={image} alt={`${title} project`} />
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex items-baseline justify-between gap-4 font-geist-mono text-[11px] font-bold uppercase leading-[1.35]">
          <p className="text-white">{category}</p>
          <p className="text-[#a6a6a6]">{year}</p>
        </div>

        <h3 className="mt-3 font-geist text-[clamp(1.4rem,2.6vw,1.75rem)] font-bold leading-[1.1] tracking-normal text-white">
          {title}
        </h3>

        <p className="mt-4 font-geist text-base font-medium leading-[1.45] text-[#a6a6a6]">
          {description}
        </p>
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

export default FeaturedProjectHorizontal;
