import { useState } from "react";



const App = () => {
    const styles ={
        backgroundColor: "#defcf9",
        justifyContent: "center",
        textAlign: "center",
        color: '#cca8e9',
        fontFamily: 'Dancing Script',
        padding: "2rem", 
        margin: "3rem",
    }

    const styles2 = {
        backgroundColor: "#ffe2e2",
        justifyContent: "center",
        textAlign: "center",
        color: '#8785a2',
        fontFamily: 'Dancing Script',
        padding: "1rem", 
        margin: "2rem",
    }

    const [counter, setCounter] = useState(0);//contador en 0
    const [counter2, setCounter2] = useState(1);

    return(

        <div>
        <div style = {styles2}>

        <h3>Salto</h3>
            <h4>{counter2}</h4>
            <button  
           onClick = {() => setCounter2(counter2 + 1 )} 
           style = {{
            marginRight: "1rem",
            marginTop: ".1rem",
            background: "#cadefc",
            borderRadius: ".6rem",
            color: '#cca8e9',
            fontWeight: "bolder",
            fontSize: 18
           }}
           > 
           +1
           </button>
           <button onClick = {() => setCounter2(counter2 - 1 )}
           style = {{
            marginRight: "1rem",
            marginBottom: "1rem",
            marginTop: ".1rem",
            background: "#cadefc",
            borderRadius: ".6rem",
            color: '#cca8e9',
            fontWeight: "bolder",
            fontSize: 18
           }}>
               -1
            </button>

            </div>
            <div style = {styles}>
           <h1>Cuenta</h1>
           <h2>{counter}</h2>
           <button  
           onClick = {() => setCounter(counter + counter2 )} 
           style = {{
            marginRight: "1rem",
            marginBottom: "1rem",
            marginTop: "2rem",
            background: "#ffffd2",
            borderRadius: ".6rem",
            color: '#ffb6b9',
            fontWeight: "bolder",
            fontSize: 25
           }}
           > 
           Sumar 
           </button>
           <button onClick = {() => setCounter(counter - counter2 )}
           style = {{
            marginRight: "1rem",
            marginBottom: "1rem",
            marginTop: "2rem",
            background: "#ffffd2",
            borderRadius: ".6rem",
            color: '#ffb6b9',
            fontWeight: "bolder",
            fontSize: 25
           }}>
               Restar
            </button>
           <button onClick = {() => setCounter(0)}
           style = {{
            marginRight: "1rem",
            marginBottom: "1rem",
            marginTop: "2rem",
            background: "#ffffd2",
            borderRadius: ".6rem",
            color: '#ffb6b9',
            fontWeight: "bolder",
            fontSize: 25
           }}
           >
               Reset
            </button>

        </div>
                        

        </div>
       
    )
}

export default App