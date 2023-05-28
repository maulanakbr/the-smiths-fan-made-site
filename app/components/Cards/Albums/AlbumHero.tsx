import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ImageElement from "../../Image/ImageElement";
import ComponentHeader from "../../Header/ComponentHeader";
import AlbumHeroPlayButton from "./AlbumHeroPlayButton";
import NavigationElement from "../../Navigation/NavigationElement";
import { SiApplemusic, SiDeezer, SiSpotify } from "react-icons/si";

import type { PlatformProps } from "@/app/types";

export default function AlbumHero() {
  const { discogs } = useDiscogsContext();

  const platforms: PlatformProps = discogs!.listeningPlatform;

  const iconColors: string[] = ["#1ed760", "#f04e65", "#f88715"];

  return (
    <div className="album-hero-content">
      <ImageElement imageSrc={discogs!.artwork} imageAlt={discogs!.albumId} />
      <div className="album-hero-main-container">
        <div className="album-tag-container">
          <ComponentHeader
            headerType="H1_TAG"
            headerText={discogs!.artist.artistName}
            subText={discogs!.albumName}
            headerClass="album-hero-text"
          />
          <AlbumHeroPlayButton />
        </div>
        <div className="album-listening-platform-content">
          <ul role="list">
            <li>
              <NavigationElement
                navigationType="ICON"
                navigationLink={platforms.spotify}
              >
                <SiSpotify size={17} color={iconColors[0]} />
              </NavigationElement>
            </li>
            <li>
              <NavigationElement
                navigationType="ICON"
                navigationLink={platforms.appleMusic}
              >
                <SiApplemusic size={17} color={iconColors[1]} />
              </NavigationElement>
            </li>
            <li>
              <NavigationElement
                navigationType="ICON"
                navigationLink={platforms.deezer}
              >
                <SiDeezer size={17} color={iconColors[2]} />
              </NavigationElement>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
