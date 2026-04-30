import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProductsProps } from "../pages/home/home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (products: CartProps) => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductsProps) {
    // Adiciona no carrinho e verificar se já existe no carrinho
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      // adicionar apenas quantidade e calculamos o tolta no carrinho.
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    // Adicionar o item no carrinho

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(products: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === products.id);

    if (cart[indexItem]?.amount > 1) {
      // Diminuir apenas um amount do que tem no carrinho
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== products.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartProps[]) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const resultFormated = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRl",
    });
    setTotal(resultFormated);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          cartAmount: cart.length,
          addItemCart,
          removeItemCart,
          total,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
