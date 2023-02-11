import { BrowserRouter ,Routes ,Route } from 'react-router-dom';

// Component Importing
import Home from './Components/Home/Home';
import List from './Components/List/List';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Add from './Components/Add/Add';
import Chat from './Components/Chat/Chat';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/List' element={<List />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/Chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
