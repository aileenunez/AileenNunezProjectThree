import './App.css';
import Input from './Input';
import {useState, useEffect} from 'react'; 
import axios from 'axios';
import Articles from './Articles';


function App() {
  const [news, setNews] = useState([])
  useEffect(function(){
    const apiKey = "bfad15ce5ca44d5bb1289592477dc174"
    axios({
      url: "https://newsapi.org/v2/top-headlines", 
      method: "GET", 
      dataResponse: "json", 
      params:{
        apiKey: apiKey, 
        language: 'en',
      }, 
    }).then(function(response){
      console.log(response.data.articles)
      setNews(response.data.articles)
    })
   
  }, []); 

  return (
    
    <div className="App">
      <h1>The Connect</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates qui dolores sit numquam quisquam architecto, magni consequuntur quo libero ut voluptate necessitatibus eveniet doloribus eaque. Voluptates modi quos in?</p>
      <Input/>
      {
        news.map(function(articlez){ 
          return(
            <>
          <Articles
          title = {articlez.title}
          img = {articlez.urlToImage}
          alt = {articlez.title}
          url = {articlez.url}
          description = {articlez.description}
          author = {articlez.author}
          />
          </>
          )})
    
      }
      <footer>Created at Juno College Technology</footer>
     </div> 
  );
}

export default App;

