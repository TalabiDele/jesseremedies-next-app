import React, { useContext, useState, useEffect } from 'react'
import { Container } from './style'
import AuthContext from '@/context/AuthContext'
import { RiFocus2Fill, RiFocus2Line, RiFileReduceLine } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa'
import { TbCurrencyNaira } from 'react-icons/tb'
import userImage from '@/public/userImage.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Dashboard = ({ loans, customers }) => {
	const [isAll, setIsAll] = useState(true)
	const [isLoaned, setIsLoaned] = useState(false)
	const [isOverdue, setIsOverdue] = useState(false)
	const [isPaid, setIsPaid] = useState(false)
	const [isProcessing, setIsProcessing] = useState(false)
	const [isDenied, setIsDenied] = useState(false)
	const [isApproved, setIsApproved] = useState(false)

	const { user, addCommas } = useContext(AuthContext)
	const router = useRouter()

	console.log('Loans', loans)
	console.log('Customers', customers)

	useEffect(() => {
		console.log('UseEffect')
	}, [])

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
	// var a = moment([2007, 0, 29]);
	// var b = moment([2007, 0, 28]);
	// console.log(a.diff(b, "days"));
	return (
		<Container>
			<h1>Dashboard</h1>
			<div className='all'>
				<div className='container'>
					<div className='top_cards'>
						<div className='card'>
							<div className='texts'>
								<p>Total Loans</p>
								{/* {user?.loanees?.length !== 0 && (
									<h1>{user?.loanees?.length}</h1>
								)} */}
							</div>
							<RiFocus2Fill fontSize={30} />
						</div>
						<div className='card'>
							<div className='texts'>
								<p>Total Customers</p>
								{/* {user && user.loanees.length !== 0 && (
<h1>{user.loanees.length}</h1>
)} */}
							</div>
							<RiFocus2Line fontSize={30} />
						</div>
						{/* <div className="card">
<div className="texts">
  <p>Total Loans</p>
  {user && <h1>{user.loanees.length}</h1>}
</div>
<RiUserReceived2Line />
</div> */}
					</div>
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
								<li>Loan Id</li>
								<li>Customer</li>
								<li>Loan Status</li>
								<li>Total</li>
							</ul>
							{user &&
								user?.teller &&
								customers &&
								customers?.data?.map((e) => (
									// user.id === e.attributes.user.data.id &&
									<>
										{isAll && (
											<div
												className='loanee_details'
												key={e.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												{e?.attributes?.loans?.data?.map((loan) => (
													<div className='loan' key={loan.id}>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.disbursed && (
															<p className='loaned btn'>Disbursed</p>
														)}
														{loan.attributes.paid && (
															<p className='paid btn'>Paid</p>
														)}
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
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
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														{loan.attributes.denied && (
															<p className='overdue btn'>Denied</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												))}
											</div>
										)}

										{isLoaned && loan.attributes.loan_start && (
											<div
												className='loan'
												key={loan.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												<p className='id'>{loan.attributes.loan_id}</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.loan_start && (
													<p className='start btn'>Loaned</p>
												)}
												<p className='total'>
													<TbCurrencyNaira fontSize={20} color='#1F4173' />
													{addCommas(loan.attributes.amount)}
												</p>
											</div>
										)}

										{isOverdue && loan.attributes.overdue && (
											<div
												className='loan'
												key={loan.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												<p className='id'>{loan.attributes.loan_id}</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.overdue && (
													<p className='overdue btn'>Loan Overdue</p>
												)}
												<p className='total'>
													<TbCurrencyNaira fontSize={20} color='#1F4173' />
													{addCommas(loan.attributes.amount)}
												</p>
											</div>
										)}

										{isPaid && loan.attributes.paid && (
											<div
												className='loan'
												key={loan.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												<p className='id'>{loan.attributes.loan_id}</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.paid && (
													<p className='paid btn'>Paid</p>
												)}
												<p className='total'>
													<TbCurrencyNaira fontSize={20} color='#1F4173' />
													{addCommas(loan.attributes.amount)}
												</p>
											</div>
										)}

										{isProcessing && loan.attributes.processing && (
											<div
												className='loan'
												key={loan.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												<p className='id'>{loan.attributes.loan_id}</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.processing && (
													<p className='processing btn'>Processing</p>
												)}
												<p className='total'>
													<TbCurrencyNaira fontSize={20} color='#1F4173' />
													{addCommas(loan.attributes.amount)}
												</p>
											</div>
										)}

										{isApproved && loan.attributes.approved && (
											<div
												className='loan'
												key={loan.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												<p className='id'>{loan.attributes.loan_id}</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.approved && (
													<p className='paid btn'>Approved</p>
												)}
												<p className='total'>
													<TbCurrencyNaira fontSize={20} color='#1F4173' />
													{addCommas(loan.attributes.amount)}
												</p>
											</div>
										)}

										{isDenied && loan.attributes.denied && (
											<div
												className='loan'
												key={loan.id}
												onClick={() => displayCustomer(e.attributes)}
											>
												<p className='id'>{loan.attributes.loan_id}</p>
												<p className='name'>
													{e.attributes.firstname + ' ' + e.attributes.lastname}
												</p>
												{loan.attributes.denied && (
													<p className='overdue btn'>Denied</p>
												)}
												<p className='total'>
													<TbCurrencyNaira fontSize={20} color='#1F4173' />
													{addCommas(loan.attributes.amount)}
												</p>
											</div>
										)}
									</>
								))}

							{user &&
								user?.supervisor &&
								customers?.data?.map((e) => (
									<div className='loanee_details' key={e.id}>
										{e?.attributes?.loans?.data?.map((loan) => (
											<>
												{isAll && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
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
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
														)}
														{loan.attributes.overdue && (
															<p className='overdue btn'>Loan Overdue</p>
														)}
														{loan.attributes.processing && (
															<p className='processing btn'>Processing</p>
														)}
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														{loan.attributes.denied && (
															<p className='overdue btn'>Denied</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isLoaned && loan.attributes.loan_start && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isOverdue && loan.attributes.overdue && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.overdue && (
															<p className='overdue btn'>Loan Overdue</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isPaid && loan.attributes.paid && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.paid && (
															<p className='paid btn'>Paid</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isProcessing && loan.attributes.processing && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.processing && (
															<p className='processing btn'>Processing</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isApproved && loan.attributes.approved && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isDenied && loan.attributes.denied && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.denied && (
															<p className='overdue btn'>Denied</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}
											</>
										))}
									</div>
								))}
							{user &&
								user.manager &&
								customers?.data?.map((e) => (
									<div className='loanee_details' key={e.id}>
										{e?.attributes?.loans?.data?.map((loan) => (
											<>
												{isAll && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
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
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
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
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isLoaned && loan.attributes.loan_start && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isOverdue && loan.attributes.overdue && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.overdue && (
															<p className='overdue btn'>Loan Overdue</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isPaid && loan.attributes.paid && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.paid && (
															<p className='paid btn'>Paid</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isProcessing && loan.attributes.processing && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.processing && (
															<p className='processing btn'>Processing</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isApproved && loan.attributes.approved && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isDenied && loan.attributes.denied && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.denied && (
															<p className='overdue btn'>Denied</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}
											</>
										))}
									</div>
								))}
							{user &&
								user?.md &&
								customers?.data?.map((e) => (
									<div className='loanee_details' key={e.id}>
										{e?.attributes?.loans?.data?.map((loan) => (
											<>
												{isAll && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
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
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
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
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isLoaned && loan.attributes.loan_start && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.loan_start && (
															<p className='start btn'>Loaned</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isOverdue && loan.attributes.overdue && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.overdue && (
															<p className='overdue btn'>Loan Overdue</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isPaid && loan.attributes.paid && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.paid && (
															<p className='paid btn'>Paid</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isProcessing && loan.attributes.processing && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.processing && (
															<p className='processing btn'>Processing</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isApproved && loan.attributes.approved && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.approved && (
															<p className='paid btn'>Approved</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}

												{isDenied && loan.attributes.denied && (
													<div
														className='loan'
														key={loan.id}
														onClick={() => displayCustomer(e.attributes)}
													>
														<p className='id'>{loan.attributes.loan_id}</p>
														<p className='name'>
															{e.attributes.firstname +
																' ' +
																e.attributes.lastname}
														</p>
														{loan.attributes.denied && (
															<p className='overdue btn'>Denied</p>
														)}
														<p className='total'>
															<TbCurrencyNaira fontSize={20} color='#1F4173' />
															{addCommas(loan.attributes.amount)}
														</p>
													</div>
												)}
											</>
										))}
									</div>
								))}
						</div>
					</div>
				</div>
				<div className='wrapper'>
					<div className='actions'>
						<div className='btn'>
							<button>
								<Link href='/create_user/loan_info'>
									<a>
										Create User <FaPlus fontSize={16} />
									</a>
								</Link>
							</button>
						</div>
						<div className='account'>
							<div className='item'>
								<RiFileReduceLine fontSize={20} /> New Loan
							</div>
							<div className='item'>
								<RiFileReduceLine fontSize={20} /> Update User Information
							</div>
						</div>
					</div>
					<div className='recent'>
						<h2>Recent Customers</h2>
						{customers &&
							customers?.data?.map(
								(c) =>
									user && (
										// user.id === c.attributes.user.data.id &&
										<div className='recent_customers' key={c.id}>
											{c.image ? (
												<Image
													src={c.attributes.image.url}
													width={50}
													height={50}
													alt='user image'
												/>
											) : (
												<Image
													src={userImage}
													width={50}
													height={50}
													alt='user image'
												/>
											)}
											<div className='details'>
												{console.log(c)}
												<h3>
													{c.attributes.firstname + ' ' + c.attributes.lastname}
												</h3>
												{c.attributes.disbursed && (
													<p className='loaned'>Loaned</p>
												)}
												{c.attributes.paid && <p className='paid'>Paid</p>}
												{c.attributes.dues_soon && (
													<p className='due_soon'>Loan Due Soon</p>
												)}
												{c.attributes.due && (
													<p className='overdue'>Loan Overdue</p>
												)}
												{c.attributes.processing && (
													<p className='processing'>Processing</p>
												)}
												<p>{c.status}</p>
											</div>
										</div>
									)
							)}
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Dashboard
