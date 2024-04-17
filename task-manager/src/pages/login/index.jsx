import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({ username: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({ username: '', password: '' }) 

    const data = new FormData(e.target)
    const username = data.get('username').trim()
    const password = data.get('password').trim()

    if (!username) {
      setErrors(prevErrors => ({ ...prevErrors, username: 'Please fill this field' }))
    }
    if (!password) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Please fill this field' }))
    }

    if (!username || !password) return

    setLoading(true)

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
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Login
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/signup'
        sx={{ textTransform: 'none' }}
      >
        Don't have an account? Signup
      </Button>
    </>
  )
}

export default Login
