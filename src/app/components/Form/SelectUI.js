import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import {useField, useFormikContext} from 'formik'
import FormHelperText from '@mui/material/FormHelperText'
import { InputLabel } from '@mui/material'

const SelectUI = ({
  name,
  label,
  options,
  ...otherProps
}) => {
  const {setFieldValue} = useFormikContext()
  const [field, meta] = useField(name)
   const handleSelect = evt => {
     const {value} = evt.target
     setFieldValue(name, value)
   }
  const configSelect = {
    ...field,
    ...otherProps,
    fullWidth: true,
    defaultValue: "",
    onChange: handleSelect,
    sx: {
      color: 'var(--green)',
      backgroundColor: 'var(--white)', 
    }
  }

  if(meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helpertext = meta.error;
  }
  return (
      <FormControl fullWidth>
        <InputLabel style={{color: 'var(--green)'}}>{label}</InputLabel>
        <Select id={name} {...configSelect}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
              {option}
          </MenuItem>
        ))}
        </Select>
        <FormHelperText>{configSelect.helpertext}</FormHelperText>
      </FormControl>
   )
}
 
export default SelectUI