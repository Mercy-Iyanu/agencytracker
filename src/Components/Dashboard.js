import React, { useState } from 'react';
import SearchForm from './SearchForm';
import AgencyForm from './AgencyForm';
import SubmittedFormTable from './SubmittedFormTable';
import Analytics from './Analytics';

const Dashboard = ({ data }) => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);

  const handleAddAgent = (agentData) => {
    setAgents((prevAgents) => {
      const newAgents = [...prevAgents, agentData];
      setFilteredAgents(newAgents);
      return newAgents;
    });
  };

  const handleSearch = (filters) => {
    let result = agents;

    if (filters.agencyName) {
      result = result.filter((agent) =>
        agent.agencyName.toLowerCase().includes(filters.agencyName.toLowerCase())
      );
    }
    if (filters.email) {
      result = result.filter((agent) =>
        agent.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.address) {
      result = result.filter((agent) =>
        agent.address.toLowerCase().includes(filters.address.toLowerCase())
      );
    }
    if (filters.status && filters.status !== 'all') {
      result = result.filter((agent) => agent.status === filters.status);
    }
    if (filters.iataStatus) {
      result = result.filter((agent) => agent.iataStatus === filters.iataStatus);
    }
    if (filters.startDate && filters.endDate) {
      result = result.filter((agent) => {
        const registrationDate = new Date(agent.registrationDate);
        const startDate = new Date(filters.startDate);
        const endDate = new Date(filters.endDate);
        return registrationDate >= startDate && registrationDate <= endDate;
      });
    }

    setFilteredAgents(result); 
  };

  const totalSubmissions = filteredAgents.length;
  const newSubmissions = filteredAgents.filter((item) => {
    const today = new Date();
    const submissionDate = new Date(item.registrationDate);
    const daysDifference = Math.floor(
      (today - submissionDate) / (1000 * 60 * 60 * 24)
    );
    return daysDifference <= 2;
  }).length;

  return (
    <div>
      <Analytics
        totalSubmissions={totalSubmissions}
        newSubmissions={newSubmissions}
      />
      <div className="flex flex-col md:flex-row gap-4 p-4 h-screen bg-gray-100">
        <div className="w-full md:w-2/3 p-4">
          <SubmittedFormTable agents={filteredAgents} />
        </div>

        <div className="w-full md:w-1/3 p-4 border-l">
          <AgencyForm onAddAgent={handleAddAgent} className='pb-8'/>
          <SearchForm onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;