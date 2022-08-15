import { Route, Routes } from "react-router-dom"

function Rotas() {
  /*########## !!! website routes !!! ##########*/

  return (
    <body>
      <Routes>
        <Route path="/teslasite/" element={<h1>Helo Isaac</h1>} />
      </Routes>
    </body>
  )
}

export default Rotas
