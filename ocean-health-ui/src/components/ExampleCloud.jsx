import React from 'react'

function ExampleCloud({ setFormData }) {
    const examples = {
        Healthy: { Salinity: 33.5, Temp: 16.0, Oxygen: 7.0, Depth: 20 },
        Moderate: { Salinity: 35.0, Temp: 12.0, Oxygen: 5.0, Depth: 80 },
        Unhealthy: { Salinity: 37.0, Temp: 5.0, Oxygen: 3.0, Depth: 200 },
    };
  return (
    <div>
        <p>Examples</p>
        <div>
            {Object.entries(examples).map(([label, values]) => (
                <button
                key ={label}
                onClick={()=>setFormData(values)}>
                    {label}

                </button>
            ))}
        </div>
    </div>
  )
}

export default ExampleCloud