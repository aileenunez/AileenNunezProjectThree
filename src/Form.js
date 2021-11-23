import { useState } from "react";

//importing props from APP.js 
function Form({setSearch, setUserSelect}){

  const [formQuery, setFormQuery] = useState('')

  //Event Handler Functions 
    const handleChange = function(event){
      setFormQuery(event.target.value)
    }
     //Event handler function that displays news based on the userInput 
    const handleSubmit = function(event){
      event.preventDefault()
      setUserSelect("")
      setSearch(formQuery)
      setFormQuery("")
    }
    //Event handler function  that returns you to home page 
    const handleClearForm = function(){
      setFormQuery("")
      setSearch("")
    }

  //Returning What will Render on Page 
return(
  <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="newsSearch">Search News:</label>
        <input 
        value={formQuery} 
        type="text" 
        placeholder="Keyword" 
        id="newsSearch" 
        name="newsSearch" 
        onChange={handleChange} />
        <button>Find me this keyword</button>
      </form>
      <button onClick={handleClearForm}>Back to Home Page</button>
    </>

)

}

export default Form; 