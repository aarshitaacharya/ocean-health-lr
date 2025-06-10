import React from 'react'

function InputForm({onResult, formData, setFormData }) {


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            const data = await res.json()
            onResult(data);

        } catch (err){
            alert("prediction failed", err)
        }
    }

    const handleChange = (e) => {
        setFormData((prev)=> ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

  return (
    <form onSubmit={handleSubmit}>
        {['Salinity', 'Temp', 'Oxygen', 'Depth'].map((key)=>(
            <input 
            key = {key}
            type="number"
            step="any"
            name={key}
            onChange={handleChange}
            required
            value={formData[key]}
            />
        ))}

        <button type = "submit">
            Check Ocean Health
        </button>
    </form>
  )
}

export default InputForm