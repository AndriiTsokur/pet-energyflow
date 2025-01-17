import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import styles from './Exercises.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Exercises({ ...props }: PropsT): JSX.Element {
	return (
		<section className={styles.section} {...props}>
			<h2>Exercises</h2>
		</section>
	);
}
