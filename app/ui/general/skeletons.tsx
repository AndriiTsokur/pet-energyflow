import { JSX } from 'react';
import Skeleton from '@mui/material/Skeleton';

const bgColor = 'grey.500';

export function QuoteOfDaySkeleton(): JSX.Element {
	return (
		<>
			<Skeleton sx={{ bgcolor: bgColor }} />
			<Skeleton sx={{ bgcolor: bgColor }} />
			<Skeleton sx={{ bgcolor: bgColor }} />
			<Skeleton sx={{ bgcolor: bgColor }} />
		</>
	);
}
