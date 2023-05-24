"use client";

import { useFetch } from "./hooks/useFetch";

import MainContainer from "./components/Layout/MainContainer";
import Hero from "./components/Sections/Hero/Hero";
import History from "./components/Sections/History/History";
import Article from "./components/Sections/Article/Article";
import MainSwiper from "./components/Sections/Swiper/MainSwiper";
import MainPageLoading from "./components/Loading/MainPageLoading";

import type { Artist } from "./types";

export default function Home() {
  const { data, isLoading, error } = useFetch<Artist>(true);

  if (isLoading) return <MainPageLoading />;
  if (error) return <div>Request Error</div>;

  const returnedData: Artist = data![0];

  return (
    <>
      <MainContainer>
        <Hero artist={returnedData} />
        <History artist={returnedData} />
        <Article artist={returnedData} />
        <MainSwiper artist={returnedData} />
      </MainContainer>
    </>
  );
}
