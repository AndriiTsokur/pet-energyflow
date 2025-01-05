'use client';

import { JSX, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ExpandedMenu, MenuMobile } from './parts';
import styles from './NavMenu.module.css';

export default function NavMenu(): JSX.Element {
	const pathname = usePathname();
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			setIsMobile(screenWidth < 768);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{isMobile && (
				<MenuMobile
					openMenu={() => setIsMobileMenuVisible(true)}
					closeMenu={() => setIsMobileMenuVisible(false)}
					currentPage={pathname}
					isMobileMenuVisible={isMobileMenuVisible}
				/>
			)}

			{isMobileMenuVisible && (
				<div className={styles.container}>
					<ExpandedMenu
						closeMenu={() => setIsMobileMenuVisible(false)}
						currentPage={pathname}
						isMobileMenuVisible={isMobileMenuVisible}
					/>
				</div>
			)}
		</>
	);
}
