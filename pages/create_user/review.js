import React, { useState } from 'react'
import Layout from '@/components/Layout'
import CreateUserNav from '@/components/CreateUserNav/CreateUserNav'
import dynamic from 'next/dynamic'
// import Review from "@/components/CreateUser/Review";
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/config/index'

const Review = dynamic(() => import('@/components/CreateUser/Review'), {
	ssr: false,
})

const ReviewPage = ({ token }) => {
	const [loanInfo, setLoanInfo] = useState(true)
	const [personalInfo, setPersonalInfo] = useState(false)
	const [financialInfo, setFinancialInfo] = useState(false)
	const [review, setReview] = useState(false)

	const router = useRouter()

	return (
		<Layout>
			<Back className='back' onClick={() => router.back()}>
				Back
			</Back>
			<CreateUserNav
				loanInfo={loanInfo}
				setLoanInfo={setLoanInfo}
				personalInfo={personalInfo}
				setPersonalInfo={setPersonalInfo}
				financialInfo={financialInfo}
				setFinancialInfo={setFinancialInfo}
				review={review}
				setReview={setReview}
			/>
			<Review
				loanInfo={loanInfo}
				setLoanInfo={setLoanInfo}
				personalInfo={personalInfo}
				setPersonalInfo={setPersonalInfo}
				financialInfo={financialInfo}
				setFinancialInfo={setFinancialInfo}
				review={review}
				setReview={setReview}
				token={token}
			/>
		</Layout>
	)
}

export default ReviewPage

const Back = styled.div`
	margin-left: 18rem;
	position: relative;
	top: 6rem;
	text-decoration: underline;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: #0043f1;
	}
`

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req)

	const res = await fetch(`${API_URL}/loans?_sort=created_at:DESC&populate=*`)
	const loans = await res.json()

	const resCustomers = await fetch(`${API_URL}/customers?populate=*`)
	const customers = await resCustomers.json()

	return {
		props: { loans, customers, token },
	}
}
