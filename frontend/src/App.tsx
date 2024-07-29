import './App.css';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='m-0 p-0 bg-slate-200 bg-center bg-cover' style={{ backgroundImage: "url(/bgavif)" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}




export default App;
