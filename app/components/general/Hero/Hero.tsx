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
			<div className={styles.motto}>
				<h1 className={styles.title}>
					Get <span className={styles.selection}>Body</span> in shape, Stay
					healthy
				</h1>
				<p className={styles.text}>
					Transform your physique and embrace a healthier lifestyle with our
					comprehensive fitness and nutrition support.
				</p>
			</div>
		</div>
	);
}
