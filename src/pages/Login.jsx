import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../data/api";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postData = await login(formData)

    if (postData.accessToken) {
      localStorage.setItem('token', postData.accessToken)

      navigate("/")
    }
  }

  return (
    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-sm py-10 px-16'>
      <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
        Log in
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className={`w-full p-2 border border-gray-300 rounded-md outline-none text-sm mb-6`}
            id='email'
            placeholder='Your Email'
            required
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className='flex justify-center items-center mt-6'>
          <button
            type="submit"
            className={`bg-green-600 py-2 px-4 text-sm text-white rounded hover:bg-green-800`}
          >
            Login
          </button>
        </div>
      </form>
      
      <p className='text-sm font-normal mt-8 mb-6 text-center'>
        Don't have an account? <NavLink to={"/register"} className={"text-green-600 font-semibold"}>Register</NavLink>
      </p>
    </div>
  )
}

export default Login;