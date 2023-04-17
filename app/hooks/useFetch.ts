import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

import { ARTIST_BASE_URL, DISCOGS_BASE_URL } from "../config";

import type { FetchResponseProps } from "../types";

export const useFetch = <TData>(
  isFetchArtist: boolean,
  urlParams?: string | undefined
): FetchResponseProps<TData> => {
  const DISCOGS_FETCH_ALBUM_URL = `${DISCOGS_BASE_URL}/${urlParams}`;

  const { data, isLoading, error } = useSWR<TData>(
    isFetchArtist
      ? ARTIST_BASE_URL
      : urlParams && !isFetchArtist
      ? DISCOGS_FETCH_ALBUM_URL
      : DISCOGS_BASE_URL,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
};
