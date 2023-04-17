import { useArtistContext } from "@/app/context/ArtistContext";

import ComponentHeader from "../../Header/ComponentHeader";
import Paragraph from "../../Paragraph/Paragraph";
import ButtonElement from "../../Button/ButtonElement";

import type { SomeContentProps } from "@/app/types";

export default function ArticleIBody({ pickedIndex }: SomeContentProps) {
  const { artist } = useArtistContext();

  const bodyData = artist?.contents[pickedIndex];

  return (
    <>
      <ComponentHeader>{bodyData!.article.title}</ComponentHeader>
      <Paragraph dataToShow={bodyData!.article.body} />
      <ButtonElement
        handleFunction={() => {
          console.log("TODO: Add Function Here");
        }}
      >
        Continue Reading
      </ButtonElement>
    </>
  );
}
