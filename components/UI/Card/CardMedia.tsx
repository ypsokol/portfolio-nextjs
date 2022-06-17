import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  className?: string;
};

const CardMedia = ({ src, className = "" }: Props) => {
  return (
    <div className={`card-media ${className}`}>
      <Image src={src} placeholder="blur" alt="" objectFit="fill" />
    </div>
  );
};

export default CardMedia;
