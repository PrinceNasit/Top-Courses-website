import React from 'react'
import "./Spinner.css"

export default function Spinner() {
  return (
    <div className="flex flex-col items-center space-y">
      <div className="spinner">
      </div>
        <p className="items-bgDark text-lg font-semibold">Loading....</p>
      
    </div>
  )
}
