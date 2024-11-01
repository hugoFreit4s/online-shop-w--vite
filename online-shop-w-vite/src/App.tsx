import { useState } from 'react'
import './App.css'
import ProductContainer from './ProductContainer';

type Product = { id: string, name: string, description: string, price: number, amount: number };
function App() {
  const [cartShop, setCartShop] = useState<Array<Product>>([]);
  const [productsList, setProductsList] = useState<Array<Product>>([{ id: crypto.randomUUID(), name: 'Prod1', description: 'Desc1', price: 200, amount: 0 }]);

  return (
    <main>
      {productsList.map(product => {
        return <ProductContainer
          productID={product.id}
          productName={product.name}
          productDescription={product.description}
          productPrice={product.price}
          addToCart={() => {
            const cartHaveProduct = cartShop.map(productToFind => {
              return productToFind.id === product.id;
            });
            if (cartHaveProduct.length <= 0) {
              setCartShop(prev => {
                const aux = [...prev, product];
                const index = aux.findIndex(i => i.id === product.id);
                aux[index].amount = 1;
                return aux;
              });
              console.log(cartShop)
            } else {
              setCartShop(prev => {
                const aux = [...prev];
                aux[aux.indexOf(product)].amount++;
                return aux;
              });
              console.log(cartShop)
            }
          }}
        />
      })}
    </main>
  )
}

export default App
