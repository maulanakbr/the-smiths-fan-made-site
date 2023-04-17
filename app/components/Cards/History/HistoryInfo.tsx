import { useArtistContext } from "@/app/context/ArtistContext";

import ComponentHeader from "../../Header/ComponentHeader";
import Link from "next/link";

export default function HistoryBody() {
  const { artist } = useArtistContext();

  return (
    <>
      <ComponentHeader>
        <h2>{artist?.artistName}</h2>
      </ComponentHeader>

      {/* Artist metadata */}
      <div>
        <p>{artist?.origin}</p>
        <p>
          Labels:{" "}
          {artist?.labels.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <Link href={artist!.website} target="_blank">
          Official Website
        </Link>
      </div>

      {/* Main Content */}
      <div>
        <p>{artist?.history.historyContent}</p>
        <Link href={artist!.history.historySource} target="_blank">
          Continue Reading
        </Link>
      </div>
    </>
  );
}
