import { JSX } from 'react';
import { API, type QuoteT } from '@/app/api';
import styles from './Quote.module.css';

export default async function Quote(): Promise<JSX.Element> {
	const { author, quote }: QuoteT = await API.getQuote();

	return (
		<>
			<p className={styles.text}>{quote}</p>
			<p className={styles.author}>{author}</p>
		</>
	);
}
