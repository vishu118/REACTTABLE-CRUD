


const Head = ({handleChange,handleAddContact}) => {
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

            
          />
        </div>
      </div>
     
        <form action="" className="input" onSubmit = {handleAddContact} >
          <input
            type="text"
            name="id"
            placeholder="Enter id"
            onChange = {handleChange}
           
          />

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange = {handleChange}
          
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange = {handleChange}
            
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone"
            onChange = {handleChange}
          
          />

          <button className="btn" type="submit" onClick = {handleAddContact}>
            Add
          </button>
        </form>
      
    </>
  )
}

export default Head