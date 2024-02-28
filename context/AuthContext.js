import { createContext, useState, useEffect } from 'react'
import { NEXT_PUBLIC_URL, API_URL, PAYSTACK_KEY } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import { useRouter } from 'next/router'
import useLocalStorage from '@/components/hooks/useLocalStorage'
import moment from 'moment'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [sent, setSent] = useState(false)
	const [firstName, setFirstName] = useLocalStorage('firstname', '')
	const [lastName, setLastName] = useLocalStorage('lastname', '')
	const [address, setAddress] = useLocalStorage('address', '')
	const [state, setState] = useLocalStorage('state', '')
	const [email, setEmail] = useLocalStorage('email', '')
	const [dob, setDob] = useLocalStorage('dob', null)
	const [phoneNumber, setPhoneNumber] = useLocalStorage('phone_number', null)
	const [reference, setReference] = useLocalStorage('reference', '')
	const [referenceNumber, setReferenceNumber] = useLocalStorage(
		'reference_number',
		null
	)
	const [loanAmount, setLoanAmount] = useLocalStorage('loanAmount', '')
	const [duration, setDuration] = useLocalStorage('duration', '')
	const [interest, setInterest] = useLocalStorage('interest', '')
	const [loanPurpose, setLoanPurpose] = useLocalStorage('loanPurpose', '')
	const [employmentStatus, setEmploymentStatus] = useLocalStorage(
		'employment_status',
		''
	)
	const [employer, setEmployer] = useLocalStorage('employer', '')
	const [dateStarted, setDateStarted] = useLocalStorage('date_started', '')
	const [workEmail, setWorkEmail] = useLocalStorage('workEmail', '')
	const [workNumber, setWorkNumber] = useLocalStorage('work_number', null)
	const [income, setIncome] = useLocalStorage('income', null)
	const [asset, setAsset] = useLocalStorage('asset', '')
	const [assetType, setAssetType] = useLocalStorage('asset_type', '')
	const [assetValue, setAssetValue] = useLocalStorage('asset_value', null)
	const [cardNumber, setCardNumber] = useLocalStorage('card_number', null)
	const [cvv, setCvv] = useLocalStorage('cvv', null)
	const [cardExpiry, setCardExpiry] = useLocalStorage('card_expiry', null)
	const [monthlyPayment, setMonthlyPayment] = useLocalStorage(
		'monthly_payment',
		null
	)
	const [officeId, setOfficeId] = useLocalStorage('office_id', null)
	const [passport, setPassport] = useLocalStorage('passport', {})
	const [id, setId] = useLocalStorage('id', null)
	const [payslip, setPaySlip] = useLocalStorage('payslip', null)
	const [utility, setUtility] = useLocalStorage('utility', null)
	const [cac, setCac] = useLocalStorage('cac', null)
	const [memo, setMemo] = useLocalStorage('memo', null)
	const [guarantorName, setGuarantorName] = useLocalStorage(
		'guarantor_name',
		''
	)
	const [guarantorBirth, setGuarantorBirth] = useLocalStorage(
		'guarantor_birth',
		''
	)
	const [guarantorOffice, setGuarantorOffice] = useLocalStorage(
		'guarantor_office',
		''
	)
	const [guarantorHome, setGuarantorHome] = useLocalStorage(
		'guarantor_home',
		''
	)
	const [guarantorPhone, setGuarantorPhone] = useLocalStorage(
		'guarantor_phone',
		null
	)
	const [guarantorCareer, setGuarantorCareer] = useLocalStorage(
		'guarantor_career',
		''
	)
	const [guarantorPosition, setGuarantorPosition] = useLocalStorage(
		'guarantor_position',
		''
	)
	const [guarantorRelation, setGuarantorRelation] = useLocalStorage(
		'guarantor_relation',
		''
	)
	const [guarantorLength, setGuarantorLength] = useLocalStorage(
		'guarantor_length',
		null
	)
	const [guarantorPassport, setGuarantorPassport] = useLocalStorage(
		'guarantor_passport',
		null
	)
	const [guarantorEmployer, setGuarantorEmployer] = useLocalStorage(
		'guarantor_employer',
		''
	)
	const [guarantorEmail, setGuarantorEmail] = useLocalStorage(
		'guarantor_email',
		''
	)
	const [gender, setGender] = useLocalStorage('gender', '')
	const [position, setPosition] = useLocalStorage('position', '')
	const [employmentType, setEmploymentType] = useLocalStorage(
		'employment_type',
		''
	)
	const [spouseName, setSpouseName] = useLocalStorage('spouse_name', '')
	const [maidenName, setMaidenName] = useLocalStorage('maiden_name', '')
	const [spousePhone, setSpousePhone] = useLocalStorage('spouse_phone', '')
	const [accountName, setAccountName] = useLocalStorage('account_name', '')
	const [bankName, setBankName] = useLocalStorage('bank_name', '')
	const [accountNumber, setAccountNumber] = useLocalStorage('accountNumber', '')
	const [landmark, setLandMark] = useLocalStorage('landmark', '')
	const [colour, setColour] = useLocalStorage('colour', '')

	const [dependants, setDependants] = useLocalStorage('dependants', null)
	const [origin, setOrigin] = useLocalStorage('origin', '')
	const [salaryDate, setSalaryDate] = useLocalStorage('salaryDate', null)
	const [signature, setSignature] = useLocalStorage('signature', null)
	const [isPassport, setIsPassport] = useLocalStorage('isPassport', null)
	const [isGuarantorPassport, setIsGuarantorPassport] = useLocalStorage(
		'isGuarantorPassport',
		null
	)
	const [search, setSearch] = useState()
	const [loading, setLoading] = useState(false)
	const [authCode, setAuthCode] = useLocalStorage('authorization_code', '')
	const [isId, setIsId] = useLocalStorage('is_id', {})
	const [isPaySlip, setIsPaySlip] = useLocalStorage('is_payslip', {})
	const [isUtility, setIsUtility] = useLocalStorage('is_utile', {})
	const [isCac, setIsCac] = useLocalStorage('is_cac', {})
	const [isMemo, setIsMemo] = useLocalStorage('is_memo', {})
	const [isSign, setIsSign] = useLocalStorage('is_sign', {})
	const [isOffice, setIsOffice] = useLocalStorage('is_office', {})
	const [isGuarantor, setIsGuarantor] = useLocalStorage('is_guarantor', {})
	const [loans, setLoans] = useState()
	const [customers, setCustomers] = useState()
	const [customerType, setCustomerType] = useLocalStorage('customer_type', '')
	const [guarantorId, setGuarantorId] = useLocalStorage('guarantor_id', null)
	const [isGuarantorId, setIsGuarantorId] = useLocalStorage(
		'is_guarantor_id',
		null
	)
	const [workAddress, setWorkAddress] = useLocalStorage('work_address', '')
	const [guarantorOrigin, setGuarantorOrigin] = useLocalStorage(
		'guarantor_origin',
		''
	)
	const [isDebit, setIsDebit] = useState(false)

	const router = useRouter()

	const date = new Date()

	const currentMonth = date.getMonth() + 1

	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()

	useEffect(() => {
		checkUserLoggedIn()
		handleCustomers()
		handleLoans()

		// if (customers) {
		handlePayment()
		// }

		// customers?.forEach((e) => {
		// 	// handleCharge()
		// })

		// Update a field after payment is made
		// Check if that field is updated to avoid double debit
		// Check if loan amount + interest === paid amount
		// Loop through all the loans to ensure debit
		// Create a backend field that checks if the customer has an active loan
		// Run the debit event if the customer has an active loan
		// Set the active loan to false if the loan has been fully paid
		// if(date.getDate() === )
	}, [])

	const handlePayment = async () => {
		// console.log(customers)

		const res = await fetch(`${API_URL}/customers?populate=*`, {
			method: 'GET',
		})

		const data = await res.json()

		// setCustomers(data.data)

		data?.data?.map((customer) => {
			if (customer?.attributes?.customer_type === 'salary earner') {
				console.log(date.getDate(), parseInt(customer?.attributes.salary_day))
				customer?.attributes?.loans?.data?.map((loan) => {
					console.log(customer?.attributes?.loans.data[0])
					if (
						loan?.attributes?.loan_start &&
						date.getDate() === parseInt(customer?.attributes.salary_day)
					) {
						console.log('current user', customer)
						console.log(
							customer?.attributes?.email,
							Number(
								customer?.attributes?.loans?.data[0]?.attributes
									?.monthly_payment
							),
							customer?.attributes?.payments?.data[0]?.attributes
								?.authorization_code
						)
						if (customer?.attributes?.monthly_payments?.data?.length > 0) {
							console.log(customer?.attributes)
							customer?.attributes?.monthly_payments?.data?.map((month) => {
								if (month?.attributes?.date !== moment().format('YYYY-MM-DD')) {
									console.log(
										customer?.attributes?.email,
										Number(
											customer?.attributes?.loans?.data[0]?.attributes
												?.monthly_payment
										),
										customer?.attributes?.payments?.data[0]?.attributes
											?.authorization_code
									)
									setIsDebit(true)
									// handleCharge(
									// 	customer?.attributes?.email,
									// 	Number(
									// 		customer?.attributes?.loans?.data[0]?.attributes
									// 			?.monthly_payment
									// 	),
									// 	customer?.attributes?.payments?.data[0]?.attributes
									// 		?.authorization_code
									// )
								}
							})
						} else {
							console.log(
								customer?.attributes?.email,
								Number(
									customer?.attributes?.loans?.data[0]?.attributes
										?.monthly_payment
								),
								customer?.attributes?.payments?.data[0]?.attributes
									?.authorization_code,
								customer.id
							)
							setIsDebit(true)
							console.log(parseInt(customer?.attributes.salary_day))
							handleCharge(
								customer?.attributes?.email,
								Number(
									customer?.attributes?.loans?.data[0]?.attributes
										?.monthly_payment
								),
								customer?.attributes?.payments?.data[0]?.attributes
									?.authorization_code,
								customer
							)
						}
					}
				})
			}
		})
	}

	const handleMonthlyPayment = async (customer, amount, reference) => {
		console.log(customer)
		const res = await fetch(`${API_URL}/monthly-payments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				data: {
					customer: {
						id: customer,
					},
					date: moment().format('YYYY-MM-DD'),
					amount,
					reference,
				},
			}),
		})

		const data = await res.json()

		console.log(data)
	}

	// Charge customers monthly
	const handleCharge = async (email, amount, auth, customer) => {
		const res = await fetch(
			`https://api.paystack.co/transaction/charge_authorization`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${PAYSTACK_KEY}`,
				},
				body: JSON.stringify({
					authorization_code: auth,
					email,
					amount: `${amount}00`,
				}),
			}
		)

		const data = await res.json()

		console.log(data)
		console.log(customer.id)

		if (data?.status) {
			handleMonthlyPayment(
				customer?.id,
				data?.data?.amount,
				data?.data?.reference
			)
		}
	}

	// Get all customers
	const handleCustomers = async () => {
		const res = await fetch(`${API_URL}/customers?populate=*`, {
			method: 'GET',
		})

		const data = await res.json()

		setCustomers(data.data)
	}

	// Get all loans
	const handleLoans = async () => {
		const res = await fetch(`${API_URL}/loans?populate=*`, {
			method: 'GET',
		})

		const data = await res.json()

		setLoans(data.data)
	}

	// Register
	const register = async (user) => {
		setLoading(true)
		const res = await fetch(`${NEXT_PUBLIC_URL}/api/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})

		if (!res.ok) {
			setEmailError(res)

			setTimeout(() => {
				setEmailError(false)
			}, 5000)
		}

		const data = await res.json()

		setUserData(data)

		if (res.ok) {
			setLoading(true)
			setUser(data.user)
			setSent(true)
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
			setTimeout(() => {
				router.push('/feeds')
			}, 10000)
			setEmailMessage('Check email for confirmation!')
			setIsLoading(false)
		} else {
			setEmailError(true)
			setTimeout(() => {
				setLoading(false)
				setEmailError(false)
			}, 1000)
		}
	}

	const forgotPassword = async ({ email }) => {
		const res = await fetch(`${NEXT_PUBLIC_URL}/api/forgot-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
			}),
		})

		const data = await res.json()

		if (res.ok) {
			setUser(data.user.user)
			// router.push("/feeds");
		} else {
			setErrorMessage(data.message)
			setError(true)
		}
	}

	// Login
	const login = async ({ email: identifier, password }) => {
		const res = await fetch(`${NEXT_PUBLIC_URL}/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				identifier,
				password,
			}),
		})

		const data = await res.json()

		if (res.ok) {
			setUser(data.user.user)
			// setUserData(data);
			router.push('/dashboard')
		} else {
			toast.error(data.message)
			setErrorMessage(data.message)
			setError(true)
		}
	}

	// Logout
	const logout = async () => {
		const res = await fetch(`${NEXT_PUBLIC_URL}/api/logout`, {
			method: 'POST',
		})

		if (res.ok) {
			setUser(null)
			router.push('/login')
		}
	}

	// Check user logged in
	const checkUserLoggedIn = async () => {
		const res = await fetch(`${NEXT_PUBLIC_URL}/api/user`)
		const data = await res.json()

		if (res.ok) {
			setUser(data.user)
		} else {
			setUser(null)
		}
	}

	const addCommas = (e) => {
		return e?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
				checkUserLoggedIn,
				firstName,
				setFirstName,
				lastName,
				setLastName,
				address,
				setAddress,
				state,
				setState,
				email,
				setEmail,
				reference,
				setReference,
				referenceNumber,
				setReferenceNumber,
				dob,
				setDob,
				phoneNumber,
				setPhoneNumber,
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
				passport,
				setPassport,
				id,
				setId,
				officeId,
				setOfficeId,
				payslip,
				setPaySlip,
				utility,
				setUtility,
				cac,
				setCac,
				memo,
				setMemo,
				addCommas,
				guarantorHome,
				setGuarantorHome,
				guarantorBirth,
				setGuarantorBirth,
				guarantorOffice,
				setGuarantorOffice,
				guarantorPhone,
				setGuarantorPhone,
				guarantorCareer,
				setGuarantorCareer,
				guarantorPosition,
				setGuarantorPosition,
				guarantorRelation,
				setGuarantorRelation,
				guarantorLength,
				setGuarantorLength,
				guarantorPassport,
				setGuarantorPassport,
				guarantorName,
				setGuarantorName,
				guarantorEmployer,
				setGuarantorEmployer,
				guarantorEmail,
				setGuarantorEmail,
				gender,
				setGender,
				position,
				setPosition,
				employmentType,
				setEmploymentType,
				dependants,
				setDependants,
				origin,
				setOrigin,
				salaryDate,
				setSalaryDate,
				signature,
				setSignature,
				isPassport,
				setIsPassport,
				isGuarantorPassport,
				setIsGuarantorPassport,
				search,
				setSearch,
				loading,
				setLoading,
				authCode,
				setAuthCode,
				isId,
				setIsId,
				isPaySlip,
				setIsPaySlip,
				isUtility,
				setIsUtility,
				isCac,
				setIsCac,
				isMemo,
				setIsMemo,
				isSign,
				setIsSign,
				isOffice,
				setIsOffice,
				isGuarantor,
				setIsGuarantor,
				customerType,
				setCustomerType,
				guarantorId,
				setGuarantorId,
				isGuarantorId,
				setIsGuarantorId,
				workAddress,
				setWorkAddress,
				guarantorOrigin,
				setGuarantorOrigin,
				spouseName,
				setSpouseName,
				maidenName,
				setMaidenName,
				spousePhone,
				setSpousePhone,
				accountName,
				setAccountName,
				bankName,
				setBankName,
				accountNumber,
				setAccountNumber,
				landmark,
				setLandMark,
				colour,
				setColour,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
