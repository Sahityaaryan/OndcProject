import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function ModifyCategory(){

    const [category, setCategory] = useState('');

    async function handleSubmit(e){
      e.preventDefault();

        //posting the category    
try {
  
  const res = await fetch('/user/createCategory',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'category':category}) 
  })

  const respObj = await res.json();


  if(respObj.success)
  {
    toast.success(`${category} has been created`);
  } else {
    toast.error("Something went wrong");
  }
  // console.log("res: ",res);
} catch (error) {
  console.log("message error: ",error.message);
}      
    }

    return (

        <>

<ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      
        <div className="form_page ">
            <h2 className="head_line">
                Modify Categories
                </h2>
            <form  className="form_ondc" onSubmit={handleSubmit}>
                <input type="text" className="text_input" onChange={(e)=> setCategory(e.target.value)} value={category} placeholder="Enter the required category"/>

            
             <button className="accept_submit" >  
                <input type="submit" value="Create Category" />
              </button>

              {/* <button className="reject_submit">
                <span> Remove Category </span>
              </button> */}
            </form>
        </div>
        </>
    )
} 

//khd*