import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import { Container } from './style'
import AuthContext from '@/context/AuthContext'
import { API_URL } from '@/config/index'
import Payment from '../Payment'
import toast from 'react-hot-toast'

const LoanInfo = ({
	loanInfo,
	setLoanInfo,
	personalInfo,
	setPersonalInfo,
	financialInfo,
	setFinancialInfo,
	review,
	setReview,
}) => {
	const router = useRouter()
	const {
		loanAmount,
		setLoanAmount,
		loanPurpose,
		setLoanPurpose,
		duration,
		setDuration,
		interest,
		setInterest,
		monthlyPayment,
		setMonthlyPayment,
		email,
		setEmail,
		customerType,
		setCustomerType,
	} = useContext(AuthContext)

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (
			loanAmount === '' ||
			loanPurpose === '' ||
			duration === '' ||
			interest === '' ||
			email === '' ||
			customerType === ''
		) {
			toast.error('All fields are required!', {
				duration: 6000,
			})
		} else {
			router.push('/create_user/personal_info')
		}
	}

	return (
		<Container>
			<div className='container'>
				<h1>Loan Information</h1>
				<form action='' onSubmit={handleSubmit}>
					<div className='no_flex'>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							placeholder='johdoe@email.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='no_flex'>
						<label htmlFor='loan_amount'>Loan Amount Requested</label>
						<input
							type='number'
							placeholder='N 50,000'
							value={loanAmount}
							onChange={(e) => setLoanAmount(e.target.value)}
						/>
						<label htmlFor='duration'>Duration of Loan</label>
						<input
							type='number'
							placeholder='3 months'
							value={duration}
							onChange={(e) => setDuration(e.target.value)}
						/>
						<label htmlFor='interest'>Interest Rate</label>
						<input
							type='number'
							placeholder='10%'
							value={interest}
							onChange={(e) => setInterest(e.target.value)}
						/>
						<label htmlFor='customer_type'>Customer Type</label>
						<select
							name='customer_type'
							id='customer_type'
							onChange={(e) => setCustomerType(e.target.value)}
							value={customerType}
							className='customer_type mb-[1rem]'
						>
							<option value='' selected>
								Choose a customer type
							</option>
							<option value='sme'>SME</option>
							<option value='salary earner'>Salary Earner/Monthly</option>
						</select>
						{/* <label htmlFor='monthly_payment'>Monthly Payment</label>
						<input
							type='number'
							placeholder='N100,000'
							value={monthlyPayment}
							onChange={(e) => setMonthlyPayment(e.target.value)}
						/> */}
						<label htmlFor='monthly_payment'>Purpose of Loan</label>
						<input
							type='text'
							placeholder='State Purpose'
							value={loanPurpose}
							onChange={(e) => setLoanPurpose(e.target.value)}
						/>
					</div>

					{customerType === 'salary earner' && <Payment email={email} />}

					<div className='btns'>
						{/* <button className='cancel'>Cancel</button> */}
						<button type='submit' className='submit'>
							Continue
						</button>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default LoanInfo
