import { createContext } from 'react';
import { Action } from './Reducer';
export interface IProductState {
	image: string;
	productId: string;
	productName: string;
	price: number;
	quantity: number;
}
export interface IGlobalState {
	token: string;
	role: string;
	id: string;
	products: IProductState[];
}
export const initialState: IGlobalState = {
	token: '',
	role: '',
	id: '',
	products: [],
};
export const Store = createContext<{ state: IGlobalState; dispatch: React.Dispatch<Action> }>({
	state: initialState,
	dispatch: () => null,
});
