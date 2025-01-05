import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
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
				<p className={styles.text}>
					A lot of times I find that people who are blessed with the most talent
					don&apos;t ever develop that attitude, and the ones who aren&apos;t
					blessed in that way are the most competitive and have the biggest
					heart.
				</p>
				<p className={styles.author}>Tom Brady</p>
			</div>
		</section>
	);
}
