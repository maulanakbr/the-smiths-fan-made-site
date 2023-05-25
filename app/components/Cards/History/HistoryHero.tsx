import { useArtistContext } from "@/app/context/ArtistContext";

import ImageElement from "../../Image/ImageElement";

export default function HistoryHero() {
  const { artist } = useArtistContext();

  return (
    <div className="history-hero-content">
      <ImageElement
        imageSrc={artist!.bandImages[0].url[5]}
        imageAlt={artist!.artistId}
      />
    </div>
  );
}
