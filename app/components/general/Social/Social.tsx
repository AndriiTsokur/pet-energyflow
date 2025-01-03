import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import Link from 'next/link';
import styles from './Social.module.css';

const links = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/goITclub/',
		icon: 'facebook',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/goitclub/',
		icon: 'instagram',
	},
	{ name: 'YouTube', url: 'https://www.youtube.com/c/GoIT', icon: 'youtube' },
];

interface PropsT
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {}

export default function Social({ ...props }: PropsT): JSX.Element {
	return (
		<ul {...props} className={styles.list}>
			{links.map(({ name, url, icon }) => (
				<li key={name}>
					<Link
						href={url}
						target='_blank'
						rel='noreferrer noopener'
						className={styles.link}
					>
						<svg className={styles.icon}>
							<use href={`/images/general/icons.svg#icon-${icon}`} />
						</svg>
					</Link>
				</li>
			))}
		</ul>
	);
}
