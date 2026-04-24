import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import RoadmapPage from './pages/RoadmapPage';
import QuizPage from './pages/QuizPage';
import AdminPanel from './pages/AdminPanel';
import ExplorePage from './pages/ExplorePage';
import CreateRoadmapPage from './pages/CreateRoadmapPage';
import ProfilePage from './pages/ProfilePage';
import CommunityRoadmapPage from './pages/CommunityRoadmapPage';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg-primary)' }}>
      <div className="spinner" style={{ width: 40, height: 40 }} />
    </div>
  );
  return user ? children : <Navigate to="/login" replace />;
};

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return children;
};

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default function App() {
  return (
    <AuthProvider>
      <ParticleBackground />
      <CursorGlow />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/roadmap/:id" element={<PrivateRoute><RoadmapPage /></PrivateRoute>} />
          <Route path="/quiz/:id" element={<PrivateRoute><QuizPage /></PrivateRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminPanel /></AdminRoute>} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create-roadmap" element={<PrivateRoute><CreateRoadmapPage /></PrivateRoute>} />
          <Route path="/edit-roadmap/:id" element={<PrivateRoute><CreateRoadmapPage /></PrivateRoute>} />
          <Route path="/community/roadmap/:id" element={<CommunityRoadmapPage />} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
