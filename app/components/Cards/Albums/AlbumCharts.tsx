import { useDiscogsContext } from "@/app/context/DiscogsContext";

import ContentFill from "../../ContentFill";

import type { ChartProps } from "@/app/types";

export default function AlbumCharts() {
  const { discogs } = useDiscogsContext();

  const charts: ChartProps = discogs!.charts;

  const chartsArr: string[] = [
    `Australia: ${charts.australia}`,
    `European Top 100 Albums: ${charts.europeanTop100Albums}`,
    `UK Albums Chart: ${charts.ukAlbumsChart}`,
    `US Billboard: ${charts.usBillboard}`,
  ];

  return (
    <div className="general-info-content">
      <ContentFill
        contentType="NORMAL"
        contentCategory="Charts"
        contentData={chartsArr}
        contentClass="general-info-text"
      />
    </div>
  );
}
