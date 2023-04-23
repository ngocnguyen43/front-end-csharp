import { CreateOrder, IOrder } from '@service';
import { useState } from 'react';

export const useCreateOrder = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const execute = async (data: IOrder) => {
		try {
			setLoading(true);
			await CreateOrder(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(true);
		}
	};
	return { execute: execute, loading };
};
