import truncate from "@/app/utils/truncate";

import type { ParagraphProps } from "@/app/types";

export default function Paragraph({
  dataToShow,
  isTruncated = true,
}: ParagraphProps) {
  const paragraphToShow: string =
    isTruncated && typeof dataToShow === "string"
      ? truncate(dataToShow, 300)
      : typeof dataToShow === "object"
      ? dataToShow[0].toString()
      : dataToShow;

  return (
    <>
      <p className="paragraph-content">{paragraphToShow}</p>
    </>
  );
}
