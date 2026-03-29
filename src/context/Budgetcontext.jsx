import React, { createContext, useContext, useEffect, useState } from 'react'
const Budgetcontex = createContext()
export function Budgetcontext({children}) {
    const[expense,setexpense] = useState([])
     async function loadexpenses() {
       
      try{
            const r = await localStorage.getItem("expenses")
            if(r){
              const data = JSON.parse(r)
              setexpense(data)
            }
      }
      catch{
          console.log("error")
      }
    }
    useEffect(()=>{
        loadexpenses()
    },[])

    const saveExpense = async (updated) => {
  await localStorage.setItem("expenses", JSON.stringify(updated));
  setexpense(updated);
};

   
  return (
    <Budgetcontex.Provider value={{expense,setexpense,saveExpense}}>
        {children}
    </Budgetcontex.Provider>
  )
}
export function useBudget()
{
    return useContext(Budgetcontex)
}



