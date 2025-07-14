"use client";

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import type { Product } from '@/lib/mock-data';

export interface CartItem extends Product {
  quantity: number;
  productId: string;
  variantName?: string;
}

type StoreState = {
  cart: CartItem[];
  wishlist: Product[];
};

type StoreAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_WISHLIST_ITEM'; payload: Product }
  | { type: 'SET_STATE'; payload: StoreState };


const initialState: StoreState = {
  cart: [],
  wishlist: [],
};

const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY': {
       if (action.payload.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    }
    case 'TOGGLE_WISHLIST_ITEM': {
      const isInWishlist = state.wishlist.some(item => item.id === action.payload.id);
      if (isInWishlist) {
        return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id) };
      }
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
    case 'SET_STATE':
        return action.payload;
    default:
      return state;
  }
};

type StoreContextType = {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    try {
      const storedState = localStorage.getItem('storeState');
      if (storedState) {
        dispatch({ type: 'SET_STATE', payload: JSON.parse(storedState) });
      }
    } catch (error) {
        console.error("Could not load state from local storage", error)
    }
  }, []);

  useEffect(() => {
    try {
        localStorage.setItem('storeState', JSON.stringify(state));
    } catch(error) {
        console.error("Could not save state to local storage", error)
    }
  }, [state]);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (id: string) => dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  const updateQuantity = (id: string, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const addToWishlist = (product: Product) => dispatch({ type: 'TOGGLE_WISHLIST_ITEM', payload: product });
  const isInWishlist = (productId: string) => state.wishlist.some(item => item.id === productId);

  return (
    <StoreContext.Provider value={{ cart: state.cart, wishlist: state.wishlist, addToCart, removeFromCart, updateQuantity, addToWishlist, isInWishlist }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
