import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import ImageElement from "../../Image/ImageElement";
import ArticleBody from "./ArticleBody";
import ArticleInfo from "./ArticleInfo";

import type { Artist, ContextProps } from "@/app/types";

export default function Article({ artist }: ContextProps<Artist>) {
  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ComponentHeader headerType="H3" headerText="Articles" />
        {artist?.contents.map((item, index) => (
          <div key={item.contentId}>
            <ImageElement
              imageSrc={item.article.image}
              imageAlt={item.contentId}
            />
            <ArticleInfo pickedIndex={index} />
            <ArticleBody pickedIndex={index} />
          </div>
        ))}
      </Container>
    </ArtistContext.Provider>
  );
}
