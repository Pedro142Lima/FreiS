import { BrowserRouter, Routes,Route } from "react-router-dom";
import Sobre from "./pages/sobre";
import Inicial from "./pages/ini";
import Ex1 from "./pages/ex011";
import React from 'react';
import Ex2 from "./pages/ex022";
import Ex3 from "./pages/ex033";


export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicial />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path= '/inicial' element={<Inicial/>}/>
                <Route path ='/ex1' element= {<Ex1 />}/>
                <Route path ='/ex2' element= {<Ex2 />}/>
                <Route path = '/ex3' element= {<Ex3 />}/>
                
           
            </Routes>
        </BrowserRouter>
    );
}
