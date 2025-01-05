import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { Hero, NavMenu } from '@/app/components/general';
import styles from './Header.module.css';

interface PropsT
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Header({ ...props }: PropsT): JSX.Element {
	return (
		<header {...props} className={styles.header}>
			<Hero />
			<NavMenu />
		</header>
	);
}
