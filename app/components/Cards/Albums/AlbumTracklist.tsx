import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ComponentHeader from "../../Header/ComponentHeader";
import ContentFill from "../../ContentFill";

export default function AlbumTracklist() {
  const { discogs } = useDiscogsContext();

  return (
    <div className="album-tracklist-content">
      <ComponentHeader headerType="H4" headerText="Tracklist" />
      <div className="album-tracklist-table">
        <table>
          <tbody>
            {discogs?.trackList.map((item, index) => (
              <ContentFill key={index} contentType="TABLE">
                <td>{(index += 1)}</td>
                <td>
                  <span>{item.title}</span>
                </td>
                <td>
                  <span>{item.trackLength}</span>
                </td>
              </ContentFill>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
