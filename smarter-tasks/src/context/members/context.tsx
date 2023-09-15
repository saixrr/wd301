import React, { createContext, useContext, useReducer } from "react";
import { membersReducer, initialState, MembersState, MembersActions } from "./reducer";

const MembersStateContext = createContext<MembersState | undefined>(undefined);

type MembersDispatch = React.Dispatch<MembersActions>;





const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);
console.log(MembersDispatchContext)


export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(membersReducer, initialState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);
