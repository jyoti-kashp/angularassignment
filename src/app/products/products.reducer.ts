import {ActionEx, ProductsActionTypes} from './products.action';
export const initialState = [
    {productName:"PatalanJali Aloe vera Gel", price:'200'},
    {productName:"Ayush Fase Wash", price:'200'},
    {productName:"Biotic Sun Screen", price:'200'},
    {productName:"Lakme CC Cream", price:'200'},
    {productName:"Tata Salt", price:'200'},
    {productName:"Dabur Tooth Paste", price:'200'}
];
export function ProductsReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case ProductsActionTypes.Add:
      return [...state, action.payload];
    case ProductsActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}