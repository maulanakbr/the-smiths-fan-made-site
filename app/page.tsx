"use client";

import { useFetch } from "./hooks/useFetch";

import Hero from "./components/Sections/Hero/Hero";
import History from "./components/Sections/History/History";
import Article from "./components/Sections/Article/Article";
import MainSwiper from "./components/Sections/Swiper/MainSwiper";

import type { Artist } from "./types";

export default function Home() {
  const { data, isLoading, error } = useFetch<Artist>(true);

  if (error) return <div>Request Error</div>;
  if (isLoading) return <div>Loading Brow...</div>;

  const returnedData: Artist = data![0];

  return (
    <>
      <Hero artist={returnedData} />
      <History artist={returnedData} />
      <Article artist={returnedData} />
      <MainSwiper artist={returnedData} />
    </>
  );
}
