import React from 'react'
import Grandchild from './Grandchild'

function Parent(props) {
    console.log("🚀 ~ file: Parent.jsx:4 ~ Parent ~ props:", props)
     const senddatafromparent =() =>{
        const data1 ="html,css,javascript";
        props.ondatafromchild(data1)
     }

  return (
    <div>
       <h1>Parent components</h1> 
<button class=" btn btn-dark"onClick={senddatafromparent}>button</button>
{/* <Grandchild names={props.name}></Grandchild> */}

    </div>
  )
}

export default Parent