
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import PriorityView from './PriorityView';
import CustomerDashboard from './CustomerDashboard';
import { clients, marketTrends } from './data';

const getPriorityClients = (clients, trends) => {
  return [...clients]
    .map(client => {
      const trend = trends[client.industry];
      if (trend) {
        return { ...client, priorityScore: client.priorityScore + 20 }; 
      }
      return client;
    })
    .sort((a, b) => b.priorityScore - a.priorityScore);
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    navigate(`/customer/${client.id}`);
  };

  const handleBack = () => {
    setSelectedClient(null);
    navigate('/');
  };

  const priorityClients = getPriorityClients(clients, marketTrends);
  const filteredClients = priorityClients.filter(client => 
    client.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route 
          path="/" 
          element={<PriorityView clients={filteredClients} onClientClick={handleClientClick} />} 
        />
        <Route 
          path="/customer/:id" 
          element={selectedClient ? <CustomerDashboard client={selectedClient} onBack={handleBack} /> : null}
        />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

export default AppWrapper;
