import { useState } from 'react'
import './App.css'
import ProductContainer from './ProductContainer';
import ProductOnCartContainer from './ProductOnCartContainer';

type Product = { id: string, name: string, description: string, price: number, amount: number };
const initialProductsList: Product[] = [{ id: crypto.randomUUID(), name: 'Prod1', description: 'Desc1', price: 200, amount: 1 }, { id: crypto.randomUUID(), name: 'Prod2', description: 'Desc2', price: 89.99, amount: 1 }];
function App() {
  const [shoppingCart, setShoppingCart] = useState<Array<Product>>([]);
  const [productsList, setProductsList] = useState<Array<Product>>(initialProductsList);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <main>
      <div className="cart_button btn" onClick={() => setIsCartOpen(!isCartOpen)}>&#128722;</div>
      {isCartOpen &&
        <div className='cart_modal_backdrop modal_backdrop' onClick={() => setIsCartOpen(!isCartOpen)}>
          <div className="close_modal_button btn" onClick={() => setIsCartOpen(!isCartOpen)}>Close</div>
          <div className="cart_modal_content modal_content" onClick={(e) => e.stopPropagation()}>
            {shoppingCart.length > 0 && shoppingCart.map(productOnCart => {
              return <ProductOnCartContainer
                productName={productOnCart.name}
                productAmount={productOnCart.amount}
                decreaseAmount={() => { }}
                increaseAmount={() => { }}
                productPrice={productOnCart.price}
                removeFromCart={() => { }}
                key={productOnCart.id}
              />
            })}
            {shoppingCart.length <= 0 && <p>Empty</p>}
          </div>
        </div>}
      {productsList.map(product => {
        return <ProductContainer
          productID={product.id}
          productName={product.name}
          productDescription={product.description}
          productPrice={product.price}
          addToCart={() => {//chatgpt aqui, nao conhecia o find
            setShoppingCart(prev => {
              const hasProduct = prev.find(p => p.id === product.id);
              if (hasProduct) {
                return prev.map(item =>
                  item.id === product.id ? { ...item, amount: item.amount + 1 } : item
                );
              } else {
                return [...prev, { ...product, amount: 1 }];
              }
            });
          }}
          key={product.id}
        />
      })}
    </main>
  )
}

export default App
