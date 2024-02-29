import * as React from "react";




const App=() => {
  const stories = [
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
  ]
  
  return(
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search />

      <hr />

      <List list={stories} />
      

    </div>
  )
  }

  const List = (prop) => (
    <ul>
      {prop.list.map((item) => (
          <Item key={item.objectID} item={item} />
      ))}
  </ul>
  );

  const Item = (prop) => (
    <li>
      <span>
        <a href={prop.item.url}>{prop.item.title}</a>
      </span>
      <span>{prop.item.author}</span>
      <span>{prop.item.num_comments}</span>
      <span>{prop.item.points}</span>
    </li>
    )

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return(
    <div>
      <lebel htmlFor="search">Search:</lebel>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>

    </div>
  );
}  


export default App