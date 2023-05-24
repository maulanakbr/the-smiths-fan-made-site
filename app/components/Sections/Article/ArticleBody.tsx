import { useArtistContext } from "@/app/context/ArtistContext";

import Paragraph from "../../Paragraph/Paragraph";
import NavigationElement from "../../Navigation/NavigationElement";

import type { ContentProps, SomeContentProps } from "@/app/types";

export default function ArticleIBody({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const bodyData: ContentProps | undefined = artist?.contents[pickedIndex];

  return (
    <>
      <Paragraph dataToShow={bodyData!.article.body} />
      <NavigationElement
        navigationType="LINK"
        navigationClass="link-content"
        navigationText="Continue Reading"
        navigationLink={bodyData!.article.originalSource}
      />
    </>
  );
}
