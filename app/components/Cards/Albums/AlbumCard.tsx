import DiscogsContext from "@/app/context/DiscogsContext";

import Container from "../../Layout/Container";
import AlbumHero from "./AlbumHero";
import AlbumGeneralInfo from "./AlbumGeneralInfo";

import type { ContextProps, Discogs } from "@/app/types";

export default function AlbumCard({ discogs }: ContextProps<Discogs>) {
  return (
    <DiscogsContext.Provider value={{ discogs }}>
      <AlbumHero />
      <Container>
        <AlbumGeneralInfo />
      </Container>
    </DiscogsContext.Provider>
  );
}
