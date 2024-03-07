import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage'
import SearchPage from './Pages/SearchPage/SearchPage'
import Footer from './Pages/Footer/Footer';
import { AppContext } from './Contexts/AppContext.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserDetailsPage from './Pages/UserDetailsPage/UserDetailsPage.js';

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  const token = "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";
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const searchUsers = (keyword) => {
    axios
      .get("https://api.github.com/users", config)
      .then((response) => {
        setUsers(response.data);
      })
  };


  const getUser = (userName) => {
    axios
      .get(`https://api.github.com/users/${userName}`, config)
      .then(response => { setUser(response.data) })
  };

  const getRepos = (userName) => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`, config)
      .then(response => { setUserRepos(response.data) })
  };

  useEffect(() => {
    searchUsers();
  }, []);
  return (
    <>
      <AppContext.Provider value={{ users, getUser, user, userRepos, getRepos }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/getuser/:login' element={<UserDetailsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
