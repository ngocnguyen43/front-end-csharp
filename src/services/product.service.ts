import { IProduct } from '@components';
import { Axios } from '@config';
import { IResponse } from '@hooks';

export const GetAllProduct = async (): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/api/product',
	});
};
export const UpdateProduct = async (product: IProduct, token: string): Promise<IResponse> => {
	const data = JSON.stringify(product);
	return await Axios({
		method: 'PATCH',
		url: '/api/product',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		data: data,
	});
};
export const GetOneProduct = async (id: string, token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/api/product/' + id,
		headers: {
			Authorization: 'Bearer ' + token,
		},
	});
};
