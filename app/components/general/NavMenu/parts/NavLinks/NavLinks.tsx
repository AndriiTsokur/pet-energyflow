'use client';

import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './NavLinks.module.css';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'Favorites', href: '/favorites' },
];

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	closeMenu: () => void;
	currentPage: string;
}

export default function NavLinks({
	closeMenu,
	currentPage,
	...props
}: PropsT): JSX.Element {
	return (
		<nav {...props}>
			<ul className={styles.list}>
				{links.map(({ name, href }) => (
					<li
						key={name}
						className={clsx(styles.item, currentPage === href && styles.active)}
					>
						<Link href={href} onClick={closeMenu}>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
