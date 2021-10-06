import {db} from "./firebase"
import './App.css';
import {useState,useEffect} from 'react'
import ReactTable from "./react-table";
import {nanoid} from "nanoid"
import "./react-table/react-table.css";  

 
const App=()=> {
  const d=new Date()
  const [money,setMoney]=useState(0);
  const date=d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear()+" time-"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
  const [data,setData]=useState([])
  const [goal,setGoal]=useState("")
  const [goals,setGoals]=useState([])
 useEffect(()=>{
  db.collection("todo").get().then(docs=>
   docs.forEach(ele =>{
  setData(a=>[...a,ele.data()])
  setMoney(a=>parseInt(a)+parseInt(ele.data().earn))
   })
    
    )
    db.collection("goal").get().then(docs=>
      docs.forEach(ele =>{
     setGoals(a=>[...a,ele.data()])
     
      })
       
       )
  },[])
  

const add=()=>{
  if(id==="" || name==="" || email==="" || msg===""){
  alert("all field required")
  }else{
    db.collection("todo").add({id,earn,date,name,email,msg,dead}).then(res=>alert("added"))
   setTimeout(()=>{
    window.location.reload()
    
   },1000)
    
  }
}

const add2=()=>{
  if(goal===""){
  alert("all field required")
  }else{
    db.collection("goal").add({goal}).then(res=>alert("added"))
   setTimeout(()=>{
    window.location.reload()
    
   },1000)
    
  }
}





const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [msg,setMsg]=useState('')
const [id,setId]=useState('')
const [earn,setEarn]=useState('')
const [dead,setDead]=useState('')





const del=(e)=>{
  db.collection("todo").where('id','==',e).get().then(doc=>doc.forEach(element => {
    element.ref.delete();
    
    setTimeout(()=>{
      window.location.reload()
      
     },1000)
}))

}
const del2=(e)=>{
  db.collection("goal").where('goal','==',e).get().then(doc=>doc.forEach(element => {
    element.ref.delete();
    
    setTimeout(()=>{
      window.location.reload()
      
     },1000)
}))

}

const columns1 = [{
  Header:"goals",
  accessor:'goal',
  },{
    Header:"del",
Cell:({row})=><center><span class="glyphicon glyphicon-trash" id="del" onClick={()=>del2(row.goal)}></span></center>
   }]



const columns = [{
  Header:"Id",
  accessor:'id',
  },{  
    Header: 'earnings',  
    accessor: 'earn'  
   },{  
         Header: 'Name',  
         accessor: 'name'  
        },{  
        Header: 'email',  
        accessor: 'email'  
        },{
          Header:"details",
          accessor:"msg"
        },{
          Header:"date",
          accessor:"date"
        },{
          Header:"dead line",
          accessor:"dead"
        },{
         Header:"del",
  Cell:({row})=><center><span class="glyphicon glyphicon-trash" id="del" onClick={()=>del(row.id)}></span></center>
        }]



  return (
    <div className="App">
      <center className="logo"><img src='https://raw.githubusercontent.com/sadman-sakib-abesh/images/main/Logopit_1627314975002.png' alt='logo' id='h-logo' height='45px'/> <br/>
   <br/> <b>earning history and todo list</b>
   
   <p id="earn">  {money} &nbsp;USD<br/>{parseInt(money*85.65)}&nbsp;BDT<br/></p>
</center><br/>
<center>
   <div id="form" ><br></br>
 
   <input type="number" id="in" onChange={e=>setEarn(e.target.value)} placeholder="earning"/>&nbsp;&nbsp;
   <input type="number" id="in" onChange={e=>setId(e.target.value)} placeholder="id"/>&nbsp;&nbsp;
  <input type="text" id="in" onChange={e=>setName(e.target.value)} placeholder="name"/>&nbsp;&nbsp;
    
  <input type="email" id="in" onChange={e=>setEmail(e.target.value)} placeholder="email"/>&nbsp;&nbsp;
    
  <input type="text" id="in" onChange={e=>setMsg(e.target.value)} placeholder ="project massage"/>&nbsp;&nbsp;
  <input type="date" id="in" onChange={e=>setDead(e.target.value)} placeholder ="dead line"/>&nbsp;&nbsp;
  
<button onClick={()=>add()} id="btn-add">add</button>
         </div></center><br/><br/>
         <ReactTable  
            data={data}  
            columns={columns}  
            defaultPageSize = {4}  
            pageSizeOptions = {[2,4, 6]}  
         />  
         <br/><br/><br/><p id="earn"><center>my tasks</center></p>
<center>
   <div id="form" ><br></br>
 
  <input type="text" id="in" onChange={e=>setGoal(e.target.value)} placeholder ="my task"/>&nbsp;&nbsp;
  
<button onClick={()=>add2()} id="btn-add">add</button>
         </div></center><br/><br/>
         <ReactTable  
            data={goals}  
            columns={columns1}  
            defaultPageSize = {4}  
            pageSizeOptions = {[2,4, 6]}  
         />  
    </div>
  );
}

export default App;
