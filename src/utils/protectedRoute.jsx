import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const ProtectedRoute = () => {
  const navigate = useNavigate()

  const token = !!localStorage.getItem('token')

  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  },[])


  return(
    <>
      <Outlet/>
    </>
  )
}

export default ProtectedRoute