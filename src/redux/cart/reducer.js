import {createSlice} from "@reduxjs/toolkit";
import {getCartFromLocaleStorage} from './../../utilites/helpers/helpers';
import {getNews} from "../../utilites/api/api";
import {parseNews} from "../../hooks/parsers/parser";
const savedCart = getCartFromLocaleStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:savedCart,
        favourites:[],
    },
    reducers:{
        setItemInCart: (state,action) => {

            state.itemsInCart.push(action.payload)
        },
        setFavourite: (state,action) => {

            state.favourites.push(action.payload)
        },
        deleteItemFromCart:(state,action) =>{
            state.itemsInCart = state.itemsInCart.filter(elem => elem.article !== action.payload)
        },
        deleteFavourite:(state,action) =>{
            state.favourites = state.favourites.filter(elem => elem.article !== action.payload.article)
        },
        updateTotalPrice:(state,action) =>{
            state.totalPrice = state.totalPrice + action.payload;
        },
        updateFavourite:(state,action) =>{
            state.itemsInCart = state.favourites.map(elem => elem.article === action.payload.article ?
                action.payload : elem)
        },
        updateCount:(state,action) => {
            state.itemsInCart = state.itemsInCart.map(elem => elem.article === action.payload.article ?
                action.payload : elem
            )

        } ,
        updateTime:(state,action) => {
            state.itemsInCart = state.itemsInCart.map(elem => elem.id === action.payload.id ?
                action.payload : elem )
        },
        saveOnLocalStorage:(state,action) =>{
            state.itemsInCart = state.itemsInCart = savedCart;
        },
        clean:(state) =>{
            state.itemsInCart = [];
        }

    }
});

export const {IncreaseCount,deleteFavourite,setFavourite,clean,saveOnLocalStorage,updateTime,updateCount,updateTotalPrice,deleteItemFromCart,setItemInCart} = cartSlice.actions;
export default cartSlice.reducer;
export const initialState = cartSlice.getInitialState;