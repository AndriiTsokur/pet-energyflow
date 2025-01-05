import { JSX } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import styles from './Logo.module.css';

interface PropsT extends Omit<LinkProps, 'href'> {
	closeMenu: () => void;
	colorLight?: boolean;
	currentPage: string;
	isMobileMenuVisible: boolean;
}

export default function Logo({
	colorLight = false,
	closeMenu,
	currentPage,
	isMobileMenuVisible,
	...props
}: PropsT): JSX.Element {
	const handleClick = () => {
		if (isMobileMenuVisible) closeMenu();
	};

	return (
		<Link
			href='/'
			onClick={handleClick}
			style={currentPage === '/' ? { pointerEvents: 'none' } : undefined}
			{...props}
		>
			<p className={clsx(styles.logo, colorLight && styles.light)}>
				energy.flow
			</p>
		</Link>
	);
}
