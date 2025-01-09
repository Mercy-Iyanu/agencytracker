import React, {useState} from 'react';
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const SubmittedFormTable = ({ agents }) => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const toggleDropdown = (index) => {
      setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const exportToCSV = () => {
        const csvData = agents.map((entry, index) => ({
          sn: index + 1,
          "Agency Name": entry.agencyName,
          "IATA/Non-IATA": entry.iataStatus,
          Email: entry.email,
          Telephone: entry.telephone,
          Address: entry.address,
          "Location State": entry.locationState,
          "Registered Date": new Date().toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
        }));
    
        const csv = Papa.unparse(csvData);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "submissions.csv");
      };

  return (
    <div className="overflow-x-auto p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Travel Agents List</h2>
            <button
            onClick={exportToCSV}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
            <FaDownload className="mr-2" />
            Export Submissions
            </button>
        </div>
      <table className="w-full text-left border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-gray-200">SN</th>
            <th className="p-2 border border-gray-200">IATA</th>
            <th className="p-2 border border-gray-200">Status</th>
            <th className="p-2 border border-gray-200">Agency Name</th>
            <th className="p-2 border border-gray-200">Contact Details</th>
            <th className="p-2 border border-gray-200">Registration Date</th>
            <th className="p-2 border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border border-gray-200">{index + 1}</td>

              <td className="p-2 border border-gray-200">
                {item.isIATA ? "IATA" : "Non-IATA"}
              </td>

              <td className="p-2 border border-gray-200">
                <span className="px-2 py-1 text-white bg-red-500 rounded-full text-xs">
                  No
                </span>
              </td>

              <td className="p-2 border border-gray-200">
                <div className="font-semibold">{item.agencyName}</div>
                <div className="text-sm text-gray-600">{item.locationState}</div>
              </td>

              <td className="p-2 border border-gray-200">
                <div>{item.address}</div>
                <div className="text-sm text-gray-600">{item.email}</div>
                <div className="text-sm text-gray-600">{item.telephone}</div>
              </td>

              <td className="p-2 border border-gray-200">
                {new Date(item.registrationDate).toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td className="p-2 border border-gray-200">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)} 
                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
                  >
                    Action
                  </button>
                  {openDropdownIndex === index && (
                    <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg group-hover:block">
                      <ul>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer">View More</li>
                      </ul>
                    </div>
                  )}  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubmittedFormTable