import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SignupForm } from '../components/SignupForm'

export const Signup = () => {
  return (
    <div>
        <Navbar />
        <SignupForm />
        <Footer />
    </div>
  )
}
