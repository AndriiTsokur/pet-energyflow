import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import Link from 'next/link';
import styles from './MenuMobile.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	openMenu: () => void;
	currentPage: string;
}

export default function MenuMobile({
	openMenu,
	currentPage,
	...props
}: PropsT): JSX.Element {
	return (
		<div className={styles.container} {...props}>
			<Link
				href='/'
				style={currentPage === '/' ? { pointerEvents: 'none' } : undefined}
			>
				<p className={styles.logo}>energy.flow</p>
			</Link>
			<button type='button' onClick={openMenu} className={styles.button}>
				{''}
			</button>
		</div>
	);
}
