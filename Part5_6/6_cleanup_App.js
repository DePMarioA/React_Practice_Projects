import { useState ,useEffect} from "react";
// to protect the code to run only one time useEffect
// useEffect(() =>{
//   console.log('Call The API')
// },[])

function Hello(){
  const effectFunc = () => {
    console.log('Created');
    return () => console.log('Destroyed'); //clean up return function
  } 
//   useEffect(()=> {console.log('Created');
// return () =>console.log('Destroyed');
// })
  useEffect(effectFunc,[])
  return <h1>Hello</h1>
}
function App() {
  const [showing,setShowing] = useState(false);
  const onClick =() =>{
    setShowing((val)=>!val)
  }
 
  return (
    <div>
      {showing?<Hello/> : null }
      <button onClick={onClick}>{showing?'hide':'show'}</button>
    </div>
  );
}

export default App;
