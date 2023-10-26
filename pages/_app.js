import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Toaster position='top-center' reverseOrder={false} />
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default MyApp
