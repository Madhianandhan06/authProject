import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../validation/authSchemas'


const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  })

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
                {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" 
                placeholder='your name...' 
                {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input type="password" 
                placeholder='.....' 
                {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

            <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" 
                placeholder='.....' 
                {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type='submit'>Sigup</button>
      </form>

    </div>
  )
}

export default Register