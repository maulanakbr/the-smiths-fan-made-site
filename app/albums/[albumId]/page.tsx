"use client";

import { usePathname } from "next/navigation";
import { useFetch } from "@/app/hooks/useFetch";

import AlbumCard from "@/app/components/Cards/Albums/AlbumCard";

import extractPath from "@/app/utils/extractPath";

import type { Discogs } from "@/app/types";

export default function AlbumIdPage() {
  const pathName: string = usePathname();

  const { data, isLoading, error } = useFetch<Discogs>(
    false,
    extractPath(pathName!)
  );

  const returnedData: Discogs = data!;

  if (error) return <div>Request Error</div>;
  if (isLoading) return <div>Loading Album Brow...</div>;

  return (
    <>
      <AlbumCard discogs={returnedData} />
    </>
  );
}
