import { useEffect, useState } from 'react';
import { GetAllProduct } from '@service';
import { IResponse } from './interface';
import { IProduct } from '@components';

export const useProduct = (): [IProduct[] | undefined, unknown, boolean] => {
	const [result, setResult] = useState<IProduct[]>();
	const [error, setError] = useState<unknown>();
	const [loading, setLoading] = useState(false);
	let product: IResponse;
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				product = await GetAllProduct();
				setResult(product.body.data as IProduct[]);
			} catch (error: unknown) {
				setError(error);
			} finally {
				product !== undefined && setLoading(false);
			}
		})();
	}, []);
	return [result, error, loading];
};
