import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add any logic to scroll to the corresponding section on the page if needed
  };

  const value = {
    activeTab,
    handleTabClick,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
