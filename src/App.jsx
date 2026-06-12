import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


const App=()=>
  {
    const [userData,setUserData]=useState([]);
    const [page,setpage]=useState("");

    const getData=async()=>
    {
      const response=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      
      setUserData(response.data);

      console.log(userData);
      
    }

    useEffect(function()
    {
      getData();
    },[page])

    let printUserData="No User Avilable"

    if(userData.length>0)
    {
      printUserData=userData.map((elem)=>
      {
        return(
          
                <div key={elem.id} className="h-40 w-40 ">
                  <h3>{elem.author}</h3>
                  <img
                  className='h-full w-full object-cover rounded-2xl'
                    src={elem.download_url}
                    alt={elem.author}
                    width="200"
                  />
                </div>
         

        );
        
      })
    }
    

  return(
        <div className='p-10 '>
          <div className="flex flex-wrap gap-9">
           {printUserData}
          </div>

          <div className="flex justify-center items-center gap-4 mt-15">
            <button className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={()=>{setpage(page+1)}}>
              Previous
            </button>

            <button className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={()=>{setpage(page+1)}}>
              Next
            </button>
          </div>
        </div>
  )
}

export default App
