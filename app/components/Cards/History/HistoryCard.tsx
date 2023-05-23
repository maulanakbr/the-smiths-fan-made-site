import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import HistoryHero from "./HistoryHero";
import HistoryGeneralInfo from "./HistoryGeneralInfo";
import HistoryDescription from "./HistoryDescription";

import type { ContextProps, Artist } from "@/app/types";

export default function HistoryCard({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <HistoryHero />
      <Container>
        <HistoryGeneralInfo />
        <HistoryDescription />
      </Container>
    </ArtistContext.Provider>
  );
}
