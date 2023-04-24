import { Axios } from '@config';
import { IResponse } from '@hooks';
export interface Logindata {
	email: string;
	password: string;
}
export const UserLogin = async (
	user: Logindata,
): Promise<IResponse & { body: { role: string; id: string; accessToken: string } }> => {
	const { email, password } = user;
	const data = JSON.stringify({
		email: email,
		password: password,
	});
	return await Axios({
		method: 'POST',
		url: '/login',
		maxBodyLength: Infinity,
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	}).catch((error) => console.log(error));
};
export const UserRegister = async (user: Logindata & { fullName: string }): Promise<IResponse> => {
	const data = JSON.stringify(user);
	return await Axios({
		method: 'POST',
		url: '/signup',
		maxBodyLength: Infinity,
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	});
};
