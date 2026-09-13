import { z } from 'zod'

const credentialsSchema = z.object({
  name: z.string().trim().min(1, 'name is required'),
  email: z.string().trim().email('enter a valid email address'),
  password: z.string().min(8, 'password must be 8 characters'),
})

export const loginSchema = credentialsSchema

export const registerSchema = credentialsSchema
  .extend({
    confirmPassword: z.string().min(1, 'please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'passwords do not match',
  })
