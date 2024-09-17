import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing';
import OurPaidBusiness from './components/OurPaidBusiness/OurPaidBusiness';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/our-paid-business" element={< OurPaidBusiness/>} />
      </Routes>
    </Router>
  );
}

export default App;