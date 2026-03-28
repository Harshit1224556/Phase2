import React, { createContext, useContext, useState } from 'react'
const Budgetcontex = createContext()

export function Budgetcontext({children}) {

    const[expense,setexpense] = useState([])
  return (
    
    <Budgetcontex.Provider value={{expense,setexpense}}>
        {children}
    </Budgetcontex.Provider>
  )
}

//customhook for this
export function useBudget()
{
    return useContext(Budgetcontex)
}


//create context 

// then use context

