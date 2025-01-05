import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { Logo } from '@/app/components/general';
import { NavLinks, Social } from '@/app/components/general/NavMenu/parts';
import styles from './ExpandedMenu.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	closeMenu: () => void;
	currentPage: string;
	isMobileMenuVisible: boolean;
}

export default function ExpandedMenu({
	closeMenu,
	currentPage,
	isMobileMenuVisible,
	...props
}: PropsT): JSX.Element {
	return (
		<div className={styles.menu} {...props}>
			<div className={styles.header}>
				<Logo
					closeMenu={closeMenu}
					colorLight={true}
					currentPage={currentPage}
					isMobileMenuVisible={isMobileMenuVisible}
				/>
				{isMobileMenuVisible && (
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
