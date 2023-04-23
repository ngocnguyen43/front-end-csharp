/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
const url: string = import.meta.env?.VITE_APP_BACKEND_URL || 'https://localhost:7071';

export const Axios = axios.create({
	baseURL: url,
});
Axios.interceptors.response.use((response) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return response.data;
});
