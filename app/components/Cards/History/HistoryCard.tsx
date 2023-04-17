import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ImageElement from "../../Image/ImageElement";

import type { ContextProps, Artist } from "@/app/types";
import HistoryInfo from "./HistoryInfo";

export default function HistoryCard({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ImageElement
          imageSrc={artist!.bandImages[0].url[11]}
          imageAlt={artist!.artistId}
        />
        <HistoryInfo />
      </Container>
    </ArtistContext.Provider>
  );
}
