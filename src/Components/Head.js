


const Head = ({handleChange,handleAddContact,NewContact,handleSearch,SearchContact}) => {
  return (
    <>
         <div className="head">
        <h1>User Data</h1>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Enter here to Search"
            
            onChange={handleSearch}

            
          />
        </div>
      </div>
     
        <form action="" className="input" onSubmit = {handleAddContact} >
          <input
            type="text"
            name="id"
            placeholder="Enter id"
            onChange = {handleChange}
            value={NewContact.id}
    
           
          />

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange = {handleChange}
            value={NewContact.name}
        
          
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange = {handleChange}
            value={NewContact.email}
            
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone"
            onChange = {handleChange}
            value={NewContact.phone}
          
          />

          <button className="btn" type="submit" onClick = {handleAddContact}>
            Add
          </button>
        </form>
      
    </>
  )
}

export default Head