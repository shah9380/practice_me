import { createContext, useState } from "react"

const AppContext = createContext();

// const AppContextProvider = ({children})=>{
//     const [newValue, setValue] = useState('hello worlld');

//     const handleAlone =()=>{
//         console.log("handle console")
//     }
//     const value = {
//         handleAlone,
//         newValue, 
//         setValue
//     }

//     return <AppContext.Provider value={value}>
//         {children}
//     </AppContext.Provider>
// }

const MyProvider = ({children})=>{
    const[obj, setObj]= useState({
        name: "misbah",
        employeeId: 2237038,
        company: "TCS"
    })

    const changeValue = (key, val)=>{
        setObj((prevObj)=> ({...prevObj, [key] : val}))
    }

    let value = {
        obj,
        setObj,
        changeValue
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export {AppContext, MyProvider} ;


