export type SingleProps = {
  singleTitle: string;
  released: string;
};

export type AlbumLengthProps = {
  ukVersion: string;
  americanVersion: {
    versionLength: string;
    trackInclude: string;
    trackIncludeLength: string;
  };
};

export type ChartProps = {
  australia: number;
  europeanTop100Albums: number;
  ukAlbumsChart: number;
  usBillboard: number;
};

export type RatingProps = {
  allMusic: string;
  pitchfork: string;
  theRollingStoneAlbumGuide: string;
};

export type TrackListProps = {
  title: string;
  trackLength: string;
  hasLyrics: boolean;
};

export type PlatformProps = {
  spotify: string;
  appleMusic: string;
  deezer: string;
};
