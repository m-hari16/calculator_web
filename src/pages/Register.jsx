import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-sm py-10 px-16'>
      <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
        Register
      </h1>

      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className={`w-full p-2 border border-gray-300 rounded-md outline-none text-sm mb-6`}
            id='name'
            placeholder='Your Name'
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className={`w-full p-2 border border-gray-300 rounded-md outline-none text-sm mb-6`}
            id='email'
            placeholder='Your Email'
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className={`w-full p-2 border border-gray-300 rounded-md outline-none text-sm mb-6`}
            id='password'
            placeholder='Your Password'
            required
          />
        </div>

        <div className='flex justify-center items-center mt-6'>
          <button
            className={`bg-green-600 py-2 px-4 text-sm text-white rounded hover:bg-green-800`}
          >
            Create Account
          </button>
        </div>
      </form>
      <p className='text-sm font-normal mt-8 mb-6 text-center'>
        Already have an account? <NavLink to={"/login"} className={"text-green-600 font-semibold"}>Login</NavLink>
      </p>
    </div>
  )
}

export default Register;