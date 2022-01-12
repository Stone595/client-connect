import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import Login from '../../components/login'
import API from '../../dataLayer/api'

type LoginFormValues = {
  username?: string;
  password?: string; 
}

function LoginView() {

  const [loading, setLoading] = useState<boolean>(false); 

  const handleSignIn = async (formValue: LoginFormValues) => {
    console.log("Form Values", formValue);
    const {username, password} = formValue;

    if(!username || !password){
      alert("Nope!")
      return 
    }; 

    setLoading(true);
    try{
      const result = await API.login(username, password)
      console.log(result)
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  };

  return (
    <Container style={{width: 400, margin: 48}}>
      <Login onSuccess={handleSignIn} onError={function (errors: any): void {
        throw new Error('Function not implemented.')
      } }/>
      {loading ? <span>Loading...</span> : null}
    </Container>
  )
}

export default LoginView
