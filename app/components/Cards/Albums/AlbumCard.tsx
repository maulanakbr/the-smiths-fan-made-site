import DiscogsContext from "@/app/context/DiscogsContext";

import Container from "../../Layout/Container";
import AlbumHero from "./AlbumHero";
import AlbumGeneralInfo from "./AlbumGeneralInfo";
import AlbumTracklist from "./AlbumTracklist";
import AlbumCharts from "./AlbumCharts";
import AlbumDescription from "./AlbumDescription";

import type { ContextProps, Discogs } from "@/app/types";

export default function AlbumCard({ discogs }: ContextProps<Discogs>) {
  return (
    <DiscogsContext.Provider value={{ discogs }}>
      <AlbumHero />
      <Container>
        <AlbumGeneralInfo />
        <AlbumTracklist />
        <AlbumDescription />
        <AlbumCharts />
      </Container>
    </DiscogsContext.Provider>
  );
}
