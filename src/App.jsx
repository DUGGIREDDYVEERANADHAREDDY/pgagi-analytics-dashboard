import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import Settings from './components/Settings';
import ChefsPage from './pages/Finance';
import MenuitemsPage from './pages/News';
import Weather from './pages/Weather';
import Header1 from './components/Header1'; // Adjusted import path
import Sidebar1 from './components/Sidebar1';
import PrivateRoute from './components/PrivateRoute';

// MainLayout component for regular pages
function MainLayout() {
  return (
    <div className="flex">
      {/* Regular Sidebar */}
      <Sidebar1 />

      {/* Main content area */}
      <div className="flex-grow">
        {/* Always render the Header1 */}
        <Header1 />

        {/* Render nested routes here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}



function App() {
  return (
    <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
           
            <Route path="/" element={<LoginPage />} />
            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              {/* Regular Routes with Main Layout */}
              <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/chefs" element={<ChefsPage />} />
                <Route path="/latest-News" element={<MenuitemsPage />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/dark-them" element={<Settings />} />
              
              </Route>
            
            </Route>
          </Routes>
        </Router>
      );
    }

export default App;