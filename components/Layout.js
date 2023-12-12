import Head from 'next/head'
import Nav from './Navbar/Nav'
import { useContext, useState, useEffect } from 'react'
import AuthContext from '@/context/AuthContext'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default function Layout({
	title,
	keywords,
	description,
	children,
	router,
}) {
	const { user } = useContext(AuthContext)
	const isRouter = useRouter()

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
				/>
				{/* <link rel="shortcut icon" href="/favicon.ico" /> */}
			</Head>
			<Nav />
			<div>{children}</div>
			{/* {isRouter.pathname === "/login" ||
      isRouter.pathname === "/forgot-password" ||
      isRouter.pathname === "/reset-password" ? (
        <></>
      ) : (
        <Footer />
      )} */}
		</div>
	)
}

Layout.defaultProps = {
	title: 'Jesse Remedies',
	description: '',
	keywords: '',
}
