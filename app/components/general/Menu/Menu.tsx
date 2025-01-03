import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import Link from 'next/link';
import { Nav, Social } from '@/app/components/general';
import styles from './Menu.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	closeMenu: () => void;
	currentPage: string;
	isMenuVisible: boolean;
}

export default function Menu({
	closeMenu,
	currentPage,
	isMenuVisible,
	...props
}: PropsT): JSX.Element {
	return (
		<div {...props} className={styles.container}>
			<div className={styles.menu}>
				<div className={styles.header}>
					<Link
						href='/'
						onClick={closeMenu}
						style={currentPage === '/' ? { pointerEvents: 'none' } : undefined}
					>
						<p className={styles.logo}>energy.flow</p>
					</Link>
					{isMenuVisible && (
						<button type='button' onClick={closeMenu} className={styles.button}>
							{''}
						</button>
					)}
				</div>
				<Nav closeMenu={closeMenu} currentPage={currentPage} />
				<Social />
			</div>
		</div>
	);
}
