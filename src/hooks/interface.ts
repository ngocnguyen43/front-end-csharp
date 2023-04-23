import { IProduct } from '@components';
import { IOrderResponse } from '@service';
import { IOResponse } from './useFetchOneOrder';
// "email": "minhngoc@gmail.com",
//         "fullname": "MInh Ngoc",
//         "password": "$2a$11$ikHKAaslV2Dys4bYk5pNleSF0/5z8X3PEXn.dIxF54As9H7sDOL.q",
//         "role": "admin",
//         "id": "00000000-0000-0000-0000-000000000000"
export interface IUser {
	id: string;
	email: string;
	fullname: string;
	role: string;
}
export interface IResponse {
	body: { data: IProduct[] | IOrderResponse[] | IUser[] | IOResponse };
	pagination: {
		totalpages: number;
		currentpage: number;
	};
	meta: {
		message: string;
		statusCode: number;
	};
}
