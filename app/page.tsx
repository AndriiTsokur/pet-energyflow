import { Header, QuoteOfDay } from '@/app/components/general';
import { Exercises } from '@/app/components/home';

export default function Home() {
	return (
		<>
			<Header />
			<QuoteOfDay />
			<Exercises />
		</>
	);
}
