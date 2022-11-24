import { FunctionComponent } from "react";

interface IMinusIcon {
  className?: string;
  disable: boolean;
}

const Plus: FunctionComponent<IMinusIcon> = ({ className, disable }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="4"
      stroke="#FF7E1B"
      strokeOpacity={disable ? "0.5" : "1"}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
};

export default Plus;
