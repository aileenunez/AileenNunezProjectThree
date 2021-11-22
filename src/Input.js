function Input(){

    return(
        <form>
        <label>Search News:</label>
        <input type="text" placeholder="news category" id="userInput" name="userInput" onChange={function(event){
           setSearch(event.target.value)
        }}/>
        <button type="submit" onSubmit={function(event){
          event.preventDefault()
          setSearch('')
        }}>NEWS!</button>
        </form>
    )
}

export default Input 