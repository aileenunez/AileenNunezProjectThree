import './App.css';
// import Input from './Input';
import {useState, useEffect} from 'react'; 
import axios from 'axios';
import Articles from './Articles';
import categories from './category'

function App() {
  const [search, setSearch] = useState('')
  const [news, setNews] = useState([])
const [userSelect, setUserSelect] = useState('')

const handleUserChoice = function(e){
  e.preventDefault()
  setUserSelect(e.target.value)
}

  useEffect(function(){
    const apiKey = "bfad15ce5ca44d5bb1289592477dc174"
    axios({
      url: "https://newsapi.org/v2/top-headlines", 
      method: "GET", 
      responseType: "json", 
      params:{
        apiKey: apiKey, 
        language: 'en',
        pageSize: 3, 
        q: search, 
        category: userSelect
      }, 
    }).then(function(response){
      console.log(response.data.articles)
      setNews(response.data.articles)
    })

    
  }, [search, userSelect]); 


  return (
    <div className="App">
      <header>
      <nav>
      <ul>
      {
        categories.map(function(category){
          return(
              <li><button value={category} onClick={handleUserChoice}>{category}</button></li>
          )
        })
      }
      </ul>
      </nav>
      <h1>The Connect</h1>
      <p>Daily News Website, search news by category through top navigation bar or keyword through search bar. </p>
      </header>
      <form>
      <ul>
      </ul>
      <label htmlFor="newsSearch">Search News:</label>
      <input type="text" placeholder="news category" id="newsSearch" name="newsSearch" onChange={function(event){
         setSearch(event.target.value)
      }}/>
      <button type="submit" onSubmit={function(event){
        event.preventDefault()
        setSearch("")
      }}>NEWS! </button>
      </form>
      {
        news.map(function(articlez){ 
          return(
            <section key={articlez.title}>
          <Articles
          title = {articlez.title}
          img = {articlez.urlToImage}
          date = {new Date (articlez.publishedAt).toDateString()}
          alt = {articlez.description}
          url = {articlez.url}
          content = {articlez.content}
          />
          </section>
          )})
    
      }
      <footer>Created at Juno College Technology</footer>
     </div> 
  );
}

export default App;

