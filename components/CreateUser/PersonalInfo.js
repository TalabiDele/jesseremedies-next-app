import React, { useState, useContext } from 'react'
import { Container } from './style'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'
import useLocalStorage from '../hooks/useLocalStorage'

const PersonalInfo = ({
	loanInfo,
	setLoanInfo,
	personalInfo,
	setPersonalInfo,
	financialInfo,
	setFinancialInfo,
	review,
	setReview,
}) => {
	const [isGender, setIsGender] = useLocalStorage('is_gender', null)

	const router = useRouter()

	const {
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
		dob,
		setDob,
		phoneNumber,
		setPhoneNumber,
		referenceNumber,
		setReferenceNumber,
		id,
		setId,
		passport,
		setPassport,
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
		salaryData,
		setSalaryDate,
		signature,
		setSignature,
		isPassport,
		setIsPassport,
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
	} = useContext(AuthContext)

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()

			fileReader.onload = () => {
				resolve(fileReader.result)
			}

			fileReader.onerror = (error) => {
				reject(error)
			}

			if (file) {
				fileReader.readAsDataURL(file)
				// reader.readAsDataURL(event.target.files[0]);
			}
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		setPersonalInfo(false)
		setFinancialInfo(true)

		router.push('/create_user/financial_info')
	}

	const handlePassport = async (e) => {
		setPassport(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setIsPassport(base64)
	}

	const handleId = async (e) => {
		setIsId(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setId(base64)
	}

	const handleOfficeId = async (e) => {
		setIsOffice(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setOfficeId(base64)
	}

	const handlePayslip = async (e) => {
		setIsPaySlip(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setPaySlip(base64)
	}

	const handleUtility = async (e) => {
		setIsUtility(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setUtility(base64)
	}

	const handleCac = async (e) => {
		setIsCac(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setCac(base64)
	}

	const handleMemo = async (e) => {
		setIsMemo(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setMemo(base64)
	}

	const handleSignature = async (e) => {
		setIsSign(e.target.files[0])

		const base64 = await convertBase64(e.target.files[0])

		setSignature(base64)
	}

	const handleMale = () => {
		setGender('male')
		setIsGender(true)
	}

	const handleFemale = () => {
		setGender('female')
		setIsGender(false)
	}

	return (
		<Container>
			<div className='container'>
				<h1>Personal Information</h1>
				<form action='' onSubmit={handleSubmit}>
					{/* <div className="no_flex"> */}
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='firstname'>First Name</label>
							<input
								type='text'
								placeholder='Bayo'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='Lastname'>Last Name</label>
							<input
								type='text'
								placeholder='Ojo'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='dob'>DOB</label>
							<input
								type='date'
								value={dob}
								onChange={(e) => setDob(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='address'>Gender</label>
							<input
								type='button'
								placeholder='Male'
								value='male'
								onChange={(e) => setGender(e.target.value)}
								onClick={handleMale}
								className={isGender ? 'active btn' : 'btn'}
							/>
							<input
								type='button'
								placeholder='Female'
								value='female'
								onChange={(e) => setGender(e.target.value)}
								onClick={handleFemale}
								className={isGender ? 'btn' : 'active btn'}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='address'>Employment Type</label>
							<select
								name='employment_type'
								id='employment_type'
								onChange={(e) => setEmploymentType(e.target.value)}
							>
								<option value='contract staff'>Contract Staff</option>
								<option value='Permanent Staff'>Permanent Staff</option>
								<option value='business owner'>Business Owner</option>
								<option value='part time staff'>Part-Time Staff</option>
							</select>
						</div>
					</div>
					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='address'>Current Address</label>
							<input
								type='text'
								placeholder='2, abc street, defg'
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='state'>Residential State</label>
							<input
								type='text'
								placeholder='Lagos'
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='position'>Position Held at Work</label>
							<input
								type='text'
								placeholder='Manager'
								value={position}
								onChange={(e) => setPosition(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='dependants'>Number of Dependants</label>
							<input
								type='number'
								placeholder='3'
								value={dependants}
								onChange={(e) => setDependants(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='origin'>State of Origin</label>
							<input
								type='text'
								placeholder='State of Origin'
								value={origin}
								onChange={(e) => setOrigin(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='dependants'>Salary Data</label>
							<input
								type='date'
								// placeholder="3"
								value={salaryData}
								onChange={(e) => setSalaryDate(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='email'>Email Address</label>
							<input
								type='email'
								placeholder='johdoe@email.com'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='phone'>Phone Number</label>
							<input
								type='number'
								placeholder='081*********'
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='reference'>Reference Full Name</label>
							<input
								type='text'
								placeholder='Rufus Giwa'
								value={reference}
								onChange={(e) => setReference(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='ref_number'>Reference Phone Number</label>
							<input
								type='number'
								placeholder='081*********'
								value={referenceNumber}
								onChange={(e) => setReferenceNumber(e.target.value)}
							/>
						</div>
					</div>

					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='passport'>Upload Passport Photograph</label>
							<input type='file' onChange={(e) => handlePassport(e)} />
						</div>
						<div className='no_flex'>
							<label htmlFor='id'>Upload Means of Identification</label>
							<input type='file' onChange={(e) => handleId(e)} />
						</div>
					</div>

					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='office_id'>Upload Office ID</label>
							<input type='file' onChange={(e) => handleOfficeId(e)} />
						</div>
						<div className='no_flex'>
							<label htmlFor='payslip'>Upload Payslip</label>
							<input type='file' onChange={(e) => handlePayslip(e)} />
						</div>
					</div>

					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='utility'>Upload Utility Bill</label>
							<input type='file' onChange={(e) => handleUtility(e)} />
						</div>
						<div className='no_flex'>
							<label htmlFor='cac'>Upload CAC(Business Owners)</label>
							<input type='file' onChange={(e) => handleCac(e)} />
						</div>
					</div>

					<div className='flex_two'>
						<div className='no_flex'>
							<label htmlFor='memo'>Upload Memorandum</label>
							<input type='file' onChange={(e) => handleMemo(e)} />
						</div>
						<div className='no_flex'>
							<label htmlFor='signature'>Upload Signature</label>
							<input type='file' onChange={(e) => handleSignature(e)} />
						</div>
					</div>

					{/* </div> */}
					<div className='btns'>
						<button className='cancel'>Cancel</button>
						<button type='submit' className='submit'>
							Continue
						</button>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default PersonalInfo
