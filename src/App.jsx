import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchAppBar from "./components/navbar/navbar"
import Home from "./pages/principal"
import Products from "./pages/products"
import Details from "./pages/details"
import Favorites from "./pages/favorites"
import Cart from "./pages/cart"
import Footer from "./components/footer/footer"
import { CartContextProvider } from "./context/contextCart"
import { FavoritesContextProvider } from "./context/contextFavorites"

function App() {

  return (
    <CartContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <SearchAppBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/productos" element={<Products/>} />
            <Route path="/productos/:id" element={<Details/>} />
            <Route path="/favoritos" element={<Favorites/>} />
            <Route path="/carro" element={<Cart/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </FavoritesContextProvider>
    </CartContextProvider>
  )
}

export default App
