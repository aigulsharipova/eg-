import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import TableUser from './components/Table/table';
import './App.scss';

const api_link = 'https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo';

function App() {

  useEffect(()=>{

    axios.get(api_link)
    .then(function (response) {
      setData(response?.data?.results);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, []);

  const [data, setData] = useState([]);

  return (
    <section className="app">
      <div className="container">
        <h1 className="text-center mb-3 app__title">Users</h1>
          <TableUser users={data}></TableUser>
      </div>
    </section>
  );
}

export default App;