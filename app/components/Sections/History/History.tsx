import { useRouter } from "next/navigation";
import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import Paragraph from "../../Paragraph/Paragraph";
import ButtonElement from "../../Button/ButtonElement";

import type { Artist, ContextProps } from "@/app/types";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import type { MouseEventHandler } from "react";

export default function History({ artist }: ContextProps<Artist>) {
  const router: AppRouterInstance = useRouter();

  const handleClickButton =
    (): MouseEventHandler<HTMLButtonElement> extends void
      ? MouseEvent
      : any => {
      router.push("/history");
    };

  return (
    <ArtistContext.Provider value={{ artist }}>
      <Container>
        <ComponentHeader>
          <h2>HISTORY</h2>
        </ComponentHeader>
        <Paragraph dataToShow={artist!.history} />
        <ButtonElement handleFunction={handleClickButton}>
          Read More
        </ButtonElement>
      </Container>
    </ArtistContext.Provider>
  );
}
