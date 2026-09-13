import React from 'react'
import { useForm } from 'react-hook-form'


const Login = () => {

  const { register, handleSubmit, formState: {errors} } = useForm()

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data);
  }
  return (
    <div>
      <div>
        <h1>Welcome back</h1>
        <p>Log into your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label htmlFor="">Name</label>
        <input type="text" 
                placeholder='your name...' 
                {
                  ...register('name',{
                    required:'name is required',
                  })
                }
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" 
                placeholder='your name...' 
                {
                  ...register('email',{
                    required:'email is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'enter a valid email address'
                    }
                  })
                }
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input type="password" 
                placeholder='.....' 
                {
                  ...register('password',{
                    required: 'password is required',
                    minLength: {
                      value: 8,
                      message: 'password must be 8 characters'
                    }
                  })
                }
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

            <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" 
                placeholder='.....' 
                {
                  ...register('password',{
                    required: 'password is required',
                    minLength: {
                      value: 8,
                      message: 'password is not matching'
                    }
                  })
                }
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type='submit'>Sigup</button>
      </form>

    </div>
  )
}

export default Login