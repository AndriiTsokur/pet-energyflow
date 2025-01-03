'use client';

import {
	DetailedHTMLProps,
	HTMLAttributes,
	JSX,
	useEffect,
	useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { Hero, Menu, MenuMobile } from '@/app/components/general';
import styles from './Header.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Header({ ...props }: PropsT): JSX.Element {
	const pathname = usePathname();
	const [isMenuVisible, setIsMenuVisible] = useState(false);
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
		<header {...props} className={styles.header}>
			<Hero />

			{isMobile && (
				<MenuMobile
					openMenu={() => setIsMenuVisible(true)}
					currentPage={pathname}
				/>
			)}

			{isMenuVisible && (
				<Menu
					closeMenu={() => setIsMenuVisible(false)}
					currentPage={pathname}
					isMenuVisible={isMenuVisible}
				/>
			)}
		</header>
	);
}
