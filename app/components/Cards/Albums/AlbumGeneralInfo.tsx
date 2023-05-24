import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ContentFill from "../../ContentFill";

export default function AlbumGeneralInfo() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="general-info-content">
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.albumId}
        contentCategory="Album ID"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.label}
        contentCategory="Label"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={
          typeof discogs?.albumLength === "object"
            ? discogs!.albumLength.ukVersion
            : discogs!.albumLength.toString()
        }
        contentCategory="Length"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.recorded.toString()}
        contentCategory="Recorded"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.releaseDate}
        contentCategory="Release"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={
          typeof discogs?.studio === "object"
            ? discogs!.studio.map((item) => item)
            : discogs!.studio
        }
        contentCategory="Studio"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={
          typeof discogs?.producer === "object"
            ? discogs!.producer.map((item) => item)
            : discogs!.producer
        }
        contentCategory="Producer"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.musicComposer}
        contentCategory="Composer"
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.lyricist}
        contentCategory="Lyrics"
        contentClass="general-info-text"
      />
    </div>
  );
}
