import React, { useState, useEffect, useRef } from 'react';

const FunctionalComponents = () => {
  const [state, setState] = useState("Hello");
  const [clicked, setClicked] = useState("");
  const [store , setStore] = useState("");
  const count = useRef(0);

//   useEffect(() => {
//     if (clicked) {
//       setState("Summa tha oru try");
//     }
//   }, [clicked]); 

    useEffect(() => {
        count.current = count.current + 1;
    })

  const changeState = () => {
    setClicked(true);
  };

  return (
    <>
      <button onClick={changeState}>Change State</button>
      <h1>This is the functional component</h1>
      <h3>The useState Component is: {state}</h3>
      <input type='text' className='input-name' placeholder='Enter the Values here' onChange={(e) => setStore(e.target.value)} />

        <h4> Counts : {count.current}</h4>
    </>
  );
};

export default FunctionalComponents;
