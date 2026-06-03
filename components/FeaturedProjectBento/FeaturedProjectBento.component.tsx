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
    className="absolute inset-0 h-full w-full object-cover"
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
    <article
      className={`flex w-full flex-col gap-[14px] overflow-hidden rounded-[10px] bg-[#111111] p-[14px] text-white ${className}`}
    >
      <div className="flex flex-col gap-[18px] overflow-hidden rounded-lg bg-[#181818] p-3">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[7px]">
          <ImageFill src={heroImage} alt={`${title} hero`} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 font-geist-mono text-[10px] font-bold uppercase leading-[1.2]">
            <p className="text-[#ff8400]">{category}</p>
            <p className="text-[#9a9a9a]">{year}</p>
          </div>
          <h3 className="font-anton text-[43px] font-normal uppercase leading-[0.9]">
            {title}
          </h3>
        </div>
      </div>

      <div className="grid gap-[14px] sm:grid-cols-[minmax(8rem,40%)_minmax(0,1fr)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <ImageFill src={supportImage} alt={`${title} support`} />
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-10 overflow-hidden rounded-lg bg-[#181818] p-4">
          <div className="h-[5px] w-16 rounded-[3px] bg-[#ff8400]" />

          <div className="flex flex-col gap-[7px]">
            <p className="font-geist-mono text-[8px] font-bold uppercase leading-[1.2] text-[#bdbdbd]">
              {label}
            </p>
            <p className="font-geist text-xs font-medium leading-[1.25] text-[#bdbdbd]">
              {description}
            </p>
          </div>
        </div>
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

export default FeaturedProjectBento;
