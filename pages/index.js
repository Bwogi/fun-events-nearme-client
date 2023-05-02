import React from 'react';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Showcase from '@/components/Showcase';

export default function HomePage() {
	return (
		<Layout>
			<Showcase />
			<h1>Home page</h1>
		</Layout>
	);
}
