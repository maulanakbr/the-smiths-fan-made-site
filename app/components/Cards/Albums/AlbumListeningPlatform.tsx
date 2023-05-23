import { useDiscogsContext } from "@/app/context/DiscogsContext";

import { SiSpotify, SiApplemusic, SiDeezer } from "react-icons/si";
import NavigationElement from "../../Navigation/NavigationElement";

import type { PlatformProps } from "@/app/types";

export default function AlbumListeningPlatform() {
  const { discogs } = useDiscogsContext();

  const platforms: PlatformProps = discogs!.listeningPlatform;

  const iconColors: string[] = ["#1ed760", "#f04e65", "#f88715"];

  return (
    <div className="album-listening-platform-content">
      <ul role="list">
        <li>
          <NavigationElement
            navigationType="ICON"
            navigationLink={platforms.spotify}
          >
            <SiSpotify size={25} color={iconColors[0]} />
          </NavigationElement>
        </li>
        <li>
          <NavigationElement
            navigationType="ICON"
            navigationLink={platforms.appleMusic}
          >
            <SiApplemusic size={25} color={iconColors[1]} />
          </NavigationElement>
        </li>
        <li>
          <NavigationElement
            navigationType="ICON"
            navigationLink={platforms.deezer}
          >
            <SiDeezer size={25} color={iconColors[2]} />
          </NavigationElement>
        </li>
      </ul>
    </div>
  );
}
