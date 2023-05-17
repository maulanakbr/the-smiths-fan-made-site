import { useArtistContext } from "@/app/context/ArtistContext";

import Paragraph from "../../Paragraph/Paragraph";
import NavigationElement from "../../Navigation/NavigationElement";

import type { SomeContentProps } from "@/app/types";

export default function ArticleIBody({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const bodyData = artist?.contents[pickedIndex];

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
