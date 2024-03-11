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

  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') ||'React');

  React.useEffect(()=>{
    localStorage.setItem('search',searchTerm)
  })

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search',event.target.value)
  };

  const searchedStories = stories.filter(function(story){
    return story.title.includes(searchTerm);
  })

  return(
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
      

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

const Search = (prop) =>(
    <div>
      <lebel htmlFor="search">Search:</lebel>
      <input id="search" type="text" value={prop.search}  onChange={prop.onSearch} />

     
    </div>
  );



export default App