import React,{useState,useEffect} from "react";
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Filter from "./Components/Filter"
import {apiUrl,filterData} from './data'
import Spinner from "./Components/Spinner";
import {toast} from "react-toastify";

const App = () => {

  const[courses, setCources]=useState([]);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
       let response=await fetch(apiUrl);
       let output=await response.json();
      //  console.log(output.data);
       setCources(output.data);
    }
    catch(error){
       toast.error("There is a problem!!!");
    } 
    setLoading(false);
  }

  useEffect(()=>{
     fetchData();
  },[] )

  return(
   <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
      <Navbar/>
    </div>
    <div className="bg-bgDark2">
    <div>
       <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    </div>
    <div className='w-11/12 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center min-h-[50vh]'>
      {loading?(<Spinner/>):(<Cards  category={category} courses={courses}/>)}
    </div>
    </div>
    
    </div>);
};

export default App;
