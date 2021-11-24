import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from './Articles';
import categories from './category'
import Footer from './Footer';
import Form from './Form'


function App() {
//setting up initial states 
  const [search, setSearch] = useState(''); 
  const [news, setNews] = useState([]); 
  const [userSelect, setUserSelect] = useState(''); 

//Event handler Functions 
  const handleUserChoice = function (e) {
    setSearch("")
    e.preventDefault(); 
    setUserSelect(e.target.value); 
  }; 

//Use Effect to listen to changes to page and perform this action once the overall state of the page is changed in some way 
  useEffect(function () {
    const apiKey = "SIWrEacA2Futxp7zNsPEXpiVLU9JH0408Ot04O7L"
    axios({
      url: "https://api.thenewsapi.com/v1/news/top",
      method: "GET",
      responseType: "json",
      params: {
        api_token: apiKey,
        language: "en",
        search: search,
        categories: userSelect,
      },
    }).then(function(response) {
      // WILL HAVE TO DELETE THIS 
      console.log(response.data.data)
      response.data.data.length ?
      setNews(response.data.data)
      : alert('No Curent Data on this Subject! Please Try again :)')
    })
  //add dependency array in order to stop triggering infinite useEffect function 
  }, [search, userSelect]);

  //What do we want to return and render on website 
  return (
    <div className="App">
      {/* START OF HEADER SECTION  */}
      <header>
        <nav>
          <ul>
            {
              categories.map(function (category) {
                return (
                  <li key={category}><button 
                  value={category} 
                  onClick={handleUserChoice}>{category}</button></li>
                )
              })
            }
          </ul>
        </nav>
        <h1>The Connect</h1>
        <p>Daily News Website, search news by category through top navigation bar or keyword through search bar. </p>
      </header>
      {/* END OF HEADER SECTION  */}
      <main>
      {/* START OF FORM SECTION  */}
      <Form 
      search={search} 
      setSearch={setSearch}
      setUserSelect={setUserSelect}
      />
      {/* END OF FORM SECTION  */}
      {/* START OF NEWS ARTICLES SECTION  */}
      <section className="storyContainer">
      {
        news.map(function(singularNews) {
          return (
            <div 
             key={singularNews.uuid}>
              <Articles
                title={singularNews.title}
                img={singularNews.image_url}
                date={new Date(singularNews.published_at).toDateString()}
                source ={singularNews.source}
                alt={singularNews.snippet}
                url={singularNews.url}
                content={singularNews.description}
              />
            </div>
          )
        })
      }
      </section>
      {/* END OF NEWS ARTICLES SECTION  */}
      </main>
      {/* END OF MAIN AND START OF FOOTER  */}
      <Footer />
    </div>
  );
}
export default App;

