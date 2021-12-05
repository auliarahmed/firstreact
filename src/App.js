import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound"; 
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {

  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 899},
    {id: 3, title: 'Product 3', price: 899},
    {id: 4, title: 'Product 4', price: 899},
    {id: 5, title: 'Product 5', price: 899}
  ]);

  const clickMe = (name) => {
    console.log('clickyo: '+ name);
  } 

  const [title, setTitle] = useState("hellow");

  const changeTitle = () => {
    setTitle("title berubah");
  }

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  const [nama, setNama] = useState('Aulia');

  useEffect( () => {
    console.log('use Effect Running');
  }, [nama]);

  

  return (
    // <div>
    //   <h2>{title}</h2>
    //   <Header />
    //   <button onClick={ () => clickMe('aulia') }>Click ME</button>

    //   <button onClick={ changeTitle }>Click to change</button>
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.id}> {product.title} - {product.price}</li>
    //     ))}
    //   </ul>
      
    //   <button onClick={ () => setNama('Rahmat') } >Ubah Nama Nih</button>
    //   <p>Name: { nama }</p>

    //   <Router>
    //     <Routes>
    //       <Route path="/" caseSensitive={false} element={<ProductList products={products} deleteProduct={deleteProduct}/>}></Route>
    //       <Route path="/about" caseSensitive={false} element={<About/>}></Route>
    //       <Route path="/contact" caseSensitive={false} element={<Contact/>}></Route>
    //       <Route path="*" element={<NotFound/>}></Route>
    //     </Routes>
    //   </Router>
    // </div>

    <div className="container p-5">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route path="/" element={<ProductList />}>
                
              </Route>
              <Route path="/add" element={<AddProduct />}>
                
              </Route>
              <Route path="/edit/:id" element={<EditProduct />}>
                
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
