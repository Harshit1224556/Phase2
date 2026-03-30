import React, { createContext, useState } from 'react'
export const Expensecontex = createContext()

function Expensecontext({children}) {

    const[budget,setbudget] = useState([
        {
            categ:"food",
            total:40000,
            expense:0
        },
        {
            categ:"grocery",
            total:30000,
            expense:0

        },
        {
           
            categ:"gym",
            total:20000,
            expense:0
        }
    ])
  return (
    <Expensecontex.Provider value={{budget,setbudget}}>
     
     {children}
    </Expensecontex.Provider>
  )
}

export default Expensecontext