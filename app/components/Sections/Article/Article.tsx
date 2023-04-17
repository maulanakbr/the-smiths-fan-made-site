import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import ImageElement from "../../Image/ImageElement";
import ArticleIBody from "./ArticleIBody";

import type { Artist, ContextProps } from "@/app/types";

export default function Article({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ComponentHeader>
          <h2>ARTICLES</h2>
        </ComponentHeader>
        {artist?.contents.map((item, index) => (
          <div key={item.contentId}>
            <ImageElement
              imageSrc={item.article.image}
              imageAlt={item.contentId}
            />
            <ArticleIBody pickedIndex={index} />
          </div>
        ))}
      </Container>
    </ArtistContext.Provider>
  );
}
