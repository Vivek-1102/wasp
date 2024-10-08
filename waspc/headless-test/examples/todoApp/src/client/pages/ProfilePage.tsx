import React, { useEffect } from 'react'
import { type AuthUser as User } from 'wasp/auth'
import { Link } from 'wasp/client/router'
import { api } from 'wasp/client/api'

async function fetchCustomRoute() {
  const res = await api.get('/foo/bar')
  console.log(res.data)
}

export const ProfilePage = ({ user }: { user: User }) => {
  useEffect(() => {
    fetchCustomRoute()
  }, [])

  return (
    <>
      <h2>Profile page</h2>
      <div>
        Hello <strong>{user.getFirstProviderUserId()}</strong>! Your status is{' '}
        <strong>
          {user.identities.email?.isEmailVerified ? 'verfied' : 'unverified'}
        </strong>
        .
      </div>
      <div>
        Value of <code>user.isOnAfterSignupHookCalled</code> is{' '}
        <strong>{user.isOnAfterSignupHookCalled ? 'true' : 'false'}</strong>.
      </div>
      <div>
        Value of <code>user.isOnAfterLoginHookCalled</code> is{' '}
        <strong>{user.isOnAfterLoginHookCalled ? 'true' : 'false'}</strong>.
      </div>
      <br />
      <Link to="/">Go to dashboard</Link>
    </>
  )
}
