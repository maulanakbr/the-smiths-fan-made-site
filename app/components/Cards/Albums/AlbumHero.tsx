import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ImageElement from "../../Image/ImageElement";
import ComponentHeader from "../../Header/ComponentHeader";
import AlbumHeroPlayButton from "./AlbumHeroPlayButton";

export default function AlbumHero() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-hero-content">
      <ImageElement imageSrc={discogs!.artwork} imageAlt={discogs!.albumId} />
      <div className="album-tag-container">
        <ComponentHeader
          headerType="H1_TAG"
          headerText={discogs!.artist.artistName}
          subText={discogs!.albumName}
          headerClass="album-hero-text"
        />
        <AlbumHeroPlayButton />
      </div>
    </div>
  );
}
