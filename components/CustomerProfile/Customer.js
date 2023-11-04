import React, { useContext, useState, useEffect } from 'react'
import { Container, Wrapper } from './Style'
import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import image from '@/public/userImage.png'
import { TbCurrencyNaira } from 'react-icons/tb'
import { MdCancel } from 'react-icons/md'
import { API_URL } from '@/config/index'
import { useRouter } from 'next/router'
import moment from 'moment'
import toast from 'react-hot-toast'

const Customer = ({ customers, token, payHistory }) => {
	const [isImage, setIsImage] = useState(false)
	const [isCac, setIsCac] = useState(false)
	const [isIdentification, setIsIdentification] = useState(false)
	const [isMemo, setIsMemo] = useState(false)
	const [isOfficeId, setIsOfficeId] = useState(false)
	const [isPayslip, setIsPayslip] = useState(false)
	const [isUtility, setIsUtility] = useState(false)
	const [isAdd, setIsAdd] = useState(false)
	const [isEdit, setIsEdit] = useState(false)
	const [amount, setAmount] = useState()
	const [loanInterest, setLoanInterest] = useState()
	const [loanDuration, setLoanDuration] = useState()
	const [loanPayment, setLoanPayment] = useState()
	const [purpose, setPurpose] = useState()
	const [id, setId] = useState()
	const [approvalComment, setApprovalComment] = useState('')
	const [isHistory, setIsHistory] = useState(false)
	const [isPay, setIsPay] = useState(true)

	const router = useRouter()

	console.log(payHistory)

	const {
		user,
		addCommas,
		loanAmount,
		setLoanAmount,
		duration,
		setDuration,
		interest,
		setInterest,
		loanPurpose,
		setLoanPurpose,
		monthlyPayment,
		setMonthlyPayment,
		authCode,
	} = useContext(AuthContext)

	const date = new Date()

	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()

	console.log(date.getDate())

	console.log(user)

	useEffect(() => {
		if (date.getDate() === 17) {
			console.log('Its today')
		} else {
			console.log('Not today')
		}

		customers?.forEach((customer) => {
			customer?.attributes.loans.data.forEach((loan) => {
				payHistory?.forEach((history) => {
					console.log(moment().format('YYYY-MM-DD'))
					if (
						history.attributes.payment_date === moment().format('YYYY-MM-DD')
					) {
						console.log(loan)
						setIsPay(false)

						if (moment().day() === 6 || moment().day() === 0) {
							setIsPay(false)
						}
					} else if (moment().day() === 1) {
						setIsPlay(true)
					}
				})
			})
		})

		console.log(moment().day())
	}, [])

	console.log(customers)

	const handleApprove = async (e) => {
		const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					processing: false,
					approved: true,
					approval_reason: approvalComment,
					// customer: {
					//   id: e.data.id,
					// },
				},
			}),
		})

		const data = loanRes.json()
		refreshData()

		console.log(data)
	}

	const handleDecline = async (e) => {
		const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					processing: false,
					denied: true,
					// customer: {
					//   id: e.data.id,
					// },
				},
			}),
		})

		const data = loanRes.json()
		refreshData()

		console.log(data)
	}

	const handleDisburse = async (e) => {
		const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					processing: false,
					denied: false,
					approved: false,
					disbursed: true,
					// customer: {
					//   id: e.data.id,
					// },
				},
			}),
		})

		const data = loanRes.json()
		refreshData()

		console.log(data)
	}

	const handleStart = async (e) => {
		const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					processing: false,
					denied: false,
					approved: false,
					disbursed: false,
					loan_start: true,
					// customer: {
					//   id: e.data.id,
					// },
				},
			}),
		})

		const data = loanRes.json()
		refreshData()

		console.log(data)
	}

	const displayDocument = (e) => {
		setIsImage(true)
	}

	const removeDocument = () => {
		setIsImage(false)
	}

	const addLoan = async (e) => {
		console.log(e)

		const loanRes = await fetch(`${API_URL}/loans?populate=*`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					interest,
					duration,
					processing: true,
					monthly_payment: monthlyPayment,
					loan_id: 'S00' + Math.random().toString(36).substr(2, 2),
					amount: loanAmount,
					purpose: loanPurpose,
					customer: {
						id: e.id,
						payment: {
							authorization_code: authCode,
						},
					},
				},
			}),
		})

		const data = loanRes.json()
		console.log(data)

		refreshData()
		setInterest('')
		setDuration('')
		setMonthlyPayment('')
		setLoanAmount('')
		setIsAdd(false)
	}

	const editLoan = async (e) => {
		const loanRes = await fetch(`${API_URL}/loans/${id}?populate=*`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					interest: loanInterest ? loanInterest : e.attributes.interest,
					duration: loanDuration ? loanDuration : e.attributes.duration,
					monthly_payment: Math.floor(
						(parseInt(amount ? amount : e.attributes.amount) / 100) *
							parseInt(loanInterest ? loanInterest : e.attributes.interest) *
							parseInt(loanDuration ? loanDuration : e.attributes.duration) +
							parseInt(amount ? amount : e.attributes.amount) /
								parseInt(duration ? duration : e.attributes.duration)
					),
					amount,
					purpose,
				},
			}),
		})

		const data = loanRes.json()
		console.log(data)

		refreshData()
		setAmount('')
		setLoanInterest('')
		setLoanDuration('')
		setMonthlyPayment('')
		setPurpose('')
		setIsEdit(false)
	}

	const handleEdit = (e) => {
		setIsEdit(true)
		setId(e)
	}

	const handlePayment = async (e) => {
		console.log(e.id)
		const res = await fetch(`${API_URL}/weekly-payments?populate=*`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					payment_date: `${year}-${month}-0${day}`,
					loan: {
						id: e.id,
					},
				},
			}),
		})

		const data = await res.json()

		if (res.ok) {
			toast.success('Payment recorded!', {
				duration: 6000,
			})
		}

		console.log(data)
	}

	const refreshData = () => router.replace(router.asPath)

	return (
		<>
			<Container>
				{/* <Wrapper>
        <div className="image">
          <Image src={} />
        </div>
      </Wrapper> */}
				{customers?.map((e) => (
					<>
						{isAdd && (
							<Wrapper>
								<div className='edit_modal'>
									<div className='form' action='' onSubmit={addLoan}>
										<h1>Add a New Loan</h1>
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
											<label htmlFor='monthly_payment'>Monthly Payment</label>
											<input
												type='number'
												placeholder='N100,000'
												value={monthlyPayment}
												onChange={(e) => setMonthlyPayment(e.target.value)}
											/>
											<label htmlFor='monthly_payment'>Purpose of Loan</label>
											<input
												type='text'
												placeholder='State Purpose'
												value={loanPurpose}
												onChange={(e) => setLoanPurpose(e.target.value)}
											/>
										</div>
										<div className='btns'>
											<button
												className='cancel'
												onClick={() => setIsAdd(false)}
											>
												Cancel
											</button>
											<button className='submit' onClick={() => addLoan(e)}>
												Continue
											</button>
										</div>
									</div>
								</div>
							</Wrapper>
						)}
						<div className='container' key={e.id}>
							<div className='wrapper'>
								<div className='personal'>
									<div className='img'>
										{e?.attributes?.passport?.data ? (
											<Image
												src={e.attributes.passport.data.attributes.url}
												width={100}
												height={100}
												alt='Profile image'
												className='image'
												objectFit='cover'
											/>
										) : (
											<Image
												src={image}
												width={100}
												height={100}
												alt='Profile image'
												className='image'
											/>
										)}
									</div>
									<div className='details'>
										<h2>
											{e.attributes.firstname + ' ' + e.attributes.lastname}
										</h2>
										<p>{e.attributes.address}</p>
										<p>{e.attributes.state}</p>
										<p>{e.attributes.phone_1}</p>
										<p>{e.attributes.email}</p>
										<p>{e.attributes.dob}</p>
										<p>{e.attributes.gender}</p>
									</div>
								</div>
								<div className='button'>
									<button className='add_loan' onClick={() => setIsAdd(true)}>
										Add Loan
									</button>
								</div>
							</div>
							<div className='customer_personal'>
								<div className='flex'>
									<div className='loan_wrapper'>
										<h3>Loans</h3>
										{e.attributes.loans.data.map((loan) => (
											<>
												{isHistory && (
													<Wrapper>
														<div className='edit_modal'>
															<div className='form' action=''>
																<h1 className=' font-bold text-xl mb-[1rem]'>
																	Payment History
																</h1>
																{payHistory.map(
																	(history) =>
																		history?.attributes.loan.data.id ===
																			loan.id && (
																			<div className='' key={history.id}>
																				<div className=' flex border-b border-gray-200 p-[1rem] justify-between w-full'>
																					<p className=''>
																						{history?.attributes.payment_date}
																					</p>
																					<p className=''>
																						<TbCurrencyNaira />
																						{addCommas(
																							loan?.attributes.monthly_payment
																						)}
																					</p>
																				</div>
																			</div>
																		)
																)}
															</div>
															<div className='btns'>
																<button
																	className='cancel'
																	onClick={() => setIsHistory(false)}
																>
																	Cancel
																</button>
															</div>
														</div>
													</Wrapper>
												)}
												{isEdit && (
													<Wrapper>
														<div className='edit_modal'>
															<div
																className='form'
																action=''
																onSubmit={addLoan}
															>
																<h1>Edit Loan</h1>
																<div className='no_flex'>
																	<label htmlFor='loan_amount'>
																		Loan Amount Requested
																	</label>
																	<input
																		type='number'
																		placeholder='N 50,000'
																		value={amount}
																		onChange={(e) => setAmount(e.target.value)}
																	/>
																	<label htmlFor='duration'>
																		Duration of Loan
																	</label>
																	<input
																		type='number'
																		placeholder='3 months'
																		value={loanDuration}
																		onChange={(e) =>
																			setLoanDuration(e.target.value)
																		}
																	/>
																	<label htmlFor='interest'>
																		Interest Rate
																	</label>
																	<input
																		type='number'
																		placeholder='10%'
																		value={loanInterest}
																		onChange={(e) =>
																			setLoanInterest(e.target.value)
																		}
																	/>
																	<label htmlFor='monthly_payment'>
																		Monthly Payment
																	</label>
																	<input
																		type='number'
																		placeholder='N100,000'
																		value={loanPayment}
																		onChange={(e) =>
																			setLoanPayment(e.target.value)
																		}
																	/>
																	<label htmlFor='monthly_payment'>
																		Purpose of Loan
																	</label>
																	<input
																		type='text'
																		placeholder='State Purpose'
																		value={purpose}
																		onChange={(e) => setPurpose(e.target.value)}
																	/>
																</div>
																<div className='btns'>
																	<button
																		className='cancel'
																		onClick={() => setIsEdit(false)}
																	>
																		Cancel
																	</button>
																	<button
																		className='submit'
																		onClick={() => editLoan(loan)}
																	>
																		Continue
																	</button>
																</div>
															</div>
														</div>
													</Wrapper>
												)}
												<div className='loan_container' key={loan.id}>
													<p>
														<span>Loan Amount: </span>
														<TbCurrencyNaira />
														{addCommas(loan.attributes.amount)}
													</p>
													<p>
														<span>Interest: </span>
														{loan.attributes.interest}% (
														<TbCurrencyNaira />
														{addCommas(
															(loan.attributes.amount / 100) *
																loan.attributes.interest
														)}
														) monthly
													</p>
													<p>
														<span>Duration of Loan: </span>
														{loan.attributes.duration} months
													</p>
													<p>
														<span>Monthly Payment: </span>
														<TbCurrencyNaira />
														{addCommas(loan.attributes.monthly_payment)}
													</p>
													<p>
														<span>Purpose of Loan: </span>
														{loan.attributes.purpose}
													</p>
													{loan.attributes.disbursed && (
														<p>
															Loan Status:{' '}
															<span className='loaned btn'>Disbursed</span>
														</p>
													)}
													{loan.attributes.paid && (
														<p>
															Loan Status:{' '}
															<span className='paid btn'>Paid</span>
														</p>
													)}
													{loan.attributes.approved && (
														<p>
															Loan Status:{' '}
															<span className='paid btn'>Approved</span>
														</p>
													)}
													{loan.attributes.due_soon && (
														<p>
															Loan Status:
															<span className='due_soon btn'>
																Loan Due Soon
															</span>
														</p>
													)}
													{loan.attributes.overdue && (
														<p>
															Loan Status:
															<span className='overdue btn'>Loan Overdue</span>
														</p>
													)}
													{loan.attributes.processing && (
														<p>
															Loan Status:
															<span className='processing btn'>Processing</span>
														</p>
													)}
													{loan.attributes.denied && (
														<p>
															Loan Status:
															<span className='overdue btn'>Denied</span>
														</p>
													)}
													{loan.attributes.loan_start && (
														<p>
															Loan Status:
															<span className='start btn'>Loaned</span>
														</p>
													)}
													<p>
														<span>Total: </span>
														<TbCurrencyNaira />
														{addCommas(
															(loan.attributes.amount / 100) *
																loan.attributes.interest *
																loan.attributes.duration +
																parseInt(loan.attributes.amount)
														)}
													</p>
													{loan.attributes.processing && (
														<>
															<textarea
																name='comment'
																id='comment'
																cols='30'
																rows='5'
																placeholder='Reason for approval'
																onChange={(e) =>
																	setApprovalComment(e.target.value)
																}
															></textarea>
														</>
													)}
													{loan.attributes.approval_reason && (
														<p>
															<span>Reason for Approval: </span>
															{loan.attributes.approval_reason}
														</p>
													)}

													{user &&
														user.manager &&
														loan.attributes.processing && (
															<div className='btns'>
																<button
																	className='approve'
																	onClick={() => handleApprove(loan)}
																>
																	Approve
																</button>
																<button
																	className='decline'
																	onClick={() => handleDecline(loan)}
																>
																	Decline
																</button>
															</div>
														)}
													{user && user.md && loan.attributes.approved && (
														<div className='btns'>
															<button
																className='approve'
																onClick={() => handleDisburse(loan)}
															>
																Disburse
															</button>
														</div>
													)}
													{user &&
														user.manager &&
														loan.attributes.disbursed && (
															<div className='btns'>
																<button
																	className='start'
																	onClick={() => handleStart(loan)}
																>
																	Start Loan
																</button>
															</div>
														)}

													<button
														className='edit_loan'
														onClick={() => handleEdit(loan.id)}
													>
														Edit Loan
													</button>
												</div>

												{loan?.attributes.loan_start && (
													<div className=''>
														{(user?.manager ||
															user?.md ||
															user?.supervisor) && (
															<div className=' mb-[2rem]'>
																<div className=' mb-[1rem]'>
																	<h1 className=' font-bold text-xl mb-[1rem]'>
																		Payment for this week
																	</h1>
																	{isPay && (
																		<button
																			className=' bg-[#0043f1] text-white rounded-md text-md py-[0.5rem] px-[1rem] mr-[1rem]'
																			onClick={() => handlePayment(loan)}
																		>
																			Paid
																		</button>
																	)}
																	{!isPay && (
																		<p className=''>Paid for this week</p>
																	)}
																	{/* <button className=' bg-[#e80000] text-white rounded-md text-md py-[0.5rem] px-[1rem]'>
																	Not Paid
																</button> */}
																</div>

																<div className=''>
																	<button
																		className=' bg-[#e80000] text-white rounded-md text-md py-[0.5rem] px-[1rem]'
																		onClick={() => setIsHistory(true)}
																	>
																		View Payment history
																	</button>
																</div>
															</div>
														)}
													</div>
												)}
											</>
										))}
									</div>
									<div className='more_info'>
										<div className='financial_wrapper'>
											<h3>Personal Information</h3>
											<div className='financial'>
												<div className='finance'>
													<p>
														Current Employment Status:{' '}
														<span>{e.attributes.employment_status}</span>
													</p>
													<p>
														Current Employer:{' '}
														<span>{e.attributes.employer}</span>
													</p>
													<p>
														Date Started:{' '}
														<span>{e.attributes.date_started}</span>
													</p>
													<p>
														Work Contact Info (Email):{' '}
														<span>{e.attributes.work_email}</span>
													</p>
													<p>
														Work Phone Number:{' '}
														<span>{e.attributes.work_phone}</span>
													</p>
													<p>
														Current Net Income:{' '}
														<span>
															<TbCurrencyNaira />
															{addCommas(e.attributes.current_income)}
														</span>
													</p>
													<p>
														Asset: <span>{e.attributes.asset}</span>
													</p>
													<p>
														Asset Type: <span>{e.attributes.asset_type}</span>
													</p>
													<p>
														Value in Naira:{' '}
														<span>
															<TbCurrencyNaira />
															{addCommas(e.attributes.value_of_asset)}
														</span>
													</p>
													<p>
														Customer type:{' '}
														<span className=' cust_type'>
															{e.attributes.customer_type}
														</span>
													</p>
												</div>
											</div>
										</div>
										<div className='financial_wrapper'>
											<h3>Financial Information</h3>
											<div className='financial'>
												<div className='finance'>
													<p>
														Current Employment Status:{' '}
														<span>{e.attributes.employment_status}</span>
													</p>
													<p>
														Current Employer:{' '}
														<span>{e.attributes.employer}</span>
													</p>
													<p>
														Date Started:{' '}
														<span>{e.attributes.date_started}</span>
													</p>
													<p>
														Work Contact Info (Email):{' '}
														<span>{e.attributes.work_email}</span>
													</p>
													<p>
														Work Phone Number:{' '}
														<span>{e.attributes.work_phone}</span>
													</p>
													<p>
														Current Net Income:{' '}
														<span>
															<TbCurrencyNaira />
															{addCommas(e.attributes.current_income)}
														</span>
													</p>
													<p>
														Asset: <span>{e.attributes.asset}</span>
													</p>
													<p>
														Asset Type: <span>{e.attributes.asset_type}</span>
													</p>
													<p>
														Value in Naira:{' '}
														<span>
															<TbCurrencyNaira />
															{addCommas(e.attributes.value_of_asset)}
														</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='documents'>
									<h3>Documents</h3>
									<div className='docs'>
										{e.attributes.cac.data && (
											<>
												<div className='image' onClick={displayDocument}>
													<Image
														src={e.attributes.cac.data.attributes.url}
														width={100}
														height={100}
														alt='documents'
														objectFit='cover'
														className='image'
													/>
												</div>
												{isImage && (
													<div className='modal'>
														<div className='image_modal'>
															<MdCancel
																fontSize={40}
																color='#2e7cf6'
																className='cancel'
																onClick={removeDocument}
															/>
															<Image
																src={e.attributes.cac.data.attributes.url}
																width={e.attributes.cac.data.attributes.width}
																height={e.attributes.cac.data.attributes.height}
																alt='documents'
																objectFit='cover'
															/>
														</div>
													</div>
												)}
											</>
										)}
										{e.attributes.identification.data && (
											<>
												<div
													className='image'
													onClick={() => setIsIdentification(true)}
												>
													<Image
														src={
															e.attributes.identification.data.attributes.url
														}
														width={100}
														height={100}
														alt='documents'
														objectFit='cover'
														className='image'
													/>
												</div>

												{isIdentification && (
													<div className='modal'>
														<div className='image_modal'>
															<MdCancel
																fontSize={40}
																color='#2e7cf6'
																className='cancel'
																onClick={() => setIsIdentification(false)}
															/>
															<Image
																src={
																	e.attributes.identification.data.attributes
																		.url
																}
																width={
																	e.attributes.identification.data.attributes
																		.width
																}
																height={
																	e.attributes.identification.data.attributes
																		.height
																}
																alt='documents'
																objectFit='cover'
															/>
														</div>
													</div>
												)}
											</>
										)}
										{e.attributes.memo.data && (
											<>
												<div className='image' onClick={() => setIsMemo(true)}>
													<Image
														src={e.attributes.memo.data.attributes.url}
														width={100}
														height={100}
														alt='documents'
														objectFit='cover'
														className='image'
													/>
												</div>
												{isMemo && (
													<div className='modal'>
														<div className='image_modal'>
															<MdCancel
																fontSize={40}
																color='#2e7cf6'
																className='cancel'
																onClick={() => setIsMemo(false)}
															/>
															<Image
																src={e.attributes.memo.data.attributes.url}
																width={e.attributes.memo.data.attributes.width}
																height={
																	e.attributes.memo.data.attributes.height
																}
																alt='documents'
																objectFit='cover'
															/>
														</div>
													</div>
												)}
											</>
										)}
										{e.attributes.office_id.data && (
											<>
												<div
													className='image'
													onClick={() => setIsOfficeId(true)}
												>
													<Image
														src={e.attributes.office_id.data.attributes.url}
														width={100}
														height={100}
														alt='documents'
														objectFit='cover'
														className='image'
													/>
												</div>

												{isOfficeId && (
													<div className='modal'>
														<div className='image_modal'>
															<MdCancel
																fontSize={40}
																color='#2e7cf6'
																className='cancel'
																onClick={() => setIsOfficeId(false)}
															/>
															<Image
																src={e.attributes.office_id.data.attributes.url}
																width={
																	e.attributes.office_id.data.attributes.width
																}
																height={
																	e.attributes.office_id.data.attributes.height
																}
																alt='documents'
																objectFit='cover'
															/>
														</div>
													</div>
												)}
											</>
										)}
										{e.attributes.payslip.data && (
											<>
												<div
													className='image'
													onClick={() => setIsPayslip(true)}
												>
													<Image
														src={e.attributes.payslip.data.attributes.url}
														width={100}
														height={100}
														alt='documents'
														objectFit='cover'
														className='image'
													/>
												</div>

												{isPayslip && (
													<div className='modal'>
														<div className='image_modal'>
															<MdCancel
																fontSize={40}
																color='#2e7cf6'
																className='cancel'
																onClick={() => setIsPayslip(false)}
															/>
															<Image
																src={e.attributes.cac.data.attributes.url}
																width={e.attributes.cac.data.attributes.width}
																height={e.attributes.cac.data.attributes.height}
																alt='documents'
																objectFit='cover'
															/>
														</div>
													</div>
												)}
											</>
										)}
										{e.attributes.utility.data && (
											<>
												<div
													className='image'
													onClick={() => setIsUtility(true)}
												>
													<Image
														src={e.attributes.utility.data.attributes.url}
														width={100}
														height={100}
														alt='documents'
														objectFit='cover'
														className='image'
													/>
												</div>

												{isUtility && (
													<div className='modal'>
														<div className='image_modal'>
															<MdCancel
																fontSize={40}
																color='#2e7cf6'
																className='cancel'
																onClick={() => setIsUtility(false)}
															/>
															<Image
																src={e.attributes.cac.data.attributes.url}
																width={e.attributes.cac.data.attributes.width}
																height={e.attributes.cac.data.attributes.height}
																alt='documents'
																objectFit='cover'
															/>
														</div>
													</div>
												)}
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					</>
				))}
			</Container>
		</>
	)
}

export default Customer
