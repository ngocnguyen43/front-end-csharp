import { Axios } from '@config';
import { IResponse, IUser } from '@hooks';

export const GetAllUsers = async (token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/api/user',
		headers: {
			Authorization: 'Bearer ' + token,
		},
	});
};
export const CreateUser = async (user: IUser & { password: string }, token: string): Promise<IResponse> => {
	const data = JSON.stringify(user);
	return await Axios({
		method: 'POST',
		url: '/api/user',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		data: data,
	});
};
export const UpdateUser = async (
	user: Omit<IUser, 'name' | 'fullname'> & { password: string; fullName: string },
	token: string,
) => {
	const data = JSON.stringify(user);
	return await Axios({
		method: 'PATCH',
		url: '/api/user',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		data: data,
	});
};
export const DeleteUser = async (id: string, token: string) => {
	return await Axios({
		method: 'DELETE',
		url: '/api/user/' + id,
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
};
