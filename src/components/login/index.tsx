import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from '../../hooks/useForm'


export type LoginFormValues = {
  username?: string;
  password?: string; 
}
type LoginProps = {
  onSuccess: (formValues: LoginFormValues) => void
  onError?: (errors: any) => void;
}
function Login({onSuccess, onError}: LoginProps) {
  
  const {formProps, getFieldProps } = useForm<LoginFormValues>({}, onSuccess)

  return (

      <Form {...formProps}>
        <Form.Field>
          <label>Username/Email</label>
          <input {...getFieldProps('username')} placeholder='Username/Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input {...getFieldProps('password')} type={'password'} placeholder='Password'/>
        </Form.Field>
        <Button type="submit" >Sign in</Button>
      </Form>

  )
}
function Login2({onSuccess, onError}: LoginProps) {
  
  const [formValues, setFormValues] = useState<LoginFormValues>({})
  const handleSubmit = () => {
    onSuccess(formValues);
  }

  const handleChange = ({target:{value, name}}: any) => {
    setFormValues({...formValues, [name]: value})
  }

  return (

      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username/Email</label>
          <input onChange={handleChange} name="username" placeholder='Username/Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={handleChange} name="password" type={'password'} placeholder='Password'/>
        </Form.Field>
        <Button type="submit" >Sign in</Button>
      </Form>

  )
}

export default Login

