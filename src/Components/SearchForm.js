import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    agencyName: '',
    email: '',
    address: '',
    status: '',
    iataStatus: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 py-4 space-y-4">
        <h3>Form Search</h3>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="agencyName"
          value={filters.agencyName}
          onChange={handleChange}
          placeholder="Search by Agency Name"
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="email"
          value={filters.email}
          onChange={handleChange}
          placeholder="Search by Email"
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="address"
          value={filters.address}
          onChange={handleChange}
          placeholder="Search by Address"
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Filter by Status</option>
          <option value="all">All Submissions</option>
          <option value="new">New Submissions</option>
          <option value="disapproved">Disapproved Submissions</option>
          <option value="approved">Approved Submissions</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <select
          name="iataStatus"
          value={filters.iataStatus}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Filter by IATA Status</option>
          <option value="IATA">IATA</option>
          <option value="Non-IATA">Non-IATA</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
        <span>-</span>
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;