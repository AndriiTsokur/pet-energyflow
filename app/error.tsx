'use client';

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<>
			<div>Something went wrong:</div>
			<div>{JSON.stringify(error.message)}</div>
			<button type='reset' onClick={() => reset()}>
				Try again
			</button>
		</>
	);
}
