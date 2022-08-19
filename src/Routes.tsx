import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Index"




function Rotas() {
  /*########## !!! website routes !!! ##########*/

  return (
    <Routes>
      <Route path="/teslasite/" element={<Home/>} />
    </Routes>
  )
}

export default Rotas
