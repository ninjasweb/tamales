import { TextField } from "@mui/material"
import { useField } from "formik"

const TextFieldUI = ({name, ...otherProps}) => {
  const [field, meta] = useField(name)
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    InputProps: {
      style: { 
        color: 'var(--green)',
        backgroundColor: 'var(--white)'
      }
    },
  }
  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
}
  return (
    <>
      <TextField color="secondary" {...configTextField} />
    </>
  )
}
 
export default TextFieldUI