import './App.css';
// import Input from './Input';
import {useState, useEffect} from 'react'; 
import axios from 'axios';
import Articles from './Articles';


function App() {
  const [search, setSearch] = useState('')
  const [news, setNews] = useState([])

  useEffect(function(){
    const apiKey = "12ad51148fe142779eebb49a36ad4a02"
    axios({
      url: "https://newsapi.org/v2/top-headlines", 
      method: "GET", 
      dataResponse: "json", 
      params:{
        apiKey: apiKey, 
        language: 'en',
        pageSize: 1, 
        q: search, 
      }, 
    }).then(function(response){
      console.log(response.data.articles)
      setNews(response.data.articles)
    })

   
  }, [search]); 

  return (
    
    <div className="App">
      <h1>The Connect</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates qui dolores sit numquam quisquam architecto, magni consequuntur quo libero ut voluptate necessitatibus eveniet doloribus eaque. Voluptates modi quos in?</p>
      <form>
      <label for="newsSearch">Search News:</label>
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

