"use client";

import { useFetch } from "../hooks/useFetch";

import HistoryCard from "../components/Cards/History/HistoryCard";

import type { Artist } from "../types";

export default function HistoryPage() {
  const { data, isLoading, error } = useFetch<Artist>(true);

  if (error) return <div>Request Error</div>;
  if (isLoading) return <div>Loading History Brow...</div>;

  console.log(data);

  const returnedData: Artist = data![0];

  return (
    <>
      <HistoryCard artist={returnedData} />
    </>
  );
}
