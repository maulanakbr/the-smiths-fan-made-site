"use client";

import DiscogsContext from "@/app/context/DiscogsContext";

import Container from "../../Layout/Container";
import AlbumHero from "./AlbumHero";
import AlbumGeneralInfo from "./AlbumGeneralInfo";
import AlbumTracklist from "./AlbumTracklist";
import AlbumDescription from "./AlbumDescription";
import AlbumRatings from "./AlbumRatings";
import AlbumCharts from "./AlbumCharts";
import AlbumListeningPlatform from "./AlbumListeningPlatform";

import type { ContextProps, Discogs } from "@/app/types";

export default function AlbumCard({ discogs }: ContextProps<Discogs>) {
  return (
    <DiscogsContext.Provider value={{ discogs }}>
      <AlbumHero />
      <Container>
        <AlbumGeneralInfo />
        <AlbumTracklist />
        <AlbumDescription />
        <AlbumRatings />
        <AlbumCharts />
        <AlbumListeningPlatform />
      </Container>
    </DiscogsContext.Provider>
  );
}
