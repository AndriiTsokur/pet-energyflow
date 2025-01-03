import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
	fallback: ['system-ui', 'arial', 'sans-serif'],
	subsets: ['latin'],
	weight: 'variable',
});

export default dmSans;
