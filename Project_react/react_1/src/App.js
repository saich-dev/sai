import React, { useState } from 'react';
import List from './components/component_2/List'; 
import Counter from './components/Counter';
import { themeContext } from './components/component_2/themecontext';
import ThemeComponent from './components/component_2/Theme';



const tittle = 'React';

const list =[
    {
        name:'sai',
        age: 25
    },

    {
        name:'kumar',
        age: 30
    }
]


function App(){

const [theme,settheme] = useState('Light');
const ToggleEvent = ()=>{
    settheme((prevtheme)=>(prevtheme === 'Light' ? 'Dark':'Light'));
}






   const handleclick = event =>{
    console.log("event",event);
    console.log("event","Hello world");
   }
    return(



        <>
<button onClick={handleclick}> Sumbit</button>


        <div>
            <h1> Hello {tittle}</h1>
            <List data = {list}/>
            <Counter/>
            {
                list.map(function(item){
                    return <div> {item.name}</div> 
                })
            }
            {
                list.map(function(item){
                    return <div> {item.age}</div> 
                })
            }
        </div>
        <div>
        i AM new to React js 
        </div>
        <themeContext.Provider value ={theme}>
            <div>
                <button onClick={ToggleEvent}>
                    Toggle
                </button>
            </div>
            <ThemeComponent/>
        </themeContext.Provider>
        
        </>
    )

}



export default App;