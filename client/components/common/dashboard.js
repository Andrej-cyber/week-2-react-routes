import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../head'
import Header from '../header'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div id="title">Dashboard</div>
      <div>
        <Link to="/dashboard/profile/4bfc6a08-d00d-4e67-acef-c42f5ebd6bfa">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
