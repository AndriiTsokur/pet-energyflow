import type { Metadata } from 'next';
import { dmSans } from '@/app/components/general';
import './globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
	title: {
		default: 'Energy Flow',
		template: '%s | Energy Flow',
	},
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${dmSans.className} antialiased`}>
				<div className={styles.container}>{children}</div>
			</body>
		</html>
	);
}
