import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'


export type LoginFormValues = {
  username?: string;
  password?: string; 
}

type LoginProps = {
  onSuccess: (formValues: LoginFormValues) => void
  onError?: (errors: any) => void;
}

function Login({onSuccess}: LoginProps) {
  
  const {handleSubmit, register } = useForm<LoginFormValues>({mode: 'onSubmit', defaultValues: {}})

  return (

      <Form onSubmit={handleSubmit(onSuccess)}>
        <Form.Field>
          <label>Username/Email</label>
          <input {...register('username')} placeholder='Username/Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input {...register('password')} type={'password'} placeholder='Password'/>
        </Form.Field>
        <Button type="submit" >Sign in</Button>
      </Form>

  )
}


export default Login

