import type Artist from "./artist.interface";

import type {
  AlbumLengthProps,
  ChartProps,
  PlatformProps,
  RatingProps,
  SingleProps,
  TrackListProps,
} from "./discogs.type";

export default interface Discogs extends Array<Discogs> {
  albumId: string;
  albumName: string;
  artist: Artist;
  releaseDate: string;
  recorded: number;
  label: string;
  producer: string | string[];
  lyricist: string;
  musicComposer: string;
  studio: string[] | string;
  singles: SingleProps[];
  albumLength: AlbumLengthProps | string;
  charts: ChartProps;
  ratings: RatingProps;
  trackList: TrackListProps[];
  artwork: string;
  description: string;
  listeningPlatform: PlatformProps;
}
