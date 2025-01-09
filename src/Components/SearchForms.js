import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";

const SearchForms = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        agencyName: "",
        agencyEmail: "",
        agencyAddress: "",
        status: "All Submissions",
        iataStatus: "All",
        startDate: "",
        endDate: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSearch = (e) => {
        e.preventDefault();
        onSearch(filters);
      };

  return (
    <form
      className="bg-white p-4 rounded-lg shadow-md space-y-4"
      onSubmit={handleSearch}
    >
      <h3 className="text-xl font-bold mb-2">Search Submissions</h3>

      {/* Agency Name */}
      <div>
        <label htmlFor="agencyName" className="block font-semibold mb-1">
          Agency Name
        </label>
        <input
          type="text"
          id="agencyName"
          name="agencyName"
          placeholder="Enter agency name"
          value={filters.agencyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Agency Email */}
      <div>
        <label htmlFor="agencyEmail" className="block font-semibold mb-1">
          Agency Email
        </label>
        <input
          type="email"
          id="agencyEmail"
          name="agencyEmail"
          placeholder="Enter agency email"
          value={filters.agencyEmail}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Agency Address */}
      <div>
        <label htmlFor="agencyAddress" className="block font-semibold mb-1">
          Agency Address
        </label>
        <input
          type="text"
          id="agencyAddress"
          name="agencyAddress"
          placeholder="Enter agency address"
          value={filters.agencyAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Filter by Status */}
      <div>
        <label htmlFor="status" className="block font-semibold mb-1">
          Filter by Status
        </label>
        <select
          id="status"
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option>All Submissions</option>
          <option>New Submissions</option>
          <option>Disapproved Submissions</option>
          <option>Approved Submissions</option>
        </select>
      </div>

      {/* Filter by IATA */}
      <div>
        <label htmlFor="iataStatus" className="block font-semibold mb-1">
          Filter by IATA
        </label>
        <select
          id="iataStatus"
          name="iataStatus"
          value={filters.iataStatus}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option>All</option>
          <option>IATA</option>
          <option>Non-IATA</option>
        </select>
      </div>

      {/* Filter by Registration Date */}
      <div>
        <label className="block font-semibold mb-1">Filter by Date Range</label>
        <div className="flex gap-2">
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="text-right">
        <button
          type="submit"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          <FaSearch className="mr-2" />
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForms