import { useArtistContext } from "@/app/context/ArtistContext";

import NavigationElement from "../../Navigation/NavigationElement";
import Paragraph from "../../Paragraph/Paragraph";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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
        navigationType="ICON"
        navigationClass="link-content"
        navigationLink={artist?.history.historySource}
        navigationText="Continue Reading"
      >
        <HiOutlineArrowUpRight size={20} />
      </NavigationElement>
    </div>
  );
}
