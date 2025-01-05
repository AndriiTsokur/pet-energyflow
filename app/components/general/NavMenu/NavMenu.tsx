'use client';

import { JSX, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ExpandedMenu, MenuMobile } from './parts';
import styles from './NavMenu.module.css';

export default function NavMenu(): JSX.Element {
	const pathname = usePathname();
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [scrollbarWidth, setScrollbarWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			setIsMobile(screenWidth < 768);

			setScrollbarWidth(
				window.innerWidth - document.documentElement.clientWidth
			);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (isMobileMenuVisible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isMobileMenuVisible]);

	return (
		<>
			{isMobile ? (
				<MenuMobile
					openMenu={() => setIsMobileMenuVisible(true)}
					closeMenu={() => setIsMobileMenuVisible(false)}
					currentPage={pathname}
					isMobileMenuVisible={isMobileMenuVisible}
					scrollbarWidth={scrollbarWidth}
				/>
			) : (
				<ExpandedMenu
					currentPage={pathname}
					isMobile={isMobile}
					scrollbarWidth={scrollbarWidth}
				/>
			)}

			{isMobileMenuVisible && (
				<div className={styles.container}>
					<ExpandedMenu
						closeMenu={() => setIsMobileMenuVisible(false)}
						currentPage={pathname}
						isMobile={isMobile}
						isMobileMenuVisible={isMobileMenuVisible}
						scrollbarWidth={scrollbarWidth}
					/>
				</div>
			)}
		</>
	);
}
