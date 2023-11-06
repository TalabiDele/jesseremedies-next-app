import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Container } from './style'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const GuarantorInfo = () => {
	const {
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
		isGuarantorPassort,
		setIsGuarantorPassport,
		guarantorId,
		setGuarantorId,
		isGuarantorId,
		setIsGuarantorId,
	} = useContext(AuthContext)

	const router = useRouter()

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

	const handleSubmit = (e) => {
		e.preventDefault()

		if (guarantorName === '') {
			toast.error("Guarantor's name is required!", {
				duration: 6000,
			})
		} else if (guarantorHome === '') {
			toast.error("Guarantor's address is required!", {
				duration: 6000,
			})
		} else if (guarantorPhone === '') {
			toast.error("Guarantor's number is required!", {
				duration: 6000,
			})
		} else {
			router.push('/create_user/review')
		}
	}

	const handlePassport = async (e) => {
		setGuarantorPassport(e.target.files[0])
		const base64 = await convertBase64(e.target.files[0])

		setIsGuarantorPassport(base64)
	}

	const handleGuarantorId = async (e) => {
		setGuarantorId(e.target.files[0])
		const base64 = await convertBase64(e.target.files[0])

		setIsGuarantorId(base64)
	}

	return (
		<Container>
			<div className='container'>
				<h1>Guarantor Information</h1>
				<form action='' onSubmit={handleSubmit}>
					{/* <div className="no_flex"> */}
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='guarantor_name'>Guarantor Name</label>
							<input
								type='text'
								placeholder='Bayo Daniels'
								value={guarantorName}
								onChange={(e) => setGuarantorName(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantor_birth'>Place of Birth</label>
							<input
								type='text'
								placeholder='Lagos'
								value={guarantorBirth}
								onChange={(e) => setGuarantorBirth(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantor_office'>Office Address</label>
							<input
								type='text'
								placeholder='1, ABC Street.'
								value={guarantorOffice}
								onChange={(e) => setGuarantorOffice(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='guarantor_home'>Home Address</label>
							<input
								type='text'
								placeholder='1, ABC Street'
								value={guarantorHome}
								onChange={(e) => setGuarantorHome(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantor_employer'>Office Employer</label>
							<input
								type='text'
								placeholder='ABC Limited'
								value={guarantorEmployer}
								onChange={(e) => setGuarantorEmployer(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantor_phone'>Phone Number</label>
							<input
								type='number'
								placeholder='081********'
								value={guarantorPhone}
								onChange={(e) => setGuarantorPhone(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='gurantor_career'>Career</label>
							<input
								type='text'
								placeholder='Banker'
								value={guarantorCareer}
								onChange={(e) => setGuarantorCareer(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantor_position'>Position</label>
							<input
								type='text'
								placeholder='Manager'
								value={guarantorPosition}
								onChange={(e) => setGuarantorPosition(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantor_relationship'>Relationship</label>
							<input
								type='text'
								placeholder='Brother'
								value={guarantorRelation}
								onChange={(e) => setGuarantorRelation(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex_three'>
						<div className='no_flex'>
							<label htmlFor='passport'>Guarantor Passport Photograph</label>
							<input type='file' onChange={(e) => handlePassport(e)} />
						</div>
						<div className='no_flex'>
							<label htmlFor='guarantorId'>Guarantor ID</label>
							<input type='file' onChange={(e) => handleGuarantorId(e)} />
						</div>
						<div className='no_flex'>
							<label htmlFor='passport'>How long have you know guarantor</label>
							<input
								type='number'
								value={guarantorLength}
								onChange={(e) => setGuarantorLength(e.target.value)}
							/>
						</div>
						<div className='no_flex'>
							<label htmlFor='email'>Guarantor Email</label>
							<input
								type='email'
								value={guarantorEmail}
								onChange={(e) => setGuarantorEmail(e.target.value)}
							/>
						</div>
					</div>

					{/* </div> */}
					<div className='btns'>
						<button className='cancel' onClick={() => router.back()}>
							Back
						</button>
						<button type='submit' className='submit'>
							Continue
						</button>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default GuarantorInfo
