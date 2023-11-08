import React, { useState, useContext } from 'react'
import { Container } from './style'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'
import Payment from '../Payment'

const FinancialInfo = ({
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
		employmentStatus,
		setEmploymentStatus,
		employer,
		setEmployer,
		dateStarted,
		setDateStarted,
		workEmail,
		setWorkEmail,
		workNumber,
		setWorkNumber,
		income,
		setIncome,
		asset,
		setAsset,
		assetType,
		setAssetType,
		assetValue,
		setAssetValue,
		cardNumber,
		setCardNumber,
		cvv,
		setCvv,
		cardExpiry,
		setCardExpiry,
		setAuthCode,
		workAddress,
		setWorkAddress,
	} = useContext(AuthContext)

	const handleSubmit = (e) => {
		e.preventDefault()

		setPersonalInfo(false)
		setFinancialInfo(true)

		router.push('/create_user/guarantor_info')
	}

	return (
		<Container>
			<div className='container'>
				<h1>Business Information</h1>
				<form action='' onSubmit={handleSubmit}>
					{/* <div className="no_flex"> */}
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='employ_status'>Current Employment Status</label>
							<select
								name='employ_status'
								id='employ_status'
								onChange={(e) => setEmploymentStatus(e.target.value)}
							>
								<option value='Employed'>Employed</option>
								<option value='Unemployed'>Unemployed</option>
								<option value='Self-Employed'>Self Employed</option>
							</select>
						</div>
						<div className='no_flex'>
							<label htmlFor='employer'>Current Employer</label>
							<input
								type='text'
								placeholder='ABC Limited'
								value={employer}
								onChange={(e) => setEmployer(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='date_started'>Date Started</label>
							<input
								type='date'
								value={dateStarted}
								onChange={(e) => setDateStarted(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='work_email'>Work Contact Info (Email)</label>
							<input
								type='email'
								placeholder='johndoe@email.com'
								value={workEmail}
								onChange={(e) => setWorkEmail(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='work_number'>Work Phone Numer</label>
							<input
								type='number'
								placeholder='081*********'
								value={workNumber}
								onChange={(e) => setWorkNumber(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='work_address'>Work Address</label>
							<input
								type='text'
								placeholder='address'
								value={workAddress}
								onChange={(e) => setWorkAddress(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='income'>Current net Income</label>
							<input
								type='number'
								placeholder='N500,000'
								value={income}
								onChange={(e) => setIncome(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='asset'>Asset</label>
							<input
								type='text'
								placeholder='Land'
								value={asset}
								onChange={(e) => setAsset(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='asset_type'>Asset Type</label>
							<input
								type='text'
								placeholder='Fixed'
								value={assetType}
								onChange={(e) => setAssetType(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='value_naira'>Value in Naira</label>
							<input
								type='number'
								placeholder='N500,000'
								value={assetValue}
								onChange={(e) => setAssetValue(e.target.value)}
							/>
						</div>
					</div>

					{/* </div> */}
					<div className='btns'>
						<button className='cancel' onClick={() => router.back()}>
							Back
						</button>
						<button type='submit' className='submit'>
							Continue
						</button>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default FinancialInfo
