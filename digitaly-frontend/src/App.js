// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entreprise" element={<ErrorPage />} />
              <Route path="/emploi" element={<ErrorPage />} />
              <Route path="/contact" element={<ErrorPage />} />
              <Route path="/espace-digitalists" element={<ErrorPage />} />
              {/* Catch all non-matching routes */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;