import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Routes>
        <Route path="/" element={
          <Suspense fallback="Cargando...">
            <HomePage />
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback="Cargando...">
            <ProjectsPage />
          </Suspense>
        } />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;