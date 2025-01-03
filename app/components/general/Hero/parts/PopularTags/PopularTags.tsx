import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import styles from './PopularTags.module.css';

interface PopularTagsProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {}

export default function PopularTags({
	...props
}: PopularTagsProps): JSX.Element {
	const tags = ['#Sport', '#Healthy', '#Workout', '#Diet'];

	return (
		<ul {...props} className={styles.list}>
			{tags.map((tag) => (
				<li key={tag} className={styles.item}>
					{tag}
				</li>
			))}
		</ul>
	);
}
