
import './App.css'
import Main from './components/Main/Main';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';


import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';


import SideBar from './components/profile_User/Sidebar/SideBar';
import Chat from './components/profile_User/Sidebar/ProfilePages/Messages';
import ChatPsy from './components/ProfilePsy/psyPages/Chat/ChatPsy';

import PsyInscription from './components/PsyInscription/PsyInscription';
import LoginPsy from './components/PsyInscription/LoginPsy';
import Questionnaire from './components/Questionnaire/Questionnaire';
import Hellopage from './components/Questionnaire/HelloPage/Hellopage';
import Information from './components/profile_User/Sidebar/ProfilePages/Information';
import Blog from './components/Blog/Blog';
import SinglePost from './components/Blog/SinglePost/SinglePost';
import Write from './components/ProfilePsy/psyPages/Write/Write';
import SideBarPsy from './components/ProfilePsy/SidebarPsy/SidebarPsy';
import PsyList from './components/profile_User/Sidebar/ProfilePages/PsyList';


function App() {
  return (
    <>
    <Router>
    <div className="App">
     <> 
     <Header/>
     <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/SinglePost" element={<SinglePost/>} />
      <Route path="/Write" element={<Write/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      
      <Route path="/PsyInscription" element={<PsyInscription/>} />
      <Route path="/LoginPsy" element={<LoginPsy/>} />
      <Route path="/Questionnaire" element={<Questionnaire/>} />
      
      <Route path="/Hellopage" element={<Hellopage/>} />
      <Route path="/SideBar" element={<SideBar/>} />
      <Route path="/SideBarPsy" element={<SideBarPsy/>} />
       
      <Route path="/Information" element={<Information/>} />
      <Route path="/Chat" element={<Chat/>} />
      <Route path="/ChatPsy" element={<ChatPsy/>} />
      <Route path="/PsyList" element={<PsyList/>} />
     </Routes>
     

     
      
      
    </>
    </div>
    </Router>
    
    
    </>
  );
}

export default App;
