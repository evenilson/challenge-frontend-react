import { useContext } from "react";
import { BreakpointDeviceContext } from "../contexts/BreakpointDeviceContext";

const useBreakpointDevice = () => {
  return useContext(BreakpointDeviceContext);
};

export default useBreakpointDevice;