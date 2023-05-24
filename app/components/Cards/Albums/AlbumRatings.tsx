import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ContentFill from "../../ContentFill";

import type { RatingProps } from "@/app/types";

export default function AlbumRatings() {
  const { discogs } = useDiscogsContext();

  const ratings: RatingProps = discogs!.ratings;

  const ratingsArr: string[] = [
    `All Music: ${ratings.allMusic}`,
    `Pitchfork: ${ratings.pitchfork}`,
    `The Rolling Stone Album Guide: ${ratings.theRollingStoneAlbumGuide}`,
  ];

  return (
    <div className="general-info-content">
      <ContentFill
        contentType="NORMAL"
        contentCategory="Ratings"
        contentData={ratingsArr}
        contentClass="general-info-text"
      />
    </div>
  );
}
