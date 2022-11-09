import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AllProducts } from './views/AllProducts'
import { OneProduct } from './views/OneProduct'
import { NotFound } from './views/NotFound';
import { EditProduct } from './views/EditProduct';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Navigate to= '/products' replace/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<OneProduct/>}/>
        <Route path='/products/update/:id' element={<EditProduct/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
