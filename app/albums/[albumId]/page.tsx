"use client";

import { usePathname } from "next/navigation";
import { useFetch } from "@/app/hooks/useFetch";
import { useState, useEffect } from "react";

import AlbumCard from "@/app/components/Cards/Albums/AlbumCard";

import extractPath from "@/app/utils/extractPath";

import type { Discogs } from "@/app/types";

export default function AlbumIdPage() {
  const [extractedPath, setExtractedPath] = useState<string>("");

  const pathName: string | undefined = usePathname();

  useEffect(() => {
    setExtractedPath(extractPath(pathName));
  }, [pathName]);

  const { data, isLoading, error } = useFetch<Discogs>(false, extractedPath);

  if (error) return <div>Request Album Error</div>;
  if (isLoading) return <div>Loading Album Brow...</div>;

  const returnedData: Discogs = data!;

  return (
    <>
      <AlbumCard discogs={returnedData} />
    </>
  );
}
