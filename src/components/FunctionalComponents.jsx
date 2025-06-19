import React, { useState, useEffect, useRef } from 'react';

const formFields = [
  { name: 'first_name', label: 'First Name', type: 'text', placeholder: 'Enter first name' },
  { name: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Enter last name' },
  { name: 'phone', label: 'Phone Number', type: 'number', placeholder: '10 digit phone number' },
];

const FunctionalComponents = () => {
  const [state, setState] = useState("Hello");
  const [clicked, setClicked] = useState("");
  const [store , setStore] = useState("");

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
  });

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const changeState = () => {
    setClicked(true);
  };

  const handleInputChange = (e, name) => {
    setFormData({
        ...formData,
        [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <button onClick={changeState}>Change State</button>
      <h1>This is the functional component</h1>
      <h3>The useState Component is: {state}</h3>
      <input 
        type='text' 
        className='input-name' 
        placeholder='Enter the Values here' 
        onChange={(e) => setStore(e.target.value)} 
      />
      <h4>Counts : {count.current}</h4>

      {/* Form Started */}
      {/* <form >
        <div>
          <label>First Name: </label>
          <input 
            type="text" 
            name="first_name" 
            value={formData.first_name} 
            onChange={(e) => handleInputChange(e, "first_name")} 
            required
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input 
            type="text" 
            name="last_name" 
            value={formData.last_name} 
            onChange={(e) => handleInputChange(e , "last_name")} 
            required
          />
        </div>

        <div>
          <label>Phone Number: </label>
          <input 
            type="number" 
            name="phone" 
            value={formData.phone} 
            onChange={(e) => handleInputChange(e, "phone")} 
            required
            placeholder="10 digit number"
          />
        </div>

        <button type="submit" onClick={handleSubmit}> Submit</button>
      </form> */}
      {/* Form End */}


        {/* trial code */}

        <form>
            {
                formFields.map(({name , label , placeholder , type}) => (
                    <div key={name} >
                        <label> {label} </label>
                        
                        <input name={name} type={type} placeholder={placeholder} onChange={(e) => handleInputChange(e , name)} value={formData[name]} />
                    </div>
                ))
            }

            <button type="submit" onClick={handleSubmit} > Submit </button>
        </form>


    </>
  );
};

export default FunctionalComponents;
