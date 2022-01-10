import { useState } from "react"

export function useForm<T>(defaultValues: T, onSuccess: (value: T) => void) {
  const [formValues, setFormValues] = useState<T>(defaultValues);

  return {
    formProps: {
      onSubmit: () => {
        onSuccess(formValues)
      }
    },
    getFieldProps: (fieldName: string) => {
      return {
        onChange: ({target: {name, value}}: any) => {
          setFormValues({...formValues, [name]: value})
        },
        name: fieldName
      }
    }
  }
}









