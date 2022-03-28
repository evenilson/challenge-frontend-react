import { createContext, ReactNode, useEffect, useState } from "react";

type BreakpointDeviceContextType = {
  device: Device | undefined;
}

type Device = 'mobile' | 'tablet' | 'desktop';

type BreakpointProviderProps = {
  children: ReactNode;
};

export const BreakpointDeviceContext = createContext( {} as BreakpointDeviceContextType);

function BreakpointDeviceContextProvider({children}: BreakpointProviderProps) {
  const [device, setDevice] = useState<Device>(
    deviceCurrent()
  );

  function deviceCurrent(): Device {
    const widthScreen = window.innerWidth;
    if(widthScreen >= 800)  return 'desktop'

    else if (widthScreen < 800 && widthScreen >= 600) return 'tablet'
  
    else return 'mobile';
  }

  useEffect(() => {
    const listener = () => { setDevice(deviceCurrent) };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <BreakpointDeviceContext.Provider value={{device}}>
      {children}
    </BreakpointDeviceContext.Provider>
  )
  
}

export default BreakpointDeviceContextProvider