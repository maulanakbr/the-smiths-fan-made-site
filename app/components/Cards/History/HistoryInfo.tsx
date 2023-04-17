import { useArtistContext } from "@/app/context/ArtistContext";

import ComponentHeader from "../../Header/ComponentHeader";

export default function HistoryInfo() {
  const { artist } = useArtistContext();

  return (
    <>
      <ComponentHeader>
        <h2>{artist?.artistName}</h2>
      </ComponentHeader>

      {/* Artist Metadata */}
      <div>
        <p>Artist ID: 0{artist?.artistId}</p>
        <p></p>
      </div>
    </>
  );
}
