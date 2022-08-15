import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Index"




function Rotas() {
  /*########## !!! website routes !!! ##########*/

  return (
    <body>
      <Routes>
        <Route path="/teslasite/" element={<Home/>} />
      </Routes>
    </body>
  )
}

export default Rotas
