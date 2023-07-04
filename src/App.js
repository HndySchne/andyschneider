import { Routes, Route } from 'react-router-dom';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Stacks from './component/Stacks/Stacks'; 
import Degree from './component/Degree/Degree';
import Experience from './component/Experience/Experience';
import Hobby from './component/Hobby/Hobby';
import Contact from './component/Contact/index';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path='/andyschneider' element={<Home />} />
        <Route path='/andyschneider/Stacks' element={<Stacks />} />
        <Route path='/andyschneider/Degree' element={<Degree />} />
        <Route path='/andyschneider/Experience' element={<Experience />} />
        <Route path='/andyschneider/Hobby' element={<Hobby />} />
        <Route path='/andyschneider/Contact' element={<Contact />} />
        {/* <Route path='/cv-andy-schneider/Devweb' element={<Devweb />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
