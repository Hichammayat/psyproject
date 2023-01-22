
import './App.css'
import Main from './components/Main/Main';
import {BrowserRouter , Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';


import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';


import SideBar from './components/profile_User/Sidebar/SideBar';
import Chat from './components/profile_User/Sidebar/ProfilePages/message/Messages';
import ChatPsy from './components/ProfilePsy/psyPages/Chat/ChatPsy';

import PsyInscription from './components/PsyInscription/PsyInscription';
import LoginPsy from './components/PsyInscription/LoginPsy';
import Questionnaire from './components/Questionnaire/Questionnaire';
import Hellopage from './components/Questionnaire/HelloPage/Hellopage';
import Blog from './components/Blog/Blog';
import SinglePost from './components/Blog/SinglePost/SinglePost';
import Write from './components/ProfilePsy/psyPages/Write/Write';
import SideBarPsy from './components/ProfilePsy/SidebarPsy/SidebarPsy';
import PsyList from './components/profile_User/Sidebar/ProfilePages/psyList/PsyList';
import Request from './components/ProfilePsy/psyPages/request/Request';
import Setting from './components/ProfilePsy/psyPages/setting/setting';



function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
     <SideBarPsy/>
     <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Header" element={<Header/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/SinglePost" element={<SinglePost/>} />
      
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/PsyInscription" element={<PsyInscription/>} />
      <Route path="/LoginPsy" element={<LoginPsy/>} />
      <Route path="/Questionnaire" element={<Questionnaire/>} />
      <Route path="/Hellopage" element={<Hellopage/>} />
      <Route path="/SideBar" element={<SideBar/>} />
      <Route path="/Chat" element={<Chat/>} />
      <Route path="/PsyList" element={<PsyList/>} />
      
      
      <Route path="/Write" element={<Write/>} />
      <Route path="/ChatPsy" element={<ChatPsy/>} />
      <Route path="/Request" element={<Request/>} />
      <Route path="/Setting" element={<Setting/>} />
      
      
     </Routes>
     
   
    </BrowserRouter>
    </div>
    
  );
}

export default App;
