import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '@/context/AuthContext'
import { Container } from './Style'
import { TbCurrencyNaira } from 'react-icons/tb'

const Reports = ({ token, users, customers, loans }) => {
	const { user, addCommas } = useContext(AuthContext)

	useEffect(() => {
		// getSum();
	}, [])

	const getSum = (c) => {
		loans.data.reduce(function (prev, current) {
			return prev + +current.attributes.amount
		}, 0)

		return <p>{sum}</p>
	}

	let ans = 0

	return (
		<Container>
			<div className='container'>
				<h1>Reports</h1>
				<div className='user_report'>
					{user?.teller &&
						users.map(
							(e) =>
								e.teller &&
								e.id === user?.id && (
									<div className='user_container'>
										<div className='inside'>
											<h3>{e.username}</h3>
											{customers.data.map(
												(cust) =>
													cust.attributes.user.data.id === e.id && (
														<div
															className='loan_reports'
															key={cust.attributes.id}
														>
															<div className='total_loaned'>
																<p>
																	{loans.data.map(
																		(cur) =>
																			cur.attributes.customers &&
																			cur.attributes.customers.data.id ===
																				cust.id && <p>{getSum(cust)}</p>
																	)}
																</p>
															</div>
														</div>
													)
											)}
											<div className='orders'>
												<div className='search'>
													<div className='input'>
														<input type='text' placeholder='Search User' />
													</div>
												</div>
												<div className='table'>
													<ul>
														<li>Loan Id</li>
														<li>Customer</li>
														<li>Loan Status</li>
														<li>Total</li>
													</ul>

													<div className='loanee_details'>
														{customers.data.map(
															(customer) =>
																customer.attributes.user.data.id === e.id &&
																customer.attributes.loans.data.map((loan) => (
																	<div
																		className='loan'
																		key={loan.attributes.id}
																	>
																		<p className='id'>
																			{loan.attributes.loan_id}
																		</p>
																		<p className='name'>
																			{customer.attributes.firstname +
																				' ' +
																				customer.attributes.lastname}
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
																		{loan.attributes.super_approve && (
																			<p className='paid btn'>In progress</p>
																		)}
																		{loan.attributes.due_soon && (
																			<p className='due_soon btn'>
																				Loan Due Soon
																			</p>
																		)}
																		{loan.attributes.overdue && (
																			<p className='overdue btn'>
																				Loan Overdue
																			</p>
																		)}
																		{loan.attributes.processing && (
																			<p className='processing btn'>
																				Processing
																			</p>
																		)}
																		{loan.attributes.loan_start && (
																			<p className='start btn'>Loaned</p>
																		)}
																		{loan.attributes.denied && (
																			<p className='overdue btn'>Denied</p>
																		)}
																		<p className='total'>
																			<TbCurrencyNaira
																				fontSize={20}
																				color='#1F4173'
																			/>
																			{addCommas(loan.attributes.amount)}
																		</p>
																	</div>
																))
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								)
						)}

					{(user?.manager || user?.md || user?.supervisor) &&
						users.map(
							(e) =>
								e.teller && (
									<div className='user_container'>
										<div className='inside'>
											<h3>{e.username}</h3>
											{customers.data.map(
												(cust) =>
													cust.attributes.user.data.id === e.id && (
														<div
															className='loan_reports'
															key={cust.attributes.id}
														>
															<div className='total_loaned'>
																<p>
																	{loans.data.map(
																		(cur) =>
																			cur.attributes.customers &&
																			cur.attributes.customers.data.id ===
																				cust.id && <p>{getSum(cust)}</p>
																	)}
																</p>
															</div>
														</div>
													)
											)}
											<div className='orders'>
												<div className='search'>
													<div className='input'>
														<input type='text' placeholder='Search User' />
													</div>
												</div>
												<div className='table'>
													<ul>
														<li>Loan Id</li>
														<li>Customer</li>
														<li>Loan Status</li>
														<li>Total</li>
													</ul>

													<div className='loanee_details'>
														{customers.data.map(
															(customer) =>
																customer.attributes.user.data.id === e.id &&
																customer.attributes.loans.data.map((loan) => (
																	<div
																		className='loan'
																		key={loan.attributes.id}
																	>
																		<p className='id'>
																			{loan.attributes.loan_id}
																		</p>
																		<p className='name'>
																			{customer.attributes.firstname +
																				' ' +
																				customer.attributes.lastname}
																		</p>
																		{loan.attributes.disbursed && (
																			<p className='loaned btn'>Disbursed</p>
																		)}
																		{loan.attributes.super_approve && (
																			<p className='paid btn'>In progress</p>
																		)}
																		{loan.attributes.paid && (
																			<p className='paid btn'>Paid</p>
																		)}
																		{loan.attributes.approved && (
																			<p className='paid btn'>Approved</p>
																		)}
																		{loan.attributes.due_soon && (
																			<p className='due_soon btn'>
																				Loan Due Soon
																			</p>
																		)}
																		{loan.attributes.overdue && (
																			<p className='overdue btn'>
																				Loan Overdue
																			</p>
																		)}
																		{loan.attributes.processing && (
																			<p className='processing btn'>
																				Processing
																			</p>
																		)}
																		{loan.attributes.loan_start && (
																			<p className='start btn'>Loaned</p>
																		)}
																		{loan.attributes.denied && (
																			<p className='overdue btn'>Denied</p>
																		)}
																		<p className='total'>
																			<TbCurrencyNaira
																				fontSize={20}
																				color='#1F4173'
																			/>
																			{addCommas(loan.attributes.amount)}
																		</p>
																	</div>
																))
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								)
						)}
				</div>
			</div>
		</Container>
	)
}

export default Reports
