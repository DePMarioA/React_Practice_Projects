import { useState ,useEffect} from "react";
// to protect the code to run only one time useEffect
// useEffect(() =>{
//   console.log('Call The API')
// },[])
function App() {
  const [counter, setCounter] = useState(0)
  const [keyword,setKeyword] = useState("")
  const onChange = (event) =>{
    setKeyword((word) => event.target.value)
  }
  const onClick = () =>{
    setCounter((val)=>val+1)
  }
  useEffect(() =>{
    console.log('I Run only once')
  },[])
  //useEffect(()=>{ if (keyword !== '' && keyword.length>4){ console.log(`I run when keyword changes \n search for ${keyword}`);}},[keyword])
  useEffect(()=>{  console.log(`I run when keyword changes \n search for ${keyword}`);},[keyword])
  useEffect(()=>{console.log(`I run when 'counter' changes `);},[counter])

  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder="search here.." />
      <h1 >
        Welcome to React! {counter}
      </h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
