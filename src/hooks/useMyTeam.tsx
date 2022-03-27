import { useContext } from "react";
import { MyTeamContext } from "../contexts/MyTeamContext";

const useMyTeam = () => {
  return useContext(MyTeamContext);
};

export default useMyTeam;