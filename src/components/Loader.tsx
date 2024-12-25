import { LoadingOverlay } from "@mantine/core";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <LoadingOverlay
      visible={true}
      zIndex={1000}
      overlayProps={{
        bg: "dark",
        opacity: 0.05,
        blur: 0,
      }}
      loaderProps={{ children: <PropagateLoader color="var(--color-fary)" /> }}
    />
  );
};

export default Loader;
