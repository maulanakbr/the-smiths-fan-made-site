import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import ImageElement from "../../Image/ImageElement";

import type { Artist, ContextProps } from "@/app/types";

export default function Hero({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ImageElement
          imageSrc={artist!.bandImages[0].url[0]}
          imageAlt={artist!.bandImages[0].url[0]}
        />
        <ComponentHeader>
          <h2>{artist?.artistName}</h2>
          <p>{artist?.yearsActive}</p>
        </ComponentHeader>
      </Container>
    </ArtistContext.Provider>
  );
}
