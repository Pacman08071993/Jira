import { React, createContext } from 'react';

export const SideContext = createContext(false)

const SideBarContext = ({ context, children }) => (
  <SideContext.Provider value={context}>{children}</SideContext.Provider>
)
  
export default SideBarContext