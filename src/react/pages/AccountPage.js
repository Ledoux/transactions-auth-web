import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AccountPage as withState } from 'transactions-user-state'
import { Avatar,
  Button,
  Uploader
} from 'transactions-interface-web'

import LogoutLink from '../components/LogoutLink'

const AccountPage = props => {
  const {
    active,
    api,
    email,
    dispatch,
    fields,
    firstName,
    id,
    lastName,
    request,
    signPath,
    showModalWarning,
    state
  } = props
  const { isUpload } = state
  return (
    <main className='page account-page main'>
      <div className='account-page__title'>
        {firstName} {lastName} <LogoutLink
          className='logout-link account-page__logout'
          signPath={api.signPath}
        />
      </div>
      <div className='account-page__control'>
        {
          isUpload && (
            <Button className='button account-page__control__button'
              onClick={() => this.setState({ isUpload: false })}
            >
              Cancel
            </Button>
          )
        }
      </div>
      <div className='account-page__picture' >
        <Button className='button account-page__picture__button'
          onClick={() => this.setState({ isUpload: true })}
        >
          {
            isUpload
            ? (
              <Uploader className='uploader account-page__picture__button--uploader'
                fileName={`${firstName}-${lastName}`}
                isWithDate
                onUpload={json => {
                  this.setState({ isUpload: false })
                  json.url && request('PUT', [{
                    collectionName: 'users',
                    query: { id },
                    update: { 'local.imageUrl': json.url }
                  }])
                }}>
                <p className='account-page__picture__button--uploader__text'>
                  Drop an image or click to select a file to upload
                </p>
              </Uploader>
            )
            : <Avatar
              className='avatar account-page__picture__button--avatar'
              id={id} />
          }
        </Button>
      </div>
      <div className='account-page__upload'>

      </div>
      {!active && (
        <div className='account-page__activation'>
          <p className='account-page__activation__title'>
            We see that your account is not yet activated. Please click
            on the button below to have a new activation mail at {email}
          </p>
          <Button className='button'
            onClick={() => {
              apiFetch(`${signPath}/ask-activate-account`)
              showModalWarning('happy',
                `We sent you a new activation email at ${email}`)
            }}>
            Send Mail
          </Button>
        </div>
      )}
      <div className='account-page__setting'>
        {
          fields.map(({key, name}, index) =>
            (
              <div key={index} className='account-page__setting__field'>
                <div className='account-page__setting__field__key col col-5'>
                  {name}
                </div>
                <div className='account-page__setting__field__value col col-5'>
                  {props[key]}
                </div>
              </div>
            )
          )
        }
      </div>
    </main>
  )
}

export default withState(AccountPage)
