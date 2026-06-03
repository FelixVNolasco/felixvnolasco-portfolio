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
    className="absolute inset-0 h-full w-full object-cover"
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
      className={`grid w-full gap-4 overflow-hidden rounded-[10px] bg-[#111111] p-[14px] text-white sm:grid-cols-[minmax(12rem,1.25fr)_minmax(0,1fr)] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:aspect-auto">
        <ImageFill src={image} alt={`${title} project`} />
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-10 overflow-hidden rounded-lg bg-[#181818] p-[clamp(1rem,3vw,1.375rem)]">
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center justify-between gap-4 font-geist-mono text-xs font-bold uppercase leading-[1.2]">
            <p className="text-[#ff8400]">{category}</p>
            <p className="text-[#9a9a9a]">{year}</p>
          </div>

          <h3 className="font-anton text-[clamp(2rem,4vw,2.125rem)] font-normal uppercase leading-[0.95]">
            {title}
          </h3>

          <div className="h-1.5 w-14 rounded bg-[#ff8400] sm:w-16" />
        </div>

        <p className="font-geist text-sm font-medium leading-[1.34] text-[#bdbdbd]">
          {description}
        </p>
      </div>
    </article>
  );

  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noopener noreferrer" className="block w-full">
        {card}
      </a>
    </Link>
  );
};

export default FeaturedProjectHorizontal;
