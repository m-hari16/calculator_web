import NavbarSection from "../components/navbar/NavbarSection"

const BaseLayout = ({children}) => {
  return(
    <>
      <NavbarSection/>
      <main className="px-[3%] lg:px-[12%] py-10 lg:py-14">
        {children}
      </main>
    </>
  )
}

export default BaseLayout