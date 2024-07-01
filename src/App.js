import { useEffect,useState,React } from "react";
function App() {
  const [count,setCount] = useState (0);
  const [data,setData] = useState('suman');
  useEffect(()=>{console.log('component mount')},[data]);

  function updateCount(){
    setCount(count+1)
  }

  function updateData(){
    setData('Lily','thapa','ram')
  }
  return (
<>
{data}
<h1>Button count {count} times.</h1>
<button onClick={updateCount}>Click</button>
<br /> <br />
<button onClick={updateData}>Press</button>
</>
  );
}

export default App;
