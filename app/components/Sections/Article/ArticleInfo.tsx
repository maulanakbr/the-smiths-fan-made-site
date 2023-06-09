import { useArtistContext } from "@/app/context/ArtistContext";

import ContentFill from "../../Contents/ContentFill";

import type { ContentProps, SomeContentProps } from "@/app/types";

export default function ArticleInfo({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const bodyData: ContentProps | undefined = artist?.contents[pickedIndex];

  const writtersAndPublisher: string[] = [
    `${
      typeof bodyData!.article.writters === "object"
        ? bodyData!.article.writters[0]
        : bodyData!.article.writters
    }`,
    `${bodyData!.article.publisher}`,
    `${bodyData!.article.date}`,
  ];

  return (
    <div className="general-info-content">
      <ContentFill
        contentType="NORMAL"
        contentCategory={bodyData!.article.title}
        contentData={writtersAndPublisher}
        contentClass="general-info-text"
      />
    </div>
  );
}
