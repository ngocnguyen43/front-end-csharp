import { useContext, useEffect, useState } from 'react';
import { IResponse, IUser } from './interface';
import { StoreContext } from '@store';
import { GetAllUsers } from '@service';

export const useFetchUsers = () => {
	const [result, setResult] = useState<IUser[]>();
	const [error, setError] = useState<unknown>();
	const [loading, setLoading] = useState(false);
	const { state } = useContext(StoreContext);
	if (!state.role || !state.token || state.role !== 'admin') throw new Error('');
	let users: IResponse;
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				users = await GetAllUsers(state.token);
				setResult(users.body.data as IUser[]);
			} catch (error: unknown) {
				setError(error);
			} finally {
				users !== undefined && setLoading(false);
			}
		})();
	}, []);
	return { result, error, loading };
};
