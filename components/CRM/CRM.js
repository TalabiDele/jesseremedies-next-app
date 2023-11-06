import React, { useContext } from 'react'
import { Container } from './style'
import moment from 'moment'
import AuthContext from '@/context/AuthContext'
import { TbCurrencyNaira } from 'react-icons/tb'
import { useRouter } from 'next/router'

const CRM = ({ crms }) => {
	const { addCommas } = useContext(AuthContext)

	const router = useRouter()

	const displayCustomer = (e) => {
		console.log(e)
		router.push(`/${e?.attributes?.slug}`)
	}

	return (
		<Container>
			<div className='head'>
				<h1>CRM</h1>
				<button>Add</button>
			</div>
			<div className='container'>
				<div className='inner'>
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
						<div
							className='wrapper text-sm cursor-pointer'
							key={e.id}
							onClick={() => displayCustomer(e)}
						>
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

							{/* {e?.attributes.loans?.data.map((loan) => ( */}
							<p className=' flex items-center'>
								{console.log(e.attributes.loans?.data[0])}
								<TbCurrencyNaira />
								{addCommas(e.attributes.loans?.data[0]?.attributes.amount)}
							</p>
							{/* ))} */}
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default CRM
