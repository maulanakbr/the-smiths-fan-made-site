"use client";

import { usePathname } from "next/navigation";
import { useFetch } from "@/app/hooks/useFetch";

import MainContainer from "@/app/components/Layout/MainContainer";
import AlbumCard from "@/app/components/Cards/Albums/AlbumCard";
import MainPageLoading from "@/app/components/Loading/MainPageLoading";

import extractPath from "@/app/utils/extractPath";

import type { Discogs } from "@/app/types";

export default function AlbumIdPage() {
  const pathName: string | undefined = usePathname();

  const { data, isLoading, error } = useFetch<Discogs>(
    false,
    extractPath(pathName)
  );

  if (isLoading) return <MainPageLoading />;
  if (error) return <div>Request Album Error</div>;

  const returnedData: Discogs = data!;

  return (
    <>
      <MainContainer>
        <AlbumCard discogs={returnedData} />
      </MainContainer>
    </>
  );
}
