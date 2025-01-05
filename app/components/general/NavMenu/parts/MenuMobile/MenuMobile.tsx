import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { Logo } from '@/app/components/general';
import styles from './MenuMobile.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentPage: string;
	closeMenu: () => void;
	openMenu: () => void;
	isMobileMenuVisible: boolean;
}

export default function MenuMobile({
	openMenu,
	closeMenu,
	currentPage,
	isMobileMenuVisible,
	...props
}: PropsT): JSX.Element {
	return (
		<div className={styles.wrapper} {...props}>
			<Logo
				closeMenu={closeMenu}
				currentPage={currentPage}
				isMobileMenuVisible={isMobileMenuVisible}
			/>
			<button type='button' onClick={openMenu} className={styles.button}>
				{''}
			</button>
		</div>
	);
}
