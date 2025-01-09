import React, {useState} from 'react';
import AgencyForm from './AgencyForm';
import SubmittedFormTable from './SubmittedFormTable';
<<<<<<< HEAD
=======
import SearchForms from './SearchForms';
>>>>>>> b5d1672e0cf4ecaa35e87291b4c24802005db3b7
import Analytics from './Analytics';

const Dashboard = ({ data }) => {
    const [agents, setAgents] = useState([]);

    const handleAddAgent = (agentData) => {
        setAgents((prevAgents) => [...prevAgents, agentData]);
    };

    const totalSubmissions = agents.length;
    const newSubmissions = agents.filter((item) => {
        const today = new Date();
        const submissionDate = new Date(item.registrationDate);
        const daysDifference = Math.floor(
        (today - submissionDate) / (1000 * 60 * 60 * 24)
        );
        return daysDifference <= 2;
    }).length;

<<<<<<< HEAD
=======
    const [filteredData, setFilteredData] = useState(data);
    const handleSearch = (filters) => {
        let filtered = data;

        if (filters.agencyName) {
        filtered = filtered.filter((entry) =>
            entry.agencyName.toLowerCase().includes(filters.agencyName.toLowerCase())
        );
        }

        if (filters.agencyEmail) {
        filtered = filtered.filter((entry) =>
            entry.email.toLowerCase().includes(filters.agencyEmail.toLowerCase())
        );
        }

        if (filters.agencyAddress) {
        filtered = filtered.filter((entry) =>
            entry.address.toLowerCase().includes(filters.agencyAddress.toLowerCase())
        );
        }

        if (filters.status !== "All Submissions") {
        // Implement status filtering logic based on your data structure
        }

        if (filters.iataStatus !== "All") {
        filtered = filtered.filter((entry) => entry.iataStatus === filters.iataStatus);
        }

        if (filters.startDate && filters.endDate) {
        const startDate = new Date(filters.startDate);
        const endDate = new Date(filters.endDate);

        filtered = filtered.filter((entry) => {
            const registeredDate = new Date(entry.registrationDate);
            return registeredDate >= startDate && registeredDate <= endDate;
        });
        }

        setFilteredData(filtered);
    };

>>>>>>> b5d1672e0cf4ecaa35e87291b4c24802005db3b7
  return (
    <div>
        <Analytics
            totalSubmissions={totalSubmissions}
            newSubmissions={newSubmissions}
        />
        <div className="flex flex-row gap-4 p-4 h-screen bg-gray-100">
<<<<<<< HEAD
=======
            {/* Table Section (70%) */}
>>>>>>> b5d1672e0cf4ecaa35e87291b4c24802005db3b7
            <div className="w-2/3 p-4">
                <SubmittedFormTable agents={agents} />
            </div>

<<<<<<< HEAD
            <div className="w-1/3 p-4 border-l">
                <AgencyForm onAddAgent={handleAddAgent} />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
=======
            {/* Form Section (30%) */}
            <div className="w-1/3 p-4 border-l">
                <AgencyForm onAddAgent={handleAddAgent} />
                {/* <SearchForms onSearch={handleSearch} /> */}
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    {/* <SearchForms onSearch={handleSearch} /> */}
>>>>>>> b5d1672e0cf4ecaa35e87291b4c24802005db3b7
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard