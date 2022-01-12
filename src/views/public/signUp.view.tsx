import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Container, Message } from 'semantic-ui-react'
import SignupForm, { SignUpFormValues } from '../../components/signUp/index'
import API from '../../dataLayer/api'

function SignUpView() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleSignUp = async (formValues: SignUpFormValues)  => {
    setLoading(true)
    const { data, status } = await API.signUp(formValues);
    setLoading(false);
    if(status != 'success') {
      // tell user
      setSuccess(false)
    } else {
      setSuccess(true);
      setTimeout(navigate, 1000, '/login')
    }
  }
  

  return (
    <Container >
      {loading ? "Signing up..." : null}
      {
       success && <Message succuess>Thank you for Signing up</Message> 
      }
      <SignupForm onSuccess={handleSignUp} />
    </Container>
  )
}

export default SignUpView
