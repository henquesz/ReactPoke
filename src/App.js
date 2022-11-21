
import './App.css';

import { Routes, Route } from 'react-router-dom'
import Initial from './components/Initial/Initial';
import CadOne from './components/CadOne/CadOne';
import CadTwo from './components/CadTwo/CadTwo';
import { Home } from './components/Pages/Home';

//Declaração de rotas para navegação da aplicação.
function App() {
  return (
    <>
      <header>
        
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Initial></Initial>}></Route>
          <Route path='/initial' element={<Initial></Initial>}></Route>
          <Route path='/CadastroOne' element={<CadOne></CadOne>}></Route>
          <Route path='/CadastroTwo' element={<CadTwo></CadTwo>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
