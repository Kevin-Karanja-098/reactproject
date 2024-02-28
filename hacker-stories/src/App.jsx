//import * as React from "react";

const List = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];
function App() {
  
  return(
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search />

      <hr />

      <List />
      

    </div>
  )
}

function Search() {
  return(
    <div>
      <lebel htmlFor="search">Search:</lebel>
      <input id="search" type="text" />
    </div>
  );
}

export default App