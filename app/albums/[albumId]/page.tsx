"use client";

import { usePathname } from "next/navigation";
import { useFetch } from "@/app/hooks/useFetch";

import AlbumCard from "@/app/components/Cards/Albums/AlbumCard";

import extractPath from "@/app/utils/extractPath";

import type { Discogs } from "@/app/types";

export default function AlbumIdPage() {
  const pathName: string | undefined = usePathname();

  const extractedPath = (path: string): string => {
    if (typeof path === "string") {
      return extractPath(path);
    }

    return path;
  };

  const { data, isLoading, error } = useFetch<Discogs>(
    false,
    extractedPath(pathName)
  );

  if (error) return <div>Request Error</div>;
  if (isLoading) return <div>Loading Album Brow...</div>;

  const returnedData: Discogs = data!;

  return (
    <>
      <AlbumCard discogs={returnedData} />
    </>
  );
}
