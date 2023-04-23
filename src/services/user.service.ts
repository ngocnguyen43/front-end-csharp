import { Axios } from '@config';
import { IResponse } from '@hooks';

export const GetAllUsers = async (token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/api/user',
		headers: {
			Authorization: 'Bearer ' + token,
		},
	});
};
