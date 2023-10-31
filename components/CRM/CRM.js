import React, { useContext } from 'react'
import { Container } from './style'
import moment from 'moment'
import AuthContext from '@/context/AuthContext'
import { TbCurrencyNaira } from 'react-icons/tb'

const CRM = ({ crms }) => {
	const { addCommas } = useContext(AuthContext)

	console.log(crms)
	return (
		<Container>
			<div className='head'>
				<h1>CRM</h1>
				<button>Add</button>
			</div>
			<div className='container'>
				<ul>
					<li>Date</li>
					<li>Name</li>
					<li>Phone Number</li>
					<li>Email</li>
					<li>Career</li>
					<li>Average Income</li>
					<li>Loan Request</li>
				</ul>
				{crms.data.map((e) => (
					<div className='wrapper text-sm' key={e.id}>
						{/* {console.log(moment(e.attributes.date).format())}
						{moment(e.attributes.data).format()} */}
						{/* <p>{moment(e.attributes.date).format()}</p> */}
						<p>{moment(e.attributes.createdAt).format('MMM DD Y')}</p>
						<p>
							{e.attributes.firstname} {e.attributes.lastname}
						</p>
						<p>{e.attributes.phone_1}</p>
						<p>{e.attributes.email}</p>
						<p>{e.attributes.employee_position}</p>
						<p className=' flex items-center'>
							<TbCurrencyNaira />
							{addCommas(e.attributes.current_income)}
						</p>

						{e?.attributes.loans?.data.map((loan) => (
							<p className=' flex items-center' key={loan.id}>
								{console.log(loan)}
								<TbCurrencyNaira />
								{addCommas(loan.attributes.amount)}
							</p>
						))}
					</div>
				))}
			</div>
		</Container>
	)
}

export default CRM
