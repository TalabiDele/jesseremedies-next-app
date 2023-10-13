import React, { useContext, useEffect, useState } from 'react'
import { usePaystackPayment } from 'react-paystack'
import { API_URL, NEXT_PUBLIC_URL } from '../config'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'

const Payment = () => {
	const [ref, setRef] = useState('')

	const router = useRouter()

	const { authCode, setAuthCode } = useContext(AuthContext)

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
				Authorization: `Bearer ${'sk_test_20495f33758cf7978aca8001adf66504cca65b25'}`,
			},
			body: JSON.stringify({
				email: 'customer@email.com',
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
					Authorization: `Bearer ${'sk_test_20495f33758cf7978aca8001adf66504cca65b25'}`,
				},
			}
		)

		const data = await res.json()

		console.log(data.data.authorization.authorization_code)

		setAuthCode(data.data.authorization.authorization_code)
	}

	return (
		<div>
			<div className=''>
				<div
					onClick={handleInit}
					className='  text-[#0043f1] font-bold border-2 border-[#0043f1] rounded-md w-[7rem] flex justify-center cursor-pointer my-[2rem] py-[0.5rem]'
				>
					Add Card
				</div>
			</div>
		</div>
	)
}

export default Payment
