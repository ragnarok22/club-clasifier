import { RefreshIcon } from "@heroicons/react/outline";

const Loader = ({ className }) => {
  return (
    <RefreshIcon
      className={`h-6 w-6 animate-spin ${className || ""}`}
      aria-hidden="true"
    />
  );
};

export default Loader;
