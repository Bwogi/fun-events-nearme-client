import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import Link from 'next/link'
import { FaExclamationTriangle } from'react-icons/fa';


export default function NotFoundPage() {
	return (
		<Layout title='Page Not Found!'>
			<div className={styles.error}>
				<p><FaExclamationTriangle /> 404!<h1>Page Not Found!</h1></p>
				<p>Sorry, there is nothing here!</p>
				<Link href='/'>Go Back Home</Link>
			</div>
		</Layout>
	);
}
