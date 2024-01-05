import NavbarSection from "../components/navbar/NavbarSection"
import { homeNavList } from "../data/navList"

const BaseLayout = ({children}) => {
  return(
    <>
      <NavbarSection
        navList={homeNavList}
      />
      <main className="px-[3%] lg:px-[12%] py-10 lg:py-14">
        {children}
      </main>
    </>
  )
}

export default BaseLayout