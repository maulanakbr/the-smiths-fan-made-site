export type ArtistMembersProps = {
  birthName: string;
  birthDate: string;
  birthPlace: string;
  age: number;
  occupation: string | string[];
  roles: string | string[];
  personImage: string;
};

export type ImageSourceProps = {
  hasColor: boolean;
  url: string[];
};

type ArticleProps = {
  publisher: string;
  writters: string[] | string;
  date: string;
  originalSource: string;
  title: string;
  body: string;
  image: string;
};

export type ContentProps = {
  contentId: string;
  article: ArticleProps;
};
