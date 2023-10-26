import React, { useState, useContext } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { Container } from './style'
import AuthContext from '@/context/AuthContext'

const UsersPage = ({ customers }) => {
	const [isAll, setIsAll] = useState(true)
	const [isLoaned, setIsLoaned] = useState(false)
	const [isOverdue, setIsOverdue] = useState(false)
	const [isPaid, setIsPaid] = useState(false)
	const [isProcessing, setIsProcessing] = useState(false)
	const [isDenied, setIsDenied] = useState(false)
	const [isApproved, setIsApproved] = useState(false)

	const { user } = useContext(AuthContext)

	console.log(customers)

	console.log(user)

	const displayCustomer = (e) => {
		console.log('working')
		router.push(`/${e.slug}`)
	}

	const handleAll = () => {
		setIsAll(true)
		setIsLoaned(false)
		setIsOverdue(false)
		setIsPaid(false)
		setIsProcessing(false)
		setIsApproved(false)
		setIsDenied(false)
	}

	const handleLoaned = () => {
		setIsAll(false)
		setIsLoaned(true)
		setIsOverdue(false)
		setIsPaid(false)
		setIsProcessing(false)
		setIsApproved(false)
		setIsDenied(false)
	}

	const handleOverdue = () => {
		setIsAll(false)
		setIsLoaned(false)
		setIsOverdue(true)
		setIsPaid(false)
		setIsProcessing(false)
		setIsApproved(false)
		setIsDenied(false)
	}

	const handlePaid = () => {
		setIsAll(false)
		setIsLoaned(false)
		setIsOverdue(false)
		setIsPaid(true)
		setIsProcessing(false)
		setIsApproved(false)
		setIsDenied(false)
	}

	const handleProcessing = () => {
		setIsAll(false)
		setIsLoaned(false)
		setIsOverdue(false)
		setIsPaid(false)
		setIsProcessing(true)
		setIsApproved(false)
		setIsDenied(false)
	}

	const handleApproved = () => {
		setIsAll(false)
		setIsLoaned(false)
		setIsOverdue(false)
		setIsPaid(false)
		setIsProcessing(false)
		setIsApproved(true)
		setIsDenied(false)
	}

	const handleDenied = () => {
		setIsAll(false)
		setIsLoaned(false)
		setIsOverdue(false)
		setIsPaid(false)
		setIsProcessing(false)
		setIsApproved(false)
		setIsDenied(true)
	}

	return (
		<Container>
			<h1>Customers</h1>
			<div className='all'>
				<div className='container'>
					<div className='orders'>
						<h2>Latest Loan Orders</h2>
						<div className='search'>
							<div className='input'>
								<input type='text' placeholder='Search User' />
							</div>
							<ul>
								<li className={isAll ? 'active' : ''} onClick={handleAll}>
									All
								</li>
								<li className={isLoaned ? 'active' : ''} onClick={handleLoaned}>
									Loaned
								</li>
								<li
									className={isOverdue ? 'active' : ''}
									onClick={handleOverdue}
								>
									Overdue
								</li>
								<li className={isPaid ? 'active' : ''} onClick={handlePaid}>
									Paid
								</li>
								<li
									className={isProcessing ? 'active' : ''}
									onClick={handleProcessing}
								>
									Processing
								</li>
								<li
									className={isApproved ? 'active' : ''}
									onClick={handleApproved}
								>
									Approved
								</li>
								<li className={isDenied ? 'active' : ''} onClick={handleDenied}>
									Denied
								</li>
							</ul>
						</div>
						<div className='table'>
							<ul>
								<li>Credit Officer</li>
								<li>Customer</li>
								<li>Loan Status</li>
								<li>Email</li>
								<li>Phone Number</li>
							</ul>
							{user?.teller &&
								customers?.data?.map(
									(e) =>
										user.id === e.attributes.user.data.id && (
											<div className='loanee_details' key={e.id}>
												{e.attributes.loans.data.map((loan) => (
													<div className='loan' key={loan.id}>
														<p className='id'>
															{e.attributes.user.data.attributes.username}
														</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{console.log(loan.attributes)}
														{loan.attributes.disbursed && (
															<p className='loaned btn'>Disbursed</p>
														)}
														{loan.attributes.paid && (
															<p className='paid btn'>Paid</p>
														)}
														{loan.attributes.due_soon && (
															<p className='due_soon btn'>Loan Due Soon</p>
														)}
														{loan.attributes.overdue && (
															<p className='overdue btn'>Loan Overdue</p>
														)}
														{loan.attributes.processing && (
															<p className='processing btn'>Processing</p>
														)}
														{loan.attributes.denied && (
															<p className='overdue btn'>Denied</p>
														)}
														<p className='total'>
															{/* <TbCurrencyNaira fontSize={20} color='#1F4173' /> */}
															{e.attributes.email}
														</p>
														<p className='number'>{e.attributes.phone_1}</p>
													</div>
												))}
											</div>
										)
								)}
							{user?.supervisor &&
								customers?.data.map((e) => (
									<div className='loanee_details' key={e.id}>
										{e.attributes.loans.data.map((loan) => (
											<div className='loan' key={loan.id}>
												<p className='id'>
													{e.attributes.user.data.attributes.username}
												</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.disbursed && (
													<p className='loaned btn'>Disbursed</p>
												)}
												{loan.attributes.paid && (
													<p className='paid btn'>Paid</p>
												)}
												{loan.attributes.due_soon && (
													<p className='due_soon btn'>Loan Due Soon</p>
												)}
												{loan.attributes.overdue && (
													<p className='overdue btn'>Loan Overdue</p>
												)}
												{loan.attributes.processing && (
													<p className='processing btn'>Processing</p>
												)}
												{loan.attributes.denied && (
													<p className='overdue btn'>Denied</p>
												)}
												<p className='total'>{e.attributes.email}</p>
												<p className='total'>{e.attributes.phone_1}</p>
											</div>
										))}
									</div>
								))}
							{user?.manager ||
								(user?.md &&
									customers?.data?.map((e) => (
										<div className='loanee_details' key={e.id}>
											{e.attributes.loans.data.map((loan) => (
												<div className='loan' key={loan.id}>
													<p className='id'>
														{e.attributes.user.data.attributes.username}
													</p>
													<p className='name'>
														{e.attributes.firstname +
															' ' +
															e.attributes.lastname}
													</p>
													<p className='total'>{e.attributes.phone_1}</p>
													<p className='total'>{e.attributes.email}</p>
													{console.log(loan.attributes)}
													{loan.attributes.disbursed && (
														<p className='loaned btn'>Disbursed</p>
													)}
													{loan.attributes.paid && (
														<p className='paid btn'>Paid</p>
													)}
													{loan.attributes.due_soon && (
														<p className='due_soon btn'>Loan Due Soon</p>
													)}
													{loan.attributes.overdue && (
														<p className='overdue btn'>Loan Overdue</p>
													)}
													{loan.attributes.processing && (
														<p className='processing btn'>Processing</p>
													)}
													{loan.attributes.denied && (
														<p className='overdue btn'>Denied</p>
													)}
												</div>
											))}
										</div>
									)))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default UsersPage
