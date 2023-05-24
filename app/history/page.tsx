"use client";

import { useFetch } from "../hooks/useFetch";

import MainContainer from "@/app/components/Layout/MainContainer";
import HistoryCard from "../components/Cards/History/HistoryCard";
import MainPageLoading from "../components/Loading/MainPageLoading";

import type { Artist } from "../types";

export default function HistoryPage() {
  const { data, isLoading, error } = useFetch<Artist>(true);

  if (isLoading) return <MainPageLoading />;
  if (error) return <div>Request Error</div>;

  const returnedData: Artist = data![0];

  return (
    <>
      <MainContainer>
        <HistoryCard artist={returnedData} />
      </MainContainer>
    </>
  );
}
