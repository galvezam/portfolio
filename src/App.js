import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Bio from "./components/Bio";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <main>
      <>
      
      
      <Routes>
        <Route path="/bio" element={<Bio />} />
      </Routes>
      {isHomePage && (
        <>
        <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          
        </>
      )}
      <Footer />
        <Alert />
      </>
    </main>

  )
}

function App() {


  return (
    
    <ChakraProvider>
      <AlertProvider>

        <Router>          
          <AppContent />
          </Router>
          
      </AlertProvider>
      
    </ChakraProvider>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
