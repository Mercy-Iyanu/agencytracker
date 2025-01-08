import React from 'react'

const Analytics = ({ totalSubmissions, newSubmissions }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* Total Submissions */}
      <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded-md shadow">
        <h3 className="text-lg font-bold text-green-600">Total Submissions</h3>
        <p className="text-3xl font-semibold">{totalSubmissions}</p>
      </div>

      {/* New Submissions */}
      <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded-md shadow">
        <h3 className="text-lg font-bold text-green-600">New Submissions</h3>
        <p className="text-3xl font-semibold">{newSubmissions}</p>
      </div>

      {/* Disapproved Submissions */}
      <div className="p-4 bg-red-100 border-l-4 border-red-500 rounded-md shadow">
        <h3 className="text-lg font-bold text-red-600">Disapproved Submissions</h3>
        <p className="text-3xl font-semibold">0</p>
      </div>

      {/* Approved Submissions */}
      <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded-md shadow">
        <h3 className="text-lg font-bold text-green-600">Approved Submissions</h3>
        <p className="text-3xl font-semibold">0</p>
      </div>
    </div>
  )
}

export default Analytics