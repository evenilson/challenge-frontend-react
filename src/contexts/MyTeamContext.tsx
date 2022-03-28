import { createContext, ReactNode, useState } from "react";
import { ICharacter } from "../types/character";
import { toastMessage } from "../utils/toastMessage";


type ResponseTeamResult = {
  haveMore: boolean,
  result: ICharacter[]
}

type MyTeamContextType = {
  myTeam: ICharacter[];
  getTeam: (limit: number) => ResponseTeamResult;
  addCharacterTeam: (character: ICharacter) => void;
  removeCharacterTeam: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

type MyTeamProviderProps = {
  children: ReactNode;
};

export const MyTeamContext = createContext( {} as MyTeamContextType);

function MyTeamContextProvider({children}: MyTeamProviderProps) {
  const teamLS = (localStorage.getItem("@marvel-team")) || '[{}]' as string
  const paserLS = JSON.parse(teamLS)
  const currentTeam = teamLS === '[{}]' ? [] : paserLS

  const [myTeam, setMyTeam] = useState<ICharacter[]>(currentTeam)
  

  function getTeam(limit: number): ResponseTeamResult {
    
    const myTeamCurrent = myTeam.slice(0, limit )

    return {
      haveMore: myTeamCurrent.length === myTeam.length ? false : true,
      result: myTeamCurrent
    }
  }

  function addCharacterTeam(character: ICharacter){
    const myTeamCurrent = [...myTeam]

    myTeamCurrent.push(character)

    setMyTeam([...myTeamCurrent])

    localStorage.setItem("@marvel-team", JSON.stringify(myTeamCurrent))

    toastMessage({type: 'success', message: `"${character.name}" added to the team!`});
  }

  function removeCharacterTeam(id: string){
    const myTeamCurrent = [...myTeam]

    const newTeam = myTeamCurrent.filter(character => character.id !== id)

    setMyTeam([...newTeam])

    localStorage.setItem("@marvel-team", JSON.stringify(myTeamCurrent))
    toastMessage({type: 'success', message: `Successfully removed!`});

  }

  function isFavorite(id: string){
    const character = myTeam.find((character) => {
      return character.id === id
    })

    return character ? true : false
  }

  return (
    <MyTeamContext.Provider value={{
      myTeam,
      getTeam,
      addCharacterTeam,
      removeCharacterTeam,
      isFavorite
    }}>
      {children}
    </MyTeamContext.Provider>
  )
  
}

export default MyTeamContextProvider