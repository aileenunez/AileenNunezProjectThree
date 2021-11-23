import { useState } from "react";

function Form({setSearch}){

  const [formQuery, setFormQuery] = useState('')

    const handleChange = function(event){
      setFormQuery(event.target.value)
    }
    const handleSubmit = function(event){
      event.preventDefault()
      setSearch(formQuery)
    }
    const handleClearForm = function(){
      setFormQuery("")
      setSearch("")
    }

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