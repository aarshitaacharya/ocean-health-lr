import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import ExampleCloud from './components/ExampleCloud';
import Logo from './assets/logo.png';

function App() {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    Salinity: "", Temp: "", Oxygen: "", Depth: ""
  });

  return (
    <div className="app-container">
      {/* Header with logo */}
      <div className="app-header">
        <img
          src={Logo}
          alt="logo"
          className="logo-image"
        />
        <h1 className="title-text">Ocean Health Estimator</h1>
      </div>

      {/* Form and Cloud */}
      <div className="form-section">
        <InputForm onResult={setResult} formData={formData} setFormData={setFormData} />
        <ExampleCloud setFormData={setFormData} />
      </div>

      {/* Result */}
      {result && <ResultCard score={result.HealthScore} status={result.Status} />}
    </div>
  );
}

export default App;
