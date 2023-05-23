import { useDiscogsContext } from "@/app/context/DiscogsContext";

import NavigationElement from "../../Navigation/NavigationElement";
import { BsPlay } from "react-icons/bs";

export default function AlbumHeroPlayButton() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-hero-play-button-content">
      <NavigationElement
        navigationClass="album-play-icon"
        navigationType="ICON"
        navigationLink={discogs!.listeningPlatform.spotify}
      >
        <BsPlay size={55} />
      </NavigationElement>
    </div>
  );
}
