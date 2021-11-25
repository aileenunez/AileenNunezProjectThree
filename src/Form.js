//Component for Form Section that allows user input to search keyword in News API 

import { useState } from "react";

//importing props from APP.js 
function Form({ setSearch, setUserSelect }) {

  const [formQuery, setFormQuery] = useState('')

  //Event Handler Functions 
  const handleChange = function (event) {
    setFormQuery(event.target.value)
  }
  //Event handler function that displays news based on the userInput 
  const handleSubmit = function (event) {
    event.preventDefault()
    setUserSelect("")
    setSearch(formQuery)
    setFormQuery("")
  }
  //Event handler function  that returns you to home page 
  const handleClearForm = function () {
    setFormQuery("")
    setSearch("")
  }
  //Returning What will Render on Page 
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label 
        className="srOnly"
         htmlFor="newsSearch"
         >Search News:</label>
        <input
          value={formQuery}
          type="text"
          placeholder="Keyword"
          id="newsSearch"
          name="newsSearch"
          onChange={handleChange}
          required
        />
        <i 
        aria-label="Search Icon" 
        className="fas fa-search"
        ></i>
        <button>Search Keyword</button>
      </form>
      <button 
      className="returnBtn" 
      onClick={handleClearForm}
      >Return Home</button>
    </div>

  )

}

export default Form;