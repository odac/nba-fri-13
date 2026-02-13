
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { transactions, marketTrends } from './data';
import MarketResearchModal from './MarketResearchModal';

const CustomerDashboard = ({ client, onBack }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const clientTransactions = transactions[client.id] || [];
  const clientMarketTrend = marketTrends[client.industry] || {};

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={onBack} sx={{ mb: 2 }}>
        Back to Priority View
      </Button>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5">{client.name}</Typography>
          <Typography variant="body1">Industry: {client.industry}</Typography>
          <Typography variant="body1">Key Contact: {client.contact}</Typography>
          <Typography variant="body1">Annual Revenue: ${client.revenue.toLocaleString()}</Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Financial Trends</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={clientTransactions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="volume" stroke="#004684" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2, backgroundColor: '#FFD200' }}>
        <CardContent>
          <Typography variant="h6">Next Best Action (NBA)</Typography>
          {clientMarketTrend.nba && clientMarketTrend.nba.map((action, index) => (
            <Typography key={index} variant="body1">- {action}</Typography>
          ))}
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Conversation Starter</Typography>
          <Typography variant="body1">{clientMarketTrend.impact}</Typography>
        </CardContent>
      </Card>

      <Button variant="contained" onClick={handleOpenModal}>
        Market Research
      </Button>

      <MarketResearchModal
        open={openModal}
        onClose={handleCloseModal}
        trend={clientMarketTrend}
      />
    </div>
  );
};

export default CustomerDashboard;
