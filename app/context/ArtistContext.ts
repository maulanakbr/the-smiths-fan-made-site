import { createContext, useContext } from "react";

import type { Artist, ContextProps } from "../types";

const ArtistContext = createContext<ContextProps<Artist> | null>(null);

export function useArtistContext() {
  const context = useContext(ArtistContext);

  if (!context) {
    throw new Error(
      "Component must be renedered as child of ArtistContext component."
    );
  }

  return context;
}

export default ArtistContext;
