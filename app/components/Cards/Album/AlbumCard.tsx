import DiscogsContext from "@/app/context/DiscogsContext";

import Container from "../../Layout/Container";
import ImageElement from "../../Image/ImageElement";
import AlbumInfo from "./AlbumInfo";

import type { ContextProps, Discogs } from "@/app/types";

export default function AlbumCard({ discogs }: ContextProps<Discogs>) {
  return (
    <DiscogsContext.Provider value={{ discogs }}>
      <Container>
        <ImageElement imageSrc={discogs!.artwork} imageAlt={discogs!.albumId} />
        <AlbumInfo />
      </Container>
    </DiscogsContext.Provider>
  );
}
