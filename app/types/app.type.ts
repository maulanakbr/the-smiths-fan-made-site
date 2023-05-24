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
  IMAGE,
  ICON,
}

export type NavigationProps<T> = {
  navigationType: keyof typeof NavigationEnum;
  navigationClass?: string;
  navigationLink?: Url;
  navigationText?: string;
  navigationImageSrc?: string;
  navigationImageAlt?: string;
  children?: ReactNode;
  handleFunction?: () => MouseEventHandler<T>;
};

export type NavigationMenuListProps = {
  navMenuType: string;
  navTarget: string;
};

export type ProjectAuthorProps = {
  authorName: string;
  githubProfile: string;
};

enum ComponentHeaderEnum {
  H1,
  H1_SUB,
  H1_TAG,
  H2,
  H3,
  H4,
}

export type ComponentHeaderProps = {
  headerType: keyof typeof ComponentHeaderEnum;
  headerText: string | string[];
  subText?: string;
  headerClass?: string;
};

enum ContentFillEnum {
  NORMAL,
  TABLE,
}

export type ContentFillProps = {
  contentType: keyof typeof ContentFillEnum;
  contentCategory?: string;
  contentData?: string | string[];
  children?: ReactNode;
  contentClass?: string;
};

export type ParagraphProps<T = Artist> = {
  dataToShow: T extends Artist ? string | string[] : null;
  isTruncated?: boolean;
  numberOfTruncated?: number;
  paragraphClass?: string | undefined;
};

export type SomeContentProps = {
  pickedIndex: number;
};
