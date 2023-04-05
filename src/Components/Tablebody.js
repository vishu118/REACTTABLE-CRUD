import React from 'react'
import {FaArrowUp , FaArrowDown} from "react-icons/fa"

const Tablebody = ({Contact,SortingByID,SortingByName,Sorted,handleDelete,handleEdit,Pages,setPages}) => {

    const renderArrow = ()=>{
        if(Sorted.reversed){
          return <FaArrowDown/>
        }
        return <FaArrowUp/>
      }


    const SelectPages = (SelectedPage)=>{
setPages(SelectedPage)
    } 

  return (
    
    <div>
    <table>
      <thead >
        <tr>
          <th onClick = {SortingByID}>Id
          {Sorted.Sorted === "id" ? renderArrow():null}
          </th>
          <th onClick = {SortingByName}>Name
          {Sorted.Sorted === "name" ? renderArrow():null}
          </th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Contact.slice(Pages * 5 -5, Pages *5).map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
              
              <div className='button'>
              <button className='Action-btn' onClick = {(e) => handleDelete(user.id)}>Delete</button>
              <button className='Action-btn' onClick = {(e)=> handleEdit(user.id)}>Edit</button>
              </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

    {
        Contact.length > 0 && <div className='pagination'>
        <span className='arrow' onClick = {()=>SelectPages(Pages-1)} >◀️</span>
        {
            [...Array(Contact.length/5)].map((_,i)=>{
                return <span
                className={Pages === i+1 ? "PageSelected" : ""}
                 onClick = {()=>SelectPages(i+1)}>{i+1}</span>
            })
        }
       
        <span className='arrow' onClick = {()=>SelectPages(Pages+1)} >▶️</span>

     </div>
    }
  </div>
  )
}

export default Tablebody