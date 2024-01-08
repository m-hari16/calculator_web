import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout"
import Login from "./pages/Login"
import Calculator from "./pages/Calculator"
import Register from "./pages/Register"
import ProtectedRoute from "./utils/protectedRoute"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route
            path="/"
            element={<BaseLayout children={<Calculator/>}/>}
          />
        </Route>
        <Route
          path="/login"
          element={<BaseLayout children={<Login/>}/>}
        />
        <Route
          path="/register"
          element={<BaseLayout children={<Register/>}/>}
        />
      </Routes>
    </Router>
  )
}

export default App
