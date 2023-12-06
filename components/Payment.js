import React, { useContext, useEffect, useState } from 'react'
import { usePaystackPayment } from 'react-paystack'
import { API_URL, NEXT_PUBLIC_URL, PAYSTACK_KEY } from '../config'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'
import toast from 'react-hot-toast'

const Payment = ({ email }) => {
	const [ref, setRef] = useState('')

	const router = useRouter()

	const { setAuthCode } = useContext(AuthContext)

	const { reference } = router.query

	useEffect(() => {
		if (reference) {
			handleVerify()
		}
	}, [reference])

	const handleInit = async () => {
		const res = await fetch(`https://api.paystack.co/transaction/initialize`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${PAYSTACK_KEY}`,
			},
			body: JSON.stringify({
				email,
				currency: 'NGN',
				amount: 5000,
			}),
		})

		const data = await res.json()

		console.log(data)
		// console.log(data)

		window.location.replace(data.data.authorization_url)
	}

	const handleVerify = async () => {
		const res = await fetch(
			`https://api.paystack.co/transaction/verify/${reference}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${PAYSTACK_KEY}`,
				},
			}
		)

		const data = await res.json()

		console.log(data.data.authorization.authorization_code)

		setAuthCode(data.data.authorization.authorization_code)

		if (data.status === 'success') {
			toast.success('Card added successfully!', {
				duration: 6000,
			})
		}
	}

	return (
		<div>
			{!reference && (
				<div className=''>
					<div
						onClick={handleInit}
						className='  text-[#0043f1] font-bold border-2 border-[#0043f1] rounded-md w-[7rem] flex justify-center cursor-pointer my-[2rem] py-[0.5rem] hover:bg-[#0043f1] hover:text-white duration-300 ease-in-out'
					>
						Add Card
					</div>
				</div>
			)}
		</div>
	)
}

export default Payment
