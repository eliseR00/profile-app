import { useState, useContext, useCallback, lazy, Suspense } from 'react';
import './App.css'

import PageContainer from './components/PageContainer.jsx';
import Navbar from './components/Navbar.jsx';
import women from "./assets/women.png";
import man from "./assets/man.png";
import Wrapper from './components/Wrapper.jsx';
import Filters from './components/Filters.jsx';
import AddProfileForm from './components/AddProfileForm.jsx';
import './components/toggleBtn.module.css';
import './components/pageContainer.module.css';
//import FetchedProfiles from './components/FetchedProfiles.jsx';


import { HashRouter, Routes, Route, Link} from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AddProfilePage from './pages/AddProfilePage.jsx';
import OtherProfilesPage from './pages/OtherProfilesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import ProfileDetailPage from './pages/ProfileDetailPage.jsx';  

import useFilters from './hooks/useFilters.js';

import  ModeContext  from './context/ModeContext.jsx';

import useFilteredProfiles from './hooks/useFilteredProfiles.js';

const FetchProfilePage = lazy(() => import('./pages/FetchedProfilePage.jsx'));

function App() {

  const { theme, toggleTheme } = useContext(ModeContext);

 
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Ava", title: "UX Designer", email: "", bio: "", image: women},
    { id: 2, name: "Bradley", title: "Web Designer", email: "", bio: "", image: man},
    { id: 3, name: "Chris", title: "Software Engineer", email: "", bio: "", image: man},
    { id: 4, name: "Diana", title: "Product Manager", email: "", bio: "", image: women}
  ]);

  const titles = [...new Set (profiles.map(profile => profile.title))];  //creates title array with unique values

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(prev => !prev);
    console.log(clicked);
  };

  // const [title, setTitle] = useState("");
  // const [name, setName] = useState("");


  // const handleChangeTitle = useCallback((event) => {
  //   setTitle(event.target.value);
  //   console.log(event.target.value);
  // }, []);

  // const handleSearch = useCallback((event) => {
  //   setName(event.target.value);
  //   console.log(event.target.value === "");
  // }, []);

  // const handleClear = useCallback(() => {
  //   setTitle("");
  //   setName("");
  // }, []);

  const {title, name, handleChangeTitle, handleSearch, handleClear} = useFilters();

  const filteredProfiles = useFilteredProfiles(profiles, title, name);

   const updateProfiles = (profile) => {
    setProfiles(pre => [...pre, profile]);
   }

   const onAddProfile = (profile) => {
    setProfiles(pre => [...pre, profile]);
   }


  return (

    

  <PageContainer> 
      <HashRouter>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles}/>} />
        <Route path="/other-profiles" element={<OtherProfilesPage />} />
        <Route path="/fetched-profiles" element={<Suspense fallback="Loading..."><FetchProfilePage /></Suspense>} />
        <Route path="/other-profiles/profile/:id" element={<ProfileDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </PageContainer>
    

    
          
    );
}

export default App
