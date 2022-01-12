import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'


export type SignUpFormValues = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;

}
type LoginProps = {
  onSuccess: (formValues: SignUpFormValues) => void
  onError?: (errors: any) => void;
}
function Login({onSuccess, onError}: LoginProps) {
  
  const {handleSubmit, register } = useForm<SignUpFormValues>({
    defaultValues: {}
  })

  return (

      <Form onSubmit={handleSubmit(onSuccess)}>
        <Form.Field>
          <label>Username/Email</label>
          <input {...register('username')} placeholder='Username/Email'/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input {...register('email')}placeholder='Email'/>
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input {...register('firstName')} placeholder='First Name'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input {...register('password')} type={'password'} placeholder='Password'/>
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input {...register('confirmPassword')} type={'password'} placeholder='Confirm Password'/>
        </Form.Field>
        <Button type="submit" >Sign up</Button>
      </Form>

  )
}


export default Login

