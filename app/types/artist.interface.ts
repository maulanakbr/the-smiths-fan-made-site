import type {
  ArtistMembersProps,
  ContentProps,
  ImageSourceProps,
  HistoryProps,
} from "./artist.type";
import type Discogs from "./discogs.interface";

export default interface Artist extends Array<Artist> {
  artistId: string;
  artistName: string;
  origin: string;
  yearsActive: string;
  labels: string[];
  members: ArtistMembersProps[];
  bandImages: ImageSourceProps[];
  website: string;
  history: HistoryProps;
  contents: ContentProps[];
  discogs: Discogs[];
}
