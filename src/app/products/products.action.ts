import {Action} from '@ngrx/store';
export enum ProductsActionTypes {
  Add = '[Product Component] Add',
  Remove = '[Product Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class ProductAdd implements ActionEx {
  readonly type = ProductsActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class ProductRemove implements ActionEx {
  readonly type = ProductsActionTypes.Remove;
  constructor(public payload: any) {
  }
}