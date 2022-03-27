import { toast } from "react-toastify";

type toastMessageParams = {
  type: 'error' | 'success' | 'warning',
  message: string,
}

export function toastMessage({type, message}: toastMessageParams) {
  const config: any= {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  if(type === 'error') {
    return toast.error(message, {...config}); 
  } else if(type === 'success') {
    return toast.success(message, {...config});
  } else if(type === 'warning') {
    return toast.warning(message, {...config});
  }
}