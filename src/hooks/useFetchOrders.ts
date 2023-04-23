import { GetAllOrders, IOrderResponse } from '@service';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '@store';
import { IResponse } from './interface';

export const useFetchOrders = () => {
	const [result, setResult] = useState<IOrderResponse[]>();
	const [error, setError] = useState<unknown>();
	const [loading, setLoading] = useState(false);
	const { state } = useContext(StoreContext);
	if (!state.role || !state.token) throw new Error('');
	let orders: IResponse;
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				orders = await GetAllOrders(state.token);
				setResult(orders.body.data as IOrderResponse[]);
			} catch (error: unknown) {
				setError(error);
			} finally {
				orders !== undefined && setLoading(false);
			}
		})();
	}, []);
	return { result, error, loading };
};
