import { Axios } from '@config';
import { IResponse } from '@hooks';

export interface IOrderProduct {
	productId: string;
	quantity: number;
}
export interface IOrder {
	Id: string;
	userId: string;
	orderProducts: IOrderProduct[];
}
export const CreateOrder = async (order: IOrder) => {
	const data = JSON.stringify(order);
	return await Axios({
		method: 'POST',
		url: '/api/order',
		maxBodyLength: Infinity,
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	});
};
// "orderId": "2ade590b-2a26-401f-a1db-d3e2ee0080a1",
//                 "userId": "6c656b14-975d-47c6-9d0c-b225cbde5b3b",
//                 "date": "2023-04-23T12:46:15.256457",
//                 "total": 35000.000000000000000000000000
export interface IOrderResponse {
	orderId: string;
	userId: string;
	date: string;
	total: number;
}
export const GetAllOrders = async (token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/api/order',
		headers: {
			Authorization: 'Bearer ' + token,
		},
	});
};
export const GetOneOrder = async (token: string, id: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/api/order/' + id,
		headers: {
			Authorization: 'Bearer ' + token,
		},
	});
};
