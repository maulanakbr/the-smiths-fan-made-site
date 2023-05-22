import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ContentFill from "../ContentFill";

export default function AlbumCharts() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-charts-content">
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.ratings.allMusic}
        contentCategory="All Music"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.ratings.pitchfork}
        contentCategory="Pitchfork"
      />
      <ContentFill
        contentType="NORMAL"
        contentData={discogs!.ratings.theRollingStoneAlbumGuide}
        contentCategory="The Rolling Stone Album Guide"
      />
    </div>
  );
}
