import React from 'react'

const Tablebody = ({Contact}) => {
  return (
    
    <div>
    <table>
      <thead>
        <tr>
          <th >
            Id
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
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