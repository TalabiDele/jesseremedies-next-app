import React from 'react'
import Layout from '@/components/Layout'
import CRM from '@/components/CRM/CRM'
import { API_URL } from '@/config/index'

const crm = ({ crms }) => {
	return (
		<Layout>
			<CRM crms={crms} />
		</Layout>
	)
}

export default crm

export async function getServerSideProps() {
	// const query = qs.stringify({
	//   _where: {
	//     _or: [{ post_contains: term }],
	//   },
	// });

	const res = await fetch(`${API_URL}/customers?populate=*`)
	const crms = await res.json()

	return {
		props: { crms },
	}
}
