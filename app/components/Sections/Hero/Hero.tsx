import ArtistContext from "@/app/context/ArtistContext";

import ComponentHeader from "../../Header/ComponentHeader";
import ImageElement from "../../Image/ImageElement";

import type { Artist, ContextProps } from "@/app/types";

export default function Hero({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <div className="hero-content">
        <ImageElement
          imageSrc={artist!.bandImages[0].url[10]}
          imageAlt={artist!.bandImages[0].url[10]}
        />
        <ComponentHeader
          headerType="H1_SUB"
          headerText={artist?.artistName!}
          subText={artist?.yearsActive!}
          headerClass="hero-text"
        />
      </div>
    </ArtistContext.Provider>
  );
}
