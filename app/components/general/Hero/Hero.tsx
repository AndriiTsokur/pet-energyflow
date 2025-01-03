'use client';

import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { PopularTags } from './parts';
import styles from './Hero.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Hero({ ...props }: PropsT): JSX.Element {
	return (
		<div {...props} className={styles.hero}>
			<div className={styles.picture}>
				<PopularTags />
			</div>
		</div>
	);
}
