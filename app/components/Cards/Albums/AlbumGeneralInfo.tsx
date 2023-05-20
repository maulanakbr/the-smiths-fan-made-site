import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ContentFill from "../ContentFill";

export default function AlbumGeneralInfo() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-info">
      <ContentFill
        contentData={discogs!.albumId}
        contentCategory="Album ID"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={discogs!.label}
        contentCategory="Label"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={
          typeof discogs?.albumLength === "object"
            ? discogs!.albumLength.ukVersion
            : discogs!.albumLength.toString()
        }
        contentCategory="Length"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={discogs!.recorded.toString()}
        contentCategory="Recorded"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={discogs!.releaseDate}
        contentCategory="Release"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={
          typeof discogs?.studio === "object"
            ? discogs!.studio.map((item) => item)
            : discogs!.studio
        }
        contentCategory="Studio"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={
          typeof discogs?.producer === "object"
            ? discogs!.producer.map((item) => item)
            : discogs!.producer
        }
        contentCategory="Producer"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={discogs!.musicComposer}
        contentCategory="Composer"
        contentClass="album-info-text"
      />
      <ContentFill
        contentData={discogs!.lyricist}
        contentCategory="Lyrics"
        contentClass="album-info-text"
      />
    </div>
  );
}
