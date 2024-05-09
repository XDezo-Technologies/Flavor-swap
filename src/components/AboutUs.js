import React from 'react'
import logo from "../assets/logo-white.png"

export const AboutUs = () => {
  return (
    <div>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to our recipe sharing platform! Here's a little bit about who we are and what we do.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <img className="mx-auto h-64 w-auto rounded-lg shadow-lg" src={logo} alt="About Us" />
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  Our mission is to create a community-driven platform where food lovers can share their favorite recipes and discover new ones.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-600">
                  We envision a world where everyone has access to delicious and nutritious recipes from around the globe.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
                <p className="mt-2 text-gray-600">
                  Have questions or suggestions? Feel free to contact us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
