import { DetailedHTMLProps, HTMLAttributes, JSX, Suspense } from 'react';
import { QuoteOfDaySkeleton } from '@/app/ui';
import { Quote } from './parts';
import styles from './QuoteOfDay.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function QuoteOfDay({ ...props }: PropsT): JSX.Element {
	return (
		<section className={styles.section} {...props}>
			<div className={styles.quote}>
				<div className={styles.title_wrapper}>
					<h2 className={styles.title}>Quote of the day</h2>
				</div>
				<Suspense fallback={<QuoteOfDaySkeleton />}>
					<Quote />
				</Suspense>
			</div>
		</section>
	);
}
