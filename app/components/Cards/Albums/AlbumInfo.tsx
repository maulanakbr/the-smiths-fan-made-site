import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ComponentHeader from "../../Header/ComponentHeader";
import Paragraph from "../../Paragraph/Paragraph";
import Link from "next/link";

export default function AlbumInfo() {
  const { discogs } = useDiscogsContext();

  return (
    <>
      <ComponentHeader>
        <h2>{discogs?.albumName}</h2>
      </ComponentHeader>

      {/* Album Metadata */}
      <div>
        <p>Album ID: {discogs?.albumId}</p>
        <p>Label: {discogs?.label}</p>
        <p>
          Length:{" "}
          {typeof discogs?.albumLength === "object"
            ? Object.values(discogs?.albumLength.ukVersion)
            : discogs?.albumLength.toString()}
        </p>
        <p>Recorded: {discogs?.recorded}</p>
        <p>Release: {discogs?.releaseDate}</p>
        <p>
          Studio:{" "}
          {typeof discogs?.studio === "object"
            ? discogs.studio.map((item) => <span key={item}>{item}</span>)
            : discogs?.studio}
        </p>
        <p>
          Producer:{" "}
          {typeof discogs?.producer === "object"
            ? discogs!.producer.map((item) => <span key={item}>{item}</span>)
            : discogs?.producer}
        </p>
        <p>Composer: {discogs?.musicComposer}</p>
        <p>Lyrics: {discogs?.lyricist}</p>
      </div>

      {/* Album Platforms */}
      <div>
        <div>
          <Link href={discogs!.listeningPlatform.spotify} target="_blank">
            Spotify
          </Link>
        </div>
        <div>
          <Link href={discogs!.listeningPlatform.appleMusic} target="_blank">
            Apple Music
          </Link>
        </div>
        <div>
          <Link href={discogs!.listeningPlatform.deezer} target="_blank">
            Deezer
          </Link>
        </div>
      </div>

      {/* Album Tracklist */}
      <div>
        <span>Tracklist:</span>
        {discogs?.trackList.map((item) => (
          <div key={item.title}>
            <p>{item.title}</p>
            <p>{item.trackLength}</p>
          </div>
        ))}
      </div>

      {/* Album Charts */}
      <div>
        <span>Charts:</span>
        <div>
          <p>Australia - {discogs?.charts.australia}</p>
          <p>
            European Top 100 Albums - {discogs?.charts.europeanTop100Albums}
          </p>
          <p>UK Albums Chart - {discogs?.charts.ukAlbumsChart}</p>
          <p>US Billboard - {discogs?.charts.usBillboard}</p>
        </div>
      </div>

      {/* Album Ratings */}
      <div>
        <span>Ratings:</span>
        <div>
          <p>All Music - {discogs?.ratings.allMusic}</p>
          <p>Pitchfork - {discogs?.ratings.pitchfork}</p>
          <p>
            The Rolling Stone Album Guide -{" "}
            {discogs?.ratings.theRollingStoneAlbumGuide}
          </p>
        </div>
      </div>

      {/* Album Description */}
      <Paragraph dataToShow={discogs!.description} isTruncated={false} />
    </>
  );
}
