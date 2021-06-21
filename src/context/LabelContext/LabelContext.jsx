import { React, createContext } from 'react';

export const LabelContext = createContext({})

const LabelProvider = ({ context, children }) => (
  <LabelContext.Provider value={context}>{children}</LabelContext.Provider>
)
  
export default LabelProvider;