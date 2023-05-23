import { useArtistContext } from "@/app/context/ArtistContext";

import ContentFill from "../ContentFill";
import NavigationElement from "../../Navigation/NavigationElement";
import Paragraph from "../../Paragraph/Paragraph";

export default function HistoryDescription() {
  const { artist } = useArtistContext();

  return (
    <div className="general-info-content">
      <Paragraph
        numberOfTruncated={600}
        dataToShow={artist!.history.historyContent}
        paragraphClass="general-info-text"
      />
      <NavigationElement
        navigationType="LINK"
        navigationClass="link-content"
        navigationLink={artist?.history.historySource}
        navigationText="Continue Reading"
      />
    </div>
  );
}
