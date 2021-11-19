import './App.css';
import {useState, useEffect} from 'react'; 


function App() {
  return (
    
    <div className="App">
      <h1>The Connect</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates qui dolores sit numquam quisquam architecto, magni consequuntur quo libero ut voluptate necessitatibus eveniet doloribus eaque. Voluptates modi quos in?</p>
      <form action="">
        <input type="text" placeholder="news category"/>
        <button type="submit">NEWS!</button>
      </form>
      <div className='story'>
        <p>Title</p>
        <img src="http://placekitten.com/100/100" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat quasi consequatur molestiae perferendis ratione ipsam eligendi beatae explicabo tenetur facilis quod accusantium itaque vero commodi velit, qui similique maxime?</p>
      </div>
      <div className='story'>
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat quasi consequatur molestiae perferendis ratione ipsam eligendi beatae explicabo tenetur facilis quod accusantium itaque vero commodi velit, qui similique maxime?</p>
        <img src="http://placekitten.com/100/100" alt="" />
      </div>
      <div className='story'>
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat quasi consequatur molestiae perferendis ratione ipsam eligendi beatae explicabo tenetur facilis quod accusantium itaque vero commodi velit, qui similique maxime?</p>
        <img src="http://placekitten.com/100/100" alt="" />
      </div>
      <footer>Created at Juno College Technology</footer>
    </div>
  );
}

export default App;
