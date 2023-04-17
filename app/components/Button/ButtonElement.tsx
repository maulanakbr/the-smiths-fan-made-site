import type { ButtonProps } from "@/app/types";

export default function ButtonElement({
  children,
  buttonAttributes = "button-content",
  handleFunction,
}: ButtonProps<HTMLButtonElement>) {
  return (
    <>
      <button className={buttonAttributes} onClick={handleFunction}>
        {children}
      </button>
    </>
  );
}
