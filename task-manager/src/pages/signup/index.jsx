import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'
import { signupUser } from '../../apis/auth'
const dispatch = useDispatch();
const Signup = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({ username: '', password: '', confirmPassword: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({ username: '', password: '', confirmPassword: '' }) 

    const data = new FormData(e.target)
    const username = data.get('username').trim()
    const password = data.get('password').trim()
    const confirmPassword = data.get('confirmPassword').trim()

    let err = false

    if (!username) {
      err = true
      setErrors(prevErrors => ({ ...prevErrors, username: 'Please fill this field' }))
    }
    if (!password) {
      err = true
      setErrors(prevErrors => ({ ...prevErrors, password: 'Please fill this field' }))
    }
    if (!confirmPassword) {
      err = true
      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Please fill this field' }))
    }
    if (password !== confirmPassword) {
      err = true
      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Confirm password not match' }))
    }

    if (err) return

    setLoading(true)
    dispatch(signupUser(credentials)).then((results) => {
      if (results.payload.status === "success") {
        setCredentials({ email: "", password: "" });
        navigate('/home');
      } 
    })
    .catch((error) => {
     
    });
    setLoading(false);
  }

  const handleFieldChange = (fieldName) => (e) => {
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [fieldName]: e.target.value,
    }))
    setErrors(prevErrors => ({ ...prevErrors, [fieldName]: '' })) 
  }

  return (
    <>
      <Box
        component='form'
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='username'
          label='Username'
          name='username'
          disabled={loading}
          error={!!errors.username}
          helperText={errors.username}
          value={credentials.username}
          onChange={handleFieldChange('username')}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          label='Password'
          name='password'
          type='password'
          disabled={loading}
          error={!!errors.password}
          helperText={errors.password}
          value={credentials.password}
          onChange={handleFieldChange('password')}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='confirmPassword'
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          disabled={loading}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          value={credentials.confirmPassword}
          onChange={handleFieldChange('confirmPassword')}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/login'
        sx={{ textTransform: 'none' }}
      >
        Already have an account? Login
      </Button>
    </>
  )
}

export default Signup
