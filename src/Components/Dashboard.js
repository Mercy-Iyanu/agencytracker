import React, {useState} from 'react';
import AgencyForm from './AgencyForm';
import SubmittedFormTable from './SubmittedFormTable';

const Dashboard = () => {
    const [agents, setAgents] = useState([]);

    const handleAddAgent = (agentData) => {
        setAgents([...agents, agentData]);
    };

  return (
    <div className="flex flex-row gap-4 p-4 h-screen bg-gray-100">
      {/* Table Section (70%) */}
      <div className="w-2/3 p-4">
        <SubmittedFormTable agents={agents} />
      </div>

      {/* Form Section (30%) */}
      <div className="w-1/3 p-4 border-l">
        <AgencyForm onAddAgent={handleAddAgent} />
      </div>
    </div>
  )
}

export default Dashboard