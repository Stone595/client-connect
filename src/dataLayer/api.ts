
export default class API {
  static login(username: string, password: string) {
    return new Promise((resolve, reject) => {
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
    }) 
  }
}











