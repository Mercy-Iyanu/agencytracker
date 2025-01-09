import React, {useState} from 'react';
import AgencyForm from './AgencyForm';
import SubmittedFormTable from './SubmittedFormTable';
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

  return (
    <div>
        <Analytics
            totalSubmissions={totalSubmissions}
            newSubmissions={newSubmissions}
        />
        <div className="flex flex-row gap-4 p-4 h-screen bg-gray-100">
            <div className="w-2/3 p-4">
                <SubmittedFormTable agents={agents} />
            </div>

            <div className="w-1/3 p-4 border-l">
                <AgencyForm onAddAgent={handleAddAgent} />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard