import { useArtistContext } from "@/app/context/ArtistContext";

import NavigationElement from "../../Navigation/NavigationElement";

import type { SomeContentProps } from "@/app/types";

export default function SwiperItem({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const swiperData = artist?.discogs[pickedIndex];

  const swiperPath = swiperData?.albumId.toLowerCase();

  return (
    <>
      <NavigationElement
        navigationType="IMAGE"
        navigationClass="discogs-navigation"
        navigationImageSrc={swiperData!.artwork}
        navigationImageAlt={swiperData!.albumName}
        navigationLink={`/albums/${swiperPath}`}
      />
    </>
  );
}
