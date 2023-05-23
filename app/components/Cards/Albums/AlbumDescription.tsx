import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ContentFill from "../ContentFill";

export default function AlbumDescription() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="general-info-content">
      <ContentFill
        contentType="NORMAL"
        contentCategory="Description"
        contentData={discogs!.description}
        contentClass="general-info-text"
      />
    </div>
  );
}
