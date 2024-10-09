import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import TaskManagement from './components/TaskManagement';
import ProjectForm from './components/ProjectForm'; // Import the project form

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/tasks" element={<TaskManagement />} />
        <Route path="/create-project" element={<ProjectForm />} /> {/* New route for the project form */}
      </Routes>
    </>
  );
}

export default App;
