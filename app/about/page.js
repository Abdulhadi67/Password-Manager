import React from 'react'
import Back from '../components/Back'

const page = () => {
  return (
    <div>
     <Back/>
    <div className=" text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto max-h-screen overflow-x-hidden overflow-y-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-amber-300">About&nbsp; Pass-Op</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg mb-4">
            <span className="font-semibold text-blue-500">Pass-Op</span> is your trusted companion for managing passwords and sensitive credentials. Designed for simplicity, security, and peace of mind, our platform helps you stay safe in a digital world.
          </p>

          <p className="text-lg mb-4">
            With end-to-end encryption, zero-knowledge architecture, and intuitive design, SecureVault ensures your data is protected and accessible—only to you. Whether you are a tech-savvy professional or just getting started, we make password management effortless.
          </p>

          <p className="text-lg mb-4">
            Our mission is to empower users with tools that protect their digital identity without compromising usability. Join thousands who trust Pass-OP to safeguard what matters most.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose Pass-Op?</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Military-grade encryption with zero-knowledge protocols</li>
              <li>Cross-platform access with seamless sync</li>
              <li>Biometric login and multi-factor authentication</li>
              <li>Secure notes and vault sharing for teams</li>
              <li>Open-source transparency and regular audits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default page
