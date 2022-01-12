
import { SignUpFormValues } from "../components/signUp"

type APIResponse = {
  data?: any; 
  status: string
}


export default class API {

  static signUp (formValues: SignUpFormValues): Promise<APIResponse> {
    const { password, confirmPassword, ...user} = formValues;
    const hashedPassword = btoa(`${user.username}${password}`)
    window.localStorage.setItem(hashedPassword, JSON.stringify(user))
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: user,
          status: 'success'
        })
      }, 1500)
    }) 
  };

  static login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      const hashedPassword = btoa(`${username}${password}`)
      const userJSON = window.localStorage.getItem(hashedPassword)

      if(userJSON){
        const user = JSON.parse(userJSON)
        if(user.username === username){
          setTimeout(() => {
            resolve({
              data: {
                firstName: "Kanye",
                lastName: 'West',
                email: 'kanye.west@gmail.com'
    
              },
              status: 'success'
            })
          }, 1500)
          return
        }
      }
      setTimeout(() => {
        resolve({
          data:{
            message: 'Could not find user'
          },
          status: 'error'
        })
      }, 1500);
    }) 
  }
}











