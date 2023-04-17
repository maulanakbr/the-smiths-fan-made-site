import { createContext, useContext } from "react";

import type { Discogs, ContextProps } from "../types";

const DiscogsContext = createContext<ContextProps<Discogs> | null>(null);

export function useDiscogsContext() {
  const context = useContext(DiscogsContext);

  if (!context) {
    throw new Error(
      "Component must be renedered as child of DiscogsContext component."
    );
  }

  return context;
}

export default DiscogsContext;
