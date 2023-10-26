import React from 'react'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Customer from '@/components/CustomerProfile/Customer'
import { parseCookies } from '@/helpers/index'

const Slug = ({ customers, token, payHistory }) => {
	return (
		<Layout>
			<Customer customers={customers} token={token} payHistory={payHistory} />
		</Layout>
	)
}

export default Slug

export async function getServerSideProps({ params, req }) {
	const { token } = parseCookies(req)

	const { slug } = params

	const res = await fetch(
		`${API_URL}/customers?filters[slug]=${slug}&populate=*`
	)
	const customers = await res.json()
	console.log(customers)

	const resPay = await fetch(`${API_URL}/weekly-payments?populate=*`)

	const payHistory = await resPay.json()

	console.log(payHistory)

	return {
		props: { customers: customers.data, token, payHistory: payHistory.data },
	}
}
