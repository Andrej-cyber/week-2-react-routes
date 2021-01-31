import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from '../head'
import Header from '../header'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div id="title">Profile</div>
      <div id="username">{user}</div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile