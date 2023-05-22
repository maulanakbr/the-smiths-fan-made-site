import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ComponentHeader from "../../Header/ComponentHeader";
import Paragraph from "../../Paragraph/Paragraph";

export default function AlbumDescription() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-description-content">
      <ComponentHeader headerType="H4" headerText="Description" />
      <Paragraph isTruncated={false} dataToShow={discogs!.description} />
    </div>
  );
}
