
import { Button } from "bootstrap"
import {useState} from "react"
import '../components/todo.css';
import emma from '../assest/todoimg.jpg';
import rich from '../assest/todobgimg.jpg'
import edit from '../assest/editicon-8.png'
import deleteicon from '../assest/deleteicon-8.png'


function todo(){

  const [toDoEvents, settoDoEvents] = useState("")
  const [allToDo, setallToDo] = useState([])
  const [addButton, setaddButton] = useState("✔")
  const [taskLabel, settaskLabel] = useState("Add Task Manager List")
  const[editOptions,setEditOptions]=useState()
  

  const addToDo=()=>{

    if (addButton=="✔") {
      if(toDoEvents==("")){
        alert("Hey, that's wrong, add an event so we can be buddies❤😎👌")
      }
      else{
        let events ={
          toDoEvents
        }
    
        let allNewToDo = [...allToDo,events]
        setallToDo(allNewToDo)
        settoDoEvents("")
        alert("hello Buddy😎✌,your todo event has been added Successfully✔ see👀 you around!👌")
      }
    }else{
      let editTask = {
        toDoEvents
      }
      allToDo[editOptions]=editTask;
      setallToDo(allToDo)
      settoDoEvents("")
      settaskLabel("Add Task Manager List")
      setaddButton("✔")
    }
   
  }

  const editTask =(ind)=>{
    settoDoEvents(allToDo[ind].toDoEvents)
    setaddButton("Edit")
    settaskLabel("Edit Task Manager List")
    setEditOptions(ind)
  }

  const deleteTask = (exp)=>{
    let removeTask = allToDo.filter((task, index)=>(index!=exp))
    setallToDo(removeTask)
  }

  return(
 
    <>

      
      
      <div className="container   p-1 justify-content-center mt-3">
        
        <div className="container  m-auto  col-lg-8">
          <h3 className="text-info text-center">  <span><img  src={rich} style={{height:'150px',marginLeft:"-30px"}} /></span>{taskLabel}</h3>
          <div className="container col-lg-6 d-flex my-3">
            <input className="form-control m-auto w-"  onChange={(e)=>settoDoEvents(e.target.value)} value={toDoEvents}  placeholder="Enter to-do events!....." />
            <button className="btn btn-info  w-25 mx-2" onClick={()=>addToDo()}><span className=" text-light">{addButton}</span></button>
          </div>
        </div>
      
      </div>
      <div className="container col-lg-3 col-md-6">
        <table className="table table-stripped table-hover col-lg-3 bg-light">
          <tr>
          <td className="text-info mx-5">S/N</td>
          <td className="text-info mx-5" >To-D0-Events</td>
          <td className="text-info mx-5 ">Actions</td>
          </tr>
          {allToDo.length<1 ? <tbody><tr className="text-center text-dark"><td colSpan={3}>No Added Events Yet😢 <br/> Try adding some events😊. </td></tr></tbody>:
          <tbody>
            {
              allToDo.map((event,index)=>(
                    <tr>
                    <td className="text-dark">{index+1+"."}</td>
                    <td className="text-dark">{event.toDoEvents}</td>
                    <td className="text-dark ">
                        <span onClick={()=>editTask(index)} style={{cursor:"pointer"}}><img src={edit} height={"20px"} /></span>
                        <span className="mx-3" onClick={()=>deleteTask(index)}  style={{cursor:"pointer"}}><img src= {deleteicon} height={"20px"} /></span>
                    </td>
                    </tr>
              ))
            }
          </tbody>
          }
        </table>
      </div>


      <div className="container d-flex p-3">
        <div className="container  col-lg-3 " id="img-box" style={{position:"fixed"}}>
          <img src={emma} style={{height:'200px',marginLeft:"20px",backgroundAttachment:"fixed"}}/>
          <h6>  Hello Buddy!! 😎 Get Efficient And Accurate Reminders On Your Events.</h6>
        </div>
        <div className="container col-lg-4 ">
        </div>
        <div className="container  col-lg-4 ">
        </div>
      </div>
      
    
      
    </>
  )
}
export default todo;
