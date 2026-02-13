
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const PriorityView = ({ clients, onClientClick }) => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Top 3 Priority Customers
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {clients.slice(0, 3).map((client) => (
          <Card
            key={client.id}
            sx={{
              width: 300,
              borderTop: `5px solid #004684`,
              cursor: 'pointer',
            }}
            onClick={() => onClientClick(client)}
          >
            <CardContent>
              <Typography variant="h6" sx={{ color: '#004684' }}>
                {client.name}
              </Typography>
              <Typography variant="body2">{client.industry}</Typography>
              <Typography
                variant="caption"
                sx={{ color: '#FFD200', display: 'block', mt: 1 }}
              >
                AI Insight: High growth potential
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriorityView;
