import React from 'react'
import {FaArrowUp , FaArrowDown} from "react-icons/fa"

const Tablebody = ({Contact,SortingByID,SortingByName,Sorted}) => {

    const renderArrow = ()=>{
        if(Sorted.reversed){
          return <FaArrowDown/>
        }
        return <FaArrowUp/>
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
          <th>Phone
          </th>
        </tr>
      </thead>
      <tbody>
        {Contact.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Tablebody