import type Artist from "./artist.interface";
import type { Url } from "next/dist/shared/lib/router/router";
import type { MouseEventHandler, ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
  someClassName?: string;
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

enum NavigationEnum {
  BUTTON,
  LINK,
}

export type NavigationProps<T> = {
  navigationType: keyof typeof NavigationEnum;
  navigationClass?: string;
  navigationLink?: Url;
  navigationText: string;
  handleFunction?: () => MouseEventHandler<T>;
};

enum ComponentHeaderEnum {
  H1,
  H1_SUB,
  H2,
  H3,
  H4,
}

export type ComponentHeaderProps = {
  type: keyof typeof ComponentHeaderEnum;
  headerText: string;
  subText?: string;
  headerClass?: string;
};

export type ParagraphProps<T = Artist> = {
  dataToShow: T extends Artist ? string | string[] : null;
  isTruncated?: boolean;
};

export type SomeContentProps = {
  pickedIndex: number;
};
