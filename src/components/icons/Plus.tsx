import { FunctionComponent } from "react";

interface IPlusIcon {
  className?: string;
}

const Plus: FunctionComponent<IPlusIcon> = ({ className }) => {
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
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Plus;
