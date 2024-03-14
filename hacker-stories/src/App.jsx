import * as React from "react";

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem('key') || initialState
  );
  React.useEffect(() => {
    localStorage.setItem('key', value);
  }, [value, key]);

  return [value, setValue];

};

const InputWithLabel = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        value={props.value}
        onChange={props.onInputChange}
      ></input>
    </>
  );
};


const App = () => {
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
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };



  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id='search'
        label='Search'
        value={searchTerm}
        onInputChange={handleSearch}
      />



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


export default App