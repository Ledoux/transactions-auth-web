import React from 'react'
import { Button,
  Link
} from 'transactions-interface-web'
import { SignForm as withState } from 'transactions-user-state'

const SignForm = ({ data,
  email,
  endpoint,
  firstName,
  handleChangeValue,
  handleClickCheckValue,
  lastName,
  message,
  password,
  returnMessage,
  returnTo,
  signPath
}) => {
  const isSignup = endpoint === 'signup'
  const isSignin = endpoint === 'signin'
  return (
    <form className='sign-form p3'
      method='post'
      action={`${signPath}/${endpoint}`}
    >
      {
        isSignup && (
          <div className='sign-form__entry'>
            <p className='sign-form__entry__field'>
              First Name
            </p>
            <input
              className='sign-form__entry__input field'
              name='firstName'
              type='text'
              value={firstName}
              onChange={event => handleChangeValue(event, 'firstName')}
              required
            />
          </div>
        )
      }
      {
        isSignup && (
          <div className='sign-form__entry'>
            <p className='sign-form__entry__field'>
              Last Name
            </p>
            <input
              className='sign-form__entry__input field'
              name='lastName'
              type='text'
              value={lastName}
              onChange={event => handleChangeValue(event, 'lastName')}
              required
            />
          </div>
        )
      }
      <div className='sign-form__entry'>
        <p className='sign-form__entry__field'>
          Email
        </p>
        <input
          className='sign-form__entry__input field'
          name='email'
          type='text'
          value={email}
          onChange={event => handleChangeValue(event, 'email')}
          required
        />
      </div>
      <div className='sign-form__entry'>
        <p className='sign-form__entry__field'>
          Password
        </p>
        <input
          className='sign-form__entry__input mb1'
          name='password'
          type='password'
          value={password}
          onChange={event => handleChangeValue(event, 'password')}
          required
        />
        {
          isSignin && (
            <Link href={`/forgot-password${email ? `?email=${encodeURIComponent(email)}` : ''}`} >
              Forgot Password ?
            </Link>
          )
        }
      </div>
      <div className='sign-form__message center'>
        { message }
      </div>
      <div className='sign-form__submit center'>
        <Button
          className='button button--alive button--cta'
          type='submit'
        >
          { isSignin && 'Sign In' }
          { isSignup && 'Sign Up' }
        </Button>
      </div>
      <div className='sign-form__option center'>
        {
          isSignin && (
            <div className='center'>
              No account?{' '}
              <Link
                className='link'
                href='/signup'
              >
                Sign up
              </Link>
            </div>
          )
        }
        {
          isSignup && (
            <div className='center'>
              Already have an account?{' '}
              <Link
                href={`/signin${returnTo ? '?returnTo=' + returnTo : ''}`}
              >
                Sign In
              </Link>
            </div>
          )
        }
      </div>
    </form>
  )
}

export default withState(SignForm)
