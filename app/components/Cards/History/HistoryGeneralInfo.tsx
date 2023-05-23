import { useArtistContext } from "@/app/context/ArtistContext";

import ContentFill from "../ContentFill";
import NavigationElement from "../../Navigation/NavigationElement";

export default function HistoryGeneralInfo() {
  const { artist } = useArtistContext();

  return (
    <div className="general-info-content">
      <ContentFill
        contentType="NORMAL"
        contentCategory="Origin"
        contentData={artist?.origin}
        contentClass="general-info-text"
      />
      <ContentFill
        contentType="NORMAL"
        contentCategory="Labels"
        contentData={artist?.labels}
        contentClass="general-info-text"
      />
      <NavigationElement
        navigationType="BUTTON"
        navigationLink={artist?.website}
        navigationText="Official Website"
      />
    </div>
  );
}
