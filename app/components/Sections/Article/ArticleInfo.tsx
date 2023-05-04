import { useArtistContext } from "@/app/context/ArtistContext";

import ComponentHeader from "../../Header/ComponentHeader";
import Paragraph from "../../Paragraph/Paragraph";

import type { SomeContentProps } from "@/app/types";

export default function ArticleInfo({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const bodyData = artist?.contents[pickedIndex];

  return (
    <>
      <ComponentHeader type="H4" headerText={bodyData!.article.title} />
      <div className="article-info">
        <Paragraph
          dataToShow={bodyData!.article.writters}
          isTruncated={false}
        />
        <Paragraph
          dataToShow={bodyData!.article.publisher}
          isTruncated={false}
        />
      </div>
      <Paragraph dataToShow={bodyData!.article.date} isTruncated={false} />
    </>
  );
}
