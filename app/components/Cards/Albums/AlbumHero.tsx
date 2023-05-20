import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ImageElement from "../../Image/ImageElement";
import ComponentHeader from "../../Header/ComponentHeader";

export default function AlbumHero() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-hero-content">
      <ImageElement imageSrc={discogs!.artwork} imageAlt={discogs!.albumId} />
      <ComponentHeader
        type="H1_TAG"
        headerText={discogs!.albumName}
        subText={discogs!.artist.artistName}
        headerClass="album-hero-text"
      />
    </div>
  );
}
