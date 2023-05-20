import type { ContentFillProps } from "@/app/types";

export default function ContentFill({
  contentCategory,
  contentData,
  contentClass,
}: ContentFillProps) {
  return (
    <div className={contentClass}>
      <p>{contentCategory}</p>
      {typeof contentData === "object" ? (
        contentData.map((item) => <h4 key={item}>{item}</h4>)
      ) : (
        <h4>{contentData}</h4>
      )}
    </div>
  );
}
