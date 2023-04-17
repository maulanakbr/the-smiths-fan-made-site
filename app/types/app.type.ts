import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import Artist from "./artist.interface";

export type ChildrenProps = {
  children: ReactNode;
  attributes?: HTMLAttributes<HTMLElement>;
};

export type FetcherProps = <TData>(url: string) => Promise<TData>;

export type FetchResponseProps<TRes> = {
  data: TRes | undefined;
  isLoading: boolean;
  error: any;
};

export type ContextProps<T> = {
  artist?: T | undefined;
  discogs?: T | undefined;
};

export type ButtonProps<T> = {
  buttonAttributes?: string;
  children: ReactNode;
  handleFunction?: () => MouseEventHandler<T>;
};

export type ParagraphProps<T = Artist> = {
  dataToShow: T extends Artist ? string : null;
  isTruncated?: boolean;
};

export type SomeContentProps = {
  pickedIndex: number;
};
