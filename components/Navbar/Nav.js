import React, { useContext, useState } from 'react'
import { Container, Wrapper, All } from './style'
import userImage from '@/public/userImage.png'
import logo from '@/public/jesse-logo.png'
import {
	RiFunctionLine,
	RiHandCoinLine,
	RiFolderUserLine,
	RiUserReceived2Line,
	RiLineChartLine,
	RiAccountCircleLine,
} from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa'
import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from '../Search/Search'
import { API_URL } from '@/config/index'
import { MdOutlineLogout } from 'react-icons/md'

const Nav = () => {
	const { user, logout, search, setSearch } = useContext(AuthContext)

	const router = useRouter()

	const handleSearchChange = async (e) => {
		e.preventDefault()
		setIsSearch(true)

		setSearch(e.target.value)

		if (e.target.value === '') {
			setIsSearch(false)
		}

		router.push(`/search?term=${search}`)
	}

	return (
		<>
			<All>
				<Container>
					<div className='container'>
						<Image
							src={logo}
							alt=''
							width={200}
							height={30}
							objectFit='contain'
						/>
						<form action='' onSubmit={(e) => handleSearchChange(e)}>
							<input
								type='text'
								placeholder='Search User, Loan Id etc'
								onChange={(e) => setSearch(e.target.value)}
							/>
						</form>
						<div className='user_info'>
							<Image src={userImage} alt='user image' width={50} height={50} />
							{user && (
								<div className='username'>
									<p>{user.username}</p>
									{user.teller && <p className='type'>Loan Officer</p>}
									{user.supervisor && <p className='type'>Supervisor</p>}
									{user.manager && <p className='type'>Manager</p>}
									{user.md && <p className='type'>MD</p>}
								</div>
							)}
						</div>
					</div>
				</Container>
				<Wrapper>
					<div className='wrapper'>
						<ul>
							<Link href='/dashboard'>
								<a className={router.pathname === '/dashboard' ? 'active' : ''}>
									<li>
										<RiFunctionLine color='#1F4173' fontSize={30} />{' '}
										<p>Dashboard</p>
									</li>
								</a>
							</Link>
							{user && user.supervisor && user.manager && (
								<Link href='/loans'>
									<a className={router.pathname === '/loans' ? 'active' : ''}>
										<li>
											<RiHandCoinLine color='#1F4173' fontSize={30} />{' '}
											<p>Loans</p>
										</li>
									</a>
								</Link>
							)}
							<Link href='/users'>
								<a className={router.pathname === '/users' ? 'active' : ''}>
									<li>
										<RiFolderUserLine color='#1F4173' fontSize={30} />{' '}
										<p>Customers</p>
									</li>
								</a>
							</Link>
							{/* <Link href="/assigned">
                <a className={router.pathname === "/assigned" ? "active" : ""}>
                  <li>
                    <RiUserReceived2Line color="#1F4173" fontSize={30} />{" "}
                    <p>Assigned</p>
                  </li>
                </a>
              </Link> */}
							<Link href='/report'>
								<a className={router.pathname === '/report' ? 'active' : ''}>
									<li>
										<RiLineChartLine color='#1F4173' fontSize={30} />{' '}
										<p>Report</p>
									</li>
								</a>
							</Link>
							<Link href='/crm'>
								<a className={router.pathname === '/crm' ? 'active' : ''}>
									<li>
										<FaUsers color='#1F4173' fontSize={30} /> <p>CRM</p>
									</li>
								</a>
							</Link>
							{/* <Link href='/profile'>
								<a className={router.pathname === '/profile' ? 'active' : ''}>
									<li>
										<RiAccountCircleLine color='#1F4173' fontSize={30} />{' '}
										<p>Profile</p>
									</li>
								</a>
							</Link> */}
							<li onClick={() => logout()} className=' logout'>
								<MdOutlineLogout color='#ff0000' fontSize={30} /> Logout
							</li>
						</ul>
					</div>
				</Wrapper>
			</All>
		</>
	)
}

export default Nav
