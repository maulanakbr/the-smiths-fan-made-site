import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import SwiperItem from "./SwiperItem";

import type { Artist, ContextProps } from "@/app/types";

export default function Swiper({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ComponentHeader>
          <h2>DISCOGRAPHY</h2>
        </ComponentHeader>
        {artist?.discogs.map((item, index) => (
          <SwiperItem key={item.albumId} pickedIndex={index} />
        ))}
      </Container>
    </ArtistContext.Provider>
  );
}
