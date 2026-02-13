
# AI-driven Sales Enablement Platform

## Overview

This document outlines the plan and implementation of an AI-driven Sales Enablement Platform for Corporate Banking Relationship Managers. The application is built with React, MUI, and Recharts, and is designed to provide actionable insights and improve sales effectiveness.

## Design and Branding

*   **Reference Theme:** PPSB (Singapore) website (ppsb.com.sg)
*   **Color Scheme:**
    *   Primary: Deep Blue (`#004684`)
    *   Secondary/Action: Bright Yellow (`#FFD200`)
    *   Background: Light Grey/White
*   **Typography:** Roboto
*   **Accessibility:** WCAG 2.1 AA compliance

## Implemented Features

### Data Simulation

*   **Client Data:** A simulated dataset of 10 corporate clients with fields for Company Name, Industry, Key Contact, Annual Revenue, and a Priority Score.
*   **Transaction History:** Simulated transaction data for each client.
*   **Market Trends:** A mapping of global trends to specific industries.

### Core Logic

*   **Priority Customer Identification:** A function that identifies the top 3 priority customers by correlating CRM data with market trends.

### UI Components

*   **PPSB-Style Header:** A header with a logo placeholder and a search bar for filtering customers.
*   **Priority View:**
    *   Displays the top 3 priority customers in styled "Call Cards".
    *   Each card includes the company name, industry, and an "AI Insight" explaining the priority.
    *   Cards are clickable and navigate to the customer's dashboard.
*   **Customer Dashboard View:**
    *   **Profile Summary:** Displays detailed corporate and contact information.
    *   **Financial Trends:** A chart showing transaction volume.
    *   **Next Best Action (NBA):** AI-generated suggestions for the relationship manager.
    *   **Conversation Starter:** A tailored script based on industry trends.
    *   **Market Research:** A button to open a modal with industry-specific news.

## Current Plan

The following steps will be taken to build the application:

1.  **Create Simulated Data:** Create a `data.js` file to store the simulated client data, transaction history, and market trends.
2.  **Create a theme:** Create a `theme.js` file to define the PPSB-inspired color scheme.
3.  **Component Creation:**
    *   `App.tsx`: The main application component, will handle routing.
    *   `Header.tsx`: The PPSB-style header with a search bar.
    *   `PriorityView.tsx`: The main view with the top 3 priority call cards.
    *   `CustomerDashboard.tsx`: The detailed customer view.
    *   `MarketResearchModal.tsx`: The modal for market research.
4.  **Logic Implementation:**
    *   Implement the logic to determine the top 3 priority customers based on CRM data and market trends.
    *   Pass the correct data to each component.
5.  **Styling:** Apply the custom theme and styling to all components to match the PPSB reference.
6.  **Routing:** Implement routing using `react-router-dom` to navigate between the `PriorityView` and `CustomerDashboard`.
7.  **Update `main.tsx`:** Wrap the `App` component with the `ThemeProvider` and `BrowserRouter`.
