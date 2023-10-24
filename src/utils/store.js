import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;


















/**
 * -createStore
 * -configureStore-from the core react toolkit
 *
 * -Provide my store to app
 * -<Provider store={store}/>-import from react/redux
 *
 *
 *
 * -Slice
 * -===>comes from reactToolKit===>
 * createSlice({
 *         name:
 *         initial State
 *         reducers:{
 *          addItem:(state, action)=>{state=actions.payLoad}
 *         }
 *         })
 * export const{addItem,....}=cartSlice.actions
 * export default reducer;
 *
 * put that slice into the store
 * -{
 *    reducer:{
 *             store
 * }
 * }
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
