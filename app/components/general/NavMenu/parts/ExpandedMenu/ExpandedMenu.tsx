import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { Logo } from '@/app/components/general';
import { NavLinks, Social } from '@/app/components/general/NavMenu/parts';
import styles from './ExpandedMenu.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	closeMenu?: () => void;
	currentPage: string;
	isMobile: boolean;
	isMobileMenuVisible?: boolean;
	scrollbarWidth: number;
}

export default function ExpandedMenu({
	closeMenu,
	currentPage,
	isMobile,
	isMobileMenuVisible,
	scrollbarWidth,
	...props
}: PropsT): JSX.Element {
	return (
		<div
			style={{ left: `calc(50% + ${scrollbarWidth / 2}px)` }}
			className={styles.menu}
			{...props}
		>
			<div className={styles.header}>
				<Logo
					closeMenu={closeMenu}
					colorLight={isMobile}
					currentPage={currentPage}
					isMobileMenuVisible={isMobileMenuVisible}
				/>
				{isMobileMenuVisible && closeMenu && (
					<button type='button' onClick={closeMenu} className={styles.button}>
						{''}
					</button>
				)}
			</div>
			<NavLinks closeMenu={closeMenu} currentPage={currentPage} />
			<Social />
		</div>
	);
}
