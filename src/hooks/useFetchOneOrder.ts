import { IProduct } from '@components';
import { StoreContext } from '@store';
import { useState, useContext, useEffect } from 'react';
import { IResponse } from './interface';
import { GetOneOrder } from '@service';

interface IPOrder extends Omit<IProduct, 'id'> {
	productId: IProduct['id'];
}
// "orderId": "2ade590b-2a26-401f-a1db-d3e2ee0080a1",
//         "userId": "6c656b14-975d-47c6-9d0c-b225cbde5b3b",
//         "product": [
//           {
//             "productId": "8616f875-79eb-46e3-9b4c-fb04bcb60b75",
//             "productName": "Lorem",
export interface IOResponse {
	orderId: string;
	userId: string;
	date: string;
	total: number;
	product: IPOrder[];
}
export const useFetchOneOrder = (id: string) => {
	const [result, setResult] = useState<IOResponse[]>();
	const [error, setError] = useState<unknown>();
	const [loading, setLoading] = useState(false);
	const { state } = useContext(StoreContext);
	if (!state.role || !state.token) throw new Error('');
	let order: IResponse;
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				order = await GetOneOrder(state.token, id);
				setResult(order.body.data as IOResponse[]);
			} catch (error: unknown) {
				setError(error);
			} finally {
				order !== undefined && setLoading(false);
			}
		})();
	}, [id]);
	return { result, error, loading };
};
