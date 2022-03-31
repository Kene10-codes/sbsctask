import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import * as yup from 'yup'
import './login.css'


//check if it's a strong password with minimum of 8 characters
const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  password: yup.string().min(8, 'Please must not be less than 8 characters').required('Password is required')
})

const Login = () => {
  const [success, setSuccess] = useState(null)
  const [shownPassword, setIsShowPassword] = useState(false)

  const togglePassword = () => {
    setIsShowPassword(!shownPassword)
  }

    const onSubmit = async (values) => {
      const { email, password } = values
      const data = { email, password }

      const response = await axios
      .post('https://reqres.in/api/login', data)
      .catch(err => {
        if (err && err.response) console.log('Error: ', err)    
      })  

        if (response && response.data) {
          setSuccess(response.data)
      }
    }

    

    const formik = useFormik({ initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })

  console.log("errors", formik.errors)


  return (
    <div className='login__container'>
      <span className='login__success'>{success ? success : ''}</span>
      <form onSubmit={formik.handleSubmit} className='login__form'>
        <h2 className="form__header">Log In</h2>
         <div className="form__input-container">
          <input 
              className='form__input-email'
              placeholder='Enter Email'
              value={formik.values.email}
              onChange={formik.handleChange} 
              name='email'
              onBlur={formik.handleBlur}
            />
            <span className="form__errors">
              {formik.errors.email 
              ? formik.errors.email 
              : ''}
            </span>
         </div>
         <div className="form__input-container-password">
            <input 
                className='form__input-password'
                placeholder='Enter Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                name='password'
                onBlur={formik.handleBlur}
                type={shownPassword ? "text" : "password"}
              />
              {shownPassword
               ? <FaEyeSlash className="form__password-icon" onClick={togglePassword} size={12} /> 
               : <FaEye className="form__password-icon_two" onClick={togglePassword} size={12}  /> 
              }
              <span className="form__errors">
                {formik.errors.password 
                ? formik.errors.password 
                : ''}
              </span>
         </div>
          
          <button type="submit" className="login__form-submit">Log in</button>
      </form>
    </div>
  )
}

export default Login