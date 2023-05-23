import truncate from "@/app/utils/truncate";

import type { ParagraphProps } from "@/app/types";

export default function Paragraph({
  dataToShow,
  isTruncated = true,
  numberOfTruncated = 300,
  paragraphClass,
}: ParagraphProps) {
  const paragraphToShow: string =
    isTruncated && typeof dataToShow === "string"
      ? truncate(dataToShow, numberOfTruncated)
      : typeof dataToShow === "object"
      ? dataToShow[0].toString()
      : dataToShow;

  return (
    <>
      <p className={paragraphClass}>{paragraphToShow}</p>
    </>
  );
}
