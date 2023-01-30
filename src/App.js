import './App.css';
import getData from './api/graphql';
import { useEffect, useState } from 'react';

function App() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setRepo(data.repository.discussions.edges.map((el) => el.node));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(repo);

  return <div className="App"></div>;
}

export default App;
