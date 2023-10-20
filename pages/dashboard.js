import React, { useContext } from 'react'
import Layout from '@/components/Layout'
// import Dashboard from '@/components/Dashboard/Dashboard'
// import Dashboard from '@/components/Dashboard/Dashboard'
import DashboardComponent from '@/components/Dashboard/DashboardComponent'
import { API_URL } from '@/config/index'
import AuthContext from '@/context/AuthContext'
import { Loader, LoaderDiv } from '@/components/CreateUser/style'

const dashboard = ({ loans, customers }) => {
	const { loading } = useContext(AuthContext)

	return (
		<Layout>
			{loading && (
				<div className=' flex justify-center items-center'>
					<Loader></Loader>
					<LoaderDiv></LoaderDiv>
				</div>
			)}
			<DashboardComponent loans={loans} customers={customers} />
		</Layout>
	)
}

export default dashboard

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/loans?_sort=createdAt:DESC&populate=*`)
	const loans = await res.json()

	const resCustomers = await fetch(
		`${API_URL}/customers?_sort=createdAt:DESC&populate=*`
	)
	const customers = await resCustomers.json()

	console.log(customers)

	return {
		props: {
			loans,
			customers,
		},
	}
}
