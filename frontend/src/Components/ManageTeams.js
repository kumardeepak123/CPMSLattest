import React ,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router';

const ManageTeams = () => {
    const[teams, setTeams]= useState([]);
     
    const navigate= useNavigate();

    useEffect(()=>{
         fetch(`https://localhost:44327/api/Team/all-teams`,{
        //   headers:{
        //       "Authorization" : `Bearer ${user.token}`
        //   }
       })
       .then(res=> res.json())
       .then(res=>{
          setTeams(res);
          
       })
    },[])
    return (
        <div className='container'>
            <div className='text-center text-info font-weight-bold '>Team Details</div>
            <button className='btn btn-secondary' onClick={()=>{navigate("/admin/create-team")}}>Create Team</button>
            <button className='btn btn-secondary ml-2' onClick={()=>{navigate("/admin/create-employee")}}>Create Employee</button>
            <div id="accordion" className='mt-2'>
                {teams.map((e, i)=>
                <div class="card"  key={i}>
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {e.name} 
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        {/* <button className='btn btn-sm btn-info'>Edit</button>
                        <button className='btn btn-sm ml-2 btn-danger'>Delete</button> */}
                         {e.projectId == null ?
                          <p style={{color:'red'}}>Not working on any Project</p>
                          : <p >Working on Project: <p className='font-weight-bold'>{e.project.name}</p></p>
                         }
                         
                        <table class="table ">
                            <tbody> 
                                <tr>
                                    <th >Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Designation</th>
                                </tr>
                                {e.employees.map((ele,index)=>
                                <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.designation}</td>
                                </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

                )}

            </div>
        </div>
    )
}

export default ManageTeams;