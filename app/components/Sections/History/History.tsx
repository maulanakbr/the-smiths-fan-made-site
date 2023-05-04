import { useRouter } from "next/navigation";
import ArtistContext from "@/app/context/ArtistContext";

import Container from "../../Layout/Container";
import ComponentHeader from "../../Header/ComponentHeader";
import Paragraph from "../../Paragraph/Paragraph";
import NavigationElement from "../../Navigation/NavigationElement";

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
        <ComponentHeader type="H3" headerText="History" />
        <Paragraph dataToShow={artist!.history.historyContent} />
        <NavigationElement
          navigationType="BUTTON"
          navigationText="Read More"
          handleFunction={handleClickButton}
        />
      </Container>
    </ArtistContext.Provider>
  );
}
