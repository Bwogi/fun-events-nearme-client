import Layout from '@/components/Layout';
import React from 'react';

export default function about() {
	return (
		<Layout title='DJ Events | About'>
			<h1>About Page</h1>
			<p>This is an app to find the latest dj and other musical events</p>
			<p>Version 1.0.0</p>
			<button className='btn'>Home</button>
		</Layout>
	);
}
