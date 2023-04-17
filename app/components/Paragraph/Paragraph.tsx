import truncate from "@/app/utils/truncate";

import type { ParagraphProps } from "@/app/types";

export default function Paragraph({
  dataToShow,
  isTruncated = true,
}: ParagraphProps) {
  const paragraph: string = isTruncated
    ? truncate(dataToShow, 300)
    : dataToShow;

  return (
    <>
      <p>{paragraph}</p>
    </>
  );
}
