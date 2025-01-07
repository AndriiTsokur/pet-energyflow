import { $BASE_URL, $METHODS } from '@/app/utils/constants';

export type QuoteT = {
	author: string;
	quote: string;
};

export const API = {
	async getQuote(): Promise<QuoteT> {
		const args = {
			endpoint: $BASE_URL + '/quote',
		};

		return callRemoteApi(args);
	},
};

interface CallRemoteApiProps {
	endpoint: string;
	method?: $METHODS;
}

const callRemoteApi = async ({
	endpoint,
	method = $METHODS.GET,
}: CallRemoteApiProps) => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 3_000));
		const response = await fetch(endpoint, { method });

		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
		}

		return await response.json();
	} catch (error: unknown) {
		console.error('Failed to fetch the Quote: ', error);
		throw new Error('Failed to fetch the Quote');
	}
};
