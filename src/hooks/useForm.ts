import { useState } from "react"


type UseFormArgs<T> = {
  defaultValues?: T,
  onSuccess:(values: T) => void,
  onError: (errors: any) => void
}


export function useForm<T>({defaultValues, onSuccess}: UseFormArgs<T>) {
  const [formValues, setFormValues] = useState<T | undefined>(defaultValues);

  return {
    formProps: {
      onSubmit: () => {
        if(!formValues){
          return
        }
        onSuccess(formValues)
      }
    },
    getFieldProps: (fieldName: string) => {
      if(!formValues){
        return
      }
      return {
        onChange: ({target: {name, value}}: any) => {
          setFormValues({...formValues, [name]: value})
        },
        name: fieldName
      }
    }
  }
}









