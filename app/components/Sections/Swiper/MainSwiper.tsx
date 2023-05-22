import ArtistContext from "@/app/context/ArtistContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import SwiperItem from "./SwiperItem";

import type { Artist, ContextProps } from "@/app/types";

export default function MainSwiper({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ComponentHeader headerType="H3" headerText="Discography" />
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          speed={300}
        >
          {artist?.discogs.map((item, index) => (
            <SwiperSlide key={item.albumId}>
              <SwiperItem pickedIndex={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </ArtistContext.Provider>
  );
}
