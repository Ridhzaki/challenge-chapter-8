import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FormBiodata from './Pages/FormBiodata';
import Home from './Pages/Home';
import Todos from './Pages/Todos';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path="/biodata" element={<FormBiodata />} />
      </Routes>
    </>
  );
}
