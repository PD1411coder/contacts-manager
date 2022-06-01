import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const StateContextProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const useStateValue = () => useContext(StateContext);

export { StateContextProvider, useStateValue };
