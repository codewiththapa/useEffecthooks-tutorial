import React, { useState, useEffect} from 'react'

const ReactDay28UseEffect = () => {
  const [counter1,setCounter1] = useState(0);
  const handelClick1 = ()=> setCounter1(counter1+1);

  const [counter2,setCounter2] = useState(0);
  const handelClick2 = ()=> setCounter2(counter2+1);

  useEffect(()=>{console.log('inside useEffect')},[counter1])

  return (
   <>
    <div style={{marginTop:'50px'}}>{`counter1 is:${counter1}`}</div>
   <button style={{marginTop:'50px'}} onClick={handelClick1}>Click Me1</button>

   <div style={{marginTop:'50px'}}>{`counter2 is:${counter2}`}</div>
   <button style={{marginTop:'50px'}} onClick={handelClick2}>Click Me2</button>
   </>
  )
}

export default ReactDay28UseEffect
