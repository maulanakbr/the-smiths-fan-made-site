import axios, { AxiosResponse } from "axios";

import type { FetcherProps } from "../types";

export const fetcher: FetcherProps = async <TData>(
  url: string
): Promise<TData> => {
  try {
    const response: AxiosResponse<TData> = await axios.get(url);

    const { data } = response;

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("Fetch error");
  }
};
