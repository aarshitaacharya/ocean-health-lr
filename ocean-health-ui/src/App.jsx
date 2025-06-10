import { useState } from 'react'
import './App.css'
import ExampleCloud from './components/ExampleCloud'
import InputForm from './components/InputForm'
import ResultCard from './components/ResultCard'

function App() {
  const [formData, setFormData] = useState({
    Salinity: "",
    Temp: "",
    Oxygen: "",
    Depth: ''
  });

  const [result, setResult] = useState(null);


  return (
    <>
    <InputForm onResult={setResult} formData={formData} setFormData={setFormData}/>
    <ExampleCloud setFormData={setFormData}/>

    {result&&<ResultCard score = {result.HealthScore} status = {result.Status}/>}
    </>
  )
}

export default App
