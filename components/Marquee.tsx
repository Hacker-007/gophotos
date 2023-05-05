import Image from "next/image";

type MarqueeProps = {
  images: string[];
  reversed?: boolean;
};

export default function Marquee({ images, reversed }: MarqueeProps) {
  return (
    <div className="h-full flex flex-col overflow-hidden select-none gap-4">
      <ul
        className={`flex-shrink-0 flex flex-col justify-around min-h-full gap-4 animate-scroll ${
          reversed ? "[animation-direction:reverse]" : ""
        }`}
      >
        {images.map((imageUrl, idx) => (
          <li
            key={`${imageUrl}/${idx}`}
            className="relative h-full w-full bg-white overflow-hidden rounded-md"
          >
            <Image fill={true} alt="" src={imageUrl} className="object-cover" />
          </li>
        ))}
      </ul>
      <ul
        className={`flex-shrink-0 flex flex-col justify-around min-h-full gap-4 animate-scroll ${
          reversed ? "[animation-direction:reverse]" : ""
        }`}
      >
        {images.map((imageUrl, idx) => (
          <li
            key={`${imageUrl}/${idx}`}
            className="relative h-full w-full bg-white overflow-hidden rounded-md"
          >
            <Image fill={true} alt="" src={imageUrl} className="object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
