import React, {useState} from 'react'
import { FaBuilding, FaMapMarkerAlt, FaMapMarkedAlt, FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

const AgencyForm = ({ onAddAgent }) => {
    const [formData, setFormData] = useState({
        agencyName: '',
        iataStatus: '',
        locationState: '',
        address: '',
        email: '',
        telephone: '',
        iataNo: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFormData = {
          ...formData,
          registrationDate: new Date().toISOString(),
        };
        onAddAgent(updatedFormData);
        setFormData({
          agencyName: '',
          iataStatus: '',
          locationState: '',
          address: '',
          email: '',
          telephone: '',
          iataNo: ''
        });
      };
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 py-4 space-y-4">
      <h3>Agency Form</h3>
      <div className="flex items-center space-x-2">
        <FaBuilding className="text-gray-600" />
        <input
          type="text"
          name="agencyName"
          value={formData.agencyName}
          onChange={handleChange}
          placeholder="Agency Name"
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-2">
        <FaIdBadge className="text-gray-600" />
        <select
          name="iataStatus"
          value={formData.iataStatus}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">IATA/Non-IATA</option>
          <option value="IATA">IATA</option>
          <option value="Non-IATA">Non-IATA</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <FaIdBadge className="text-gray-600" />
        <input
          type="text"
          name="iataNo"
          value={formData.iataNo}
          onChange={handleChange}
          placeholder="IATA No"
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-gray-600" />
        <input
          type="text"
          name="locationState"
          value={formData.locationState}
          onChange={handleChange}
          placeholder="Location State"
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkedAlt className="text-gray-500" />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-gray-600" />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-2">
        <FaPhone className="text-gray-600" />
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Telephone"
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Submit
      </button>
    </form>
  )
}

export default AgencyForm