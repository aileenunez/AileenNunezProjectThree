import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from './Articles';
import categories from './categories'
import Footer from './Footer';
import Form from './Form'


function App() {
  //setting up initial states 
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);
  const [userSelect, setUserSelect] = useState('');

  //Event handler Function for Category buttons 
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
    }).then(function (response) {
      //Display news to user or alert in the case there is no data to display
      response.data.data.length ?
        setNews(response.data.data)
        : alert('API call limit reached for day! Please Try again tomorrow:)')
    })
    //add dependency array in order to stop triggering infinite useEffect function 
  }, [search, userSelect]);

  //What do we want to return and render on website 
  return (
    <div className="App">
      {/* START OF HEADER SECTION  */}
      <header className="wrapper">
        {/* START OF FORM SECTION  */}
        <Form
          search={search}
          setSearch={setSearch}
          setUserSelect={setUserSelect}
        />
        {/* END OF FORM SECTION  */}
        <h1>The Connect<span>.</span></h1>
        <p>Daily News Website: look up news by category through navigation bar below or by keyword through search bar above.</p>
      </header>
      {/* START OF NAV SECTION  */}
      <nav className="topNav">
        <ul>
          {
            categories.map(function (category) {
              return (
                <li key={category}><button
                  value={category}
                  onClick={handleUserChoice}>|{category}</button></li>
              )
            })
          }
        </ul>
      </nav>
      {/* END OF NAV SECTION  */}
      {/* END OF HEADER SECTION  */}
      {/* START OF MAIN SECTION  */}
      <main>
        {/* START OF NEWS ARTICLES SECTION  */}
        <section className="storyContainer wrapper">
          {
            // Performing map function to loop through array of news objects 
            news.map(function (singularNews) {
              return (
                // Setting up information for article section component
                <Articles
                  key={singularNews.uuid}
                  title={singularNews.title}
                  img={singularNews.image_url}
                  date={new Date(singularNews.published_at).toDateString()}
                  source={singularNews.source}
                  url={singularNews.url}
                  content={singularNews.description}
                />
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

