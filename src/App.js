import React, {useState, useEffect} from 'react';
import ImgData from './components/ImgData.js';
import Search from './components/Search.js';
function App() {

  const [imgs,setImgs]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term, setTerm]=useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${ process.env.REACT_APP_PIXABAY_API_KEY }&q=${term}&image_type=photo`)
    .then(res=>res.json())
    .then(data=>{
      setImgs(data.hits);
      setIsLoading(false);
    })
    .catch(err=>console.log(err));
  },[term]);

  return (
    <>
    <div className='w-full bg-slate-300 p-4'>
      <Search srch={(txt) => setTerm(txt)}/>
      {isLoading?<p className=' text-4xl text-center '>Loading....</p>:<div className="grid grid-cols-3 gap-4">
        {imgs.map(i =>(<ImgData key={i.id} i={i}/>))}
      </div>}
    </div>
    </>
  );
}

export default App;
