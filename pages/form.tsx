import Layout from '@components/layout'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { Box, Button, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useReducer, useState } from 'react'
import FormResults from '../components/table'

const formInitialState: FormInterface = {
  firstName: {
    value: '',
    valid: true,
    error: 'First name must be at least 2 characters'
  },
  lastName: {
    value: '',
    valid: true,
    error: 'Last name must be at least 2 characters'
  },
  email: {
    value: '',
    valid: true,
    error: 'Add a valid email!'
  },
  password: {
    value: '',
    valid: true,
    error: 'Add a valid password!'
  }
}

interface FormInterface {
  [key: string]: {
    value: string
    valid: boolean
    error: string
  }
}

const types = {
  FIRSTNAME: 'firstName',
  LASTNAME: 'lastName',
  EMAIL: 'email',
  PASSWORD: 'password'
}

const reducer = (state: any, action: FormInterface) => {
  const key = Object.keys(action)[0]

  switch (key) {
    case types.FIRSTNAME:
      return {
        ...state,
        firstName: {
          value: action.firstName.value,
          valid: action.firstName.valid,
          error: action.firstName.error
        }
      }
    case types.LASTNAME:
      return {
        ...state,
        lastName: {
          value: action.lastName.value,
          valid: action.lastName.valid,
          error: action.lastName.error
        }
      }
    case types.EMAIL:
      return {
        ...state,
        email: {
          value: action.email.value,
          valid: action.email.valid,
          error: action.email.error
        }
      }
    case types.PASSWORD:
      return {
        ...state,
        password: {
          value: action.password.value,
          valid: action.password.valid,
          error: action.password.error
        }
      }
    default:
      return {
        ...state
      }
  }
}

const Form: NextPage = () => {
  const [showResults, setShowResults] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)
  const [inputValues, dispatchFormValue] = useReducer(reducer, formInitialState)
  const { firstName, lastName, email, password } = inputValues

  const reducerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const valid = e.target.checkValidity()
    const error = formInitialState[name].error

    dispatchFormValue({
      [name]: {
        value,
        valid,
        error
      }
    })
  }

  useEffect(() => {
    console.log('inputValues :', inputValues)
  }, [inputValues])

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowResults(true)
  }

  return (
    <Layout>
      <Box p={8}>
        <Typography variant="h4" component="h1" mb={2}>
          useReducer used for form data
        </Typography>
        <Box
          component="form"
          onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
            setFormIsValid(e.currentTarget.checkValidity())
          }
          onSubmit={onFormSubmit}
          sx={{ '& .MuiFormControl-fullWidth': { mb: 3 } }}>
          <>
            <TextField
              error={!firstName.valid}
              name="firstName"
              value={firstName.value}
              onChange={reducerInputChange}
              required
              fullWidth
              label="First name"
              helperText={!firstName.valid ? firstName.error : ''}
              inputProps={{ minLength: 2 }}
            />
            <TextField
              error={!lastName.valid}
              fullWidth
              required
              label="Last name"
              name="lastName"
              value={lastName.value}
              onChange={reducerInputChange}
              helperText={!lastName.valid ? lastName.error : ''}
              inputProps={{ minLength: 2 }}
            />
            <TextField
              error={!email.valid}
              fullWidth
              required
              name="email"
              value={email.value}
              onChange={reducerInputChange}
              label="Email"
              type="email"
              helperText={!email.valid ? email.error : ''}
            />
            <TextField
              error={!password.valid}
              fullWidth
              required
              name="password"
              value={password.value}
              onChange={reducerInputChange}
              label="Password"
              type="password"
              helperText={!password.valid ? password.error : ''}
              inputProps={{ minLength: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!formIsValid}
              endIcon={<ArrowCircleRightOutlinedIcon />}>
              Register
            </Button>
          </>
        </Box>
        {showResults && <FormResults form={inputValues} />}
      </Box>
    </Layout>
  )
}

export default Form
