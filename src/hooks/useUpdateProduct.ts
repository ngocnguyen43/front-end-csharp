import { StoreContext } from '@store';
import { useContext, useEffect } from 'react';
import { IProduct } from '@components';
import { UpdateProduct } from '@service';

export const useUpdateProduct = () => {
	const { state } = useContext(StoreContext);
	if (!state.role || !state.token || state.role !== 'admin') throw new Error('');
	const execute = async (product: IProduct) => {
		console.log(product);
		try {
			await UpdateProduct(product, state.token);
		} catch (exeption) {
			console.log(exeption);
		}
	};
	return { execute: execute };
};
