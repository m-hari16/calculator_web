import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { LogoBase } from '../../assets';

const NavbarSection = ({navList}) => {
  const [isMenuOpen, setMenu] = useState(false);

  return(
    <nav className="flex bg-white justify-between items-center w-full px-[3%] h-16 py-1 shadow-md lg:px-[12%] lg:h-24 lg:py-5">
      <NavLink to={'/'}>
        <img
          src={LogoBase}
          alt='logo-calculator'
          className='w-9 h-9 lg:w-10 lg:h-10'
        />
      </NavLink>

      <div className='hidden lg:flex items-center gap-9'>
        {
          navList.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.route}
              className={({isActive}) => (
                `text-sm font-semibold ${isActive ? "text-custom-100" : ""}`
              )}
            >
              {item.label}
            </NavLink>
          ))
        }
      </div>
      <div 
        className="lg:hidden"
      >
        <button
          type='button'
          onClick={() => setMenu(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {
        isMenuOpen && (
          <div className="absolute z-10 top-16 bottom-0 left-0 right-0 bg-custom-400 px-[4%]">
            <div className="flex flex-col space-y-3 pt-4">
              {navList.map((item, idx) => (
                <NavLink
                    key={idx}
                    to={item.route}
                    className={({isActive}) => (
                      `text-base font-medium ${isActive ? "text-custom-100" : ""}`
                    )}
                    onClick={() => setMenu(!isMenuOpen)}
                  >
                    {item.label}
                  </NavLink>
                ))
              }
            </div>
          </div>
        )
      }
    </nav>

  )
}

export default NavbarSection