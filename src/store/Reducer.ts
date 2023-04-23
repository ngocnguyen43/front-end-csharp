import { ADD_PRODUCT_TO_CARD, REMOVE_PRODUCTS, USER_LOG_IN, USER_LOG_OUT } from './Constant';
import { IGlobalState, IProductState, initialState } from './Store';

export interface Action {
	type: string;
	payload?: {
		token: string;
		role: string;
		id: string;
		product?: IProductState;
		quantity?: number;
	};
}
export const Reducer = (state = initialState, action: Action): IGlobalState => {
	switch (action.type) {
		case USER_LOG_IN:
			return {
				...state,
				token: action.payload?.token,
				role: action.payload?.role,
				id: action.payload?.id,
			} as IGlobalState;

		case USER_LOG_OUT:
			return {
				...state,
				token: '',
				role: '',
				id: '',
			};
		case ADD_PRODUCT_TO_CARD: {
			if (action.payload?.product) {
				return {
					...state,
					products: [...state.products, action.payload?.product],
				};
			} else {
				return {
					...state,
				};
			}
		}
		case REMOVE_PRODUCTS:
			return {
				...state,
				products: [],
			};
		default:
			return state;
	}
};
