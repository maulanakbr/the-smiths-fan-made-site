import { useArtistContext } from "@/app/context/ArtistContext";

import Link from "next/link";
import ImageElement from "../../Image/ImageElement";

import type { SomeContentProps } from "@/app/types";

export default function SwiperItem({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const swiperData = artist?.discogs[pickedIndex];

  const swiperPath = swiperData?.albumId.toLowerCase();

  return (
    <>
      <Link href={`/albums/${swiperPath}`}>
        <ImageElement
          imageSrc={swiperData!.artwork}
          imageAlt={swiperData!.albumId}
        />
      </Link>
    </>
  );
}
