
import React,{useState} from 'react'
  
  

function App() {

 const [inputs,setinputs] = useState(
  {
    name:"",
    description:"",
    status:""
    
   
  }
 )
  const [data,setdata] = useState([])
  const [isclicked,setisclicked] =useState(false)
  const [editIndex, setEditIndex] = useState("");
 
  const handleclick = (e) =>{
     setinputs({
      ...inputs,
      [e.target.name] : e.target.value,
     })
  }
   const handlechange =(e) =>{
    e.preventDefault();
    // console.log(inputs)
    setdata([...data,inputs]);
    setinputs({
     
      name:"",
      description:"",
      status:"",
      
      
    })
    setisclicked(false)
   };
    
      const handleDelete =(index) =>{
         const filterdata = data.filter((item, i) => i !==index)
          setdata(filterdata)
      }
     const handleEdit =(index) =>{
       const temp =data[index];
       data.splice(index , 1)   
         setinputs(temp)
         setisclicked(true)
         setEditIndex(index)
        
      
     }
     
     
    
     
  return (
    <>
    <div className="container">
<form onSubmit={handlechange} >
      <div>
        <h2 className='text-center mt-3 display-5 fw-1'>TODO LIST</h2>
      </div>
    <div className='row mt-4'>
      <div className='col'>
      <input
       type="text" 
      className="form-control" 
      placeholder="Name" 
      name='name'
      value={inputs.name}
      onChange={handleclick}
      aria-label="First name"
     
      />
      </div>
      <div className='col ms-2'>
      <input 
      type="text" 
      className="form-control"
       placeholder="Description" 
       name='description'
      value={inputs.description}
      onChange={handleclick}
       aria-label="First name"
       />
      </div>

      <div className='text-center'>
      <button type='submit' className=' btn btn-success mt-3 '>
       {isclicked ? 'Update' : 'Add'}  
      </button>
      </div>
    </div>
    <hr className='fw-5'/>
    <div id="main">
    {
  data.map((item,index)=>(  
     <div className="row" key={index}  >
  <div className="col-sm-6">
  <div className="card ">
    <div className="card-body">
      <h5 className="card-title"><span className='float-start fw-3'>Name:</span>{item.name}</h5>
   <br></br>
      <p className="card-text"><span className='float-start fw-3'>Description:</span>{item.description}</p>
     <br></br>
     
      <div class="col">
      <span className='float-start fw-3 '>Status:{item.status}</span>
    <select className="form-select" >
      <option value="all">All</option>
      <option value="completed" selected>Completed</option>
      <option value="incompleted">InCompleted</option>
    </select>
  </div>
<br></br>
    <div>
    <button className='btn btn-success' onClick={() => handleEdit(index)}>EDIT</button>
      <button className='btn btn-danger ms-2' onClick={()=> handleDelete(index)} >DELETE</button>
     </div>
     
    </div>
  </div>
</div>

</div>
  ))
   }
      
    </div>
   
  </form>
    </div>
    </>
   
  )
}

export default App

