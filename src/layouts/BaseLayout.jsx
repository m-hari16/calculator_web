import { useNavigate } from "react-router-dom"
import NavbarSection from "../components/navbar/NavbarSection"
import { logout } from "../data/api"

const BaseLayout = ({children}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = async () => {
    const toApi = await logout({token: token})
    if(toApi.success) {
      localStorage.removeItem(token)
      navigate("/login")
    }
  }

  return(
    <>
      <NavbarSection handleLogout={handleLogout}/>
      <main className="px-[3%] lg:px-[12%] py-10 lg:py-14">
        {children}
      </main>
    </>
  )
}

export default BaseLayout