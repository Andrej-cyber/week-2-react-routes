import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../head'
import Header from '../header'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div id="title">Main</div>
      <div>
        <Link to="/dashboard/profile/4bfc6a08-d00d-4e67-acef-c42f5ebd6bfa">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main