import styled, { createGlobalStyle, keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }


`

const round = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

export const Loader = styled.span`
	color: #fff;
	font-size: 45px;
	text-indent: -9999em;
	overflow: hidden;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	position: fixed;
	z-index: 100;
	transform: translateZ(0);
	animation: ${rotate} 1.7s infinite ease, ${round} 1.7s infinite ease;
`

export const LoaderDiv = styled.div`
	position: fixed;
	z-index: 50;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	background: #31313197;
`

export const GlobalStyle = createGlobalStyle`
 @page {
   /* size: landscape; */
   margin: 1cm;
   background-color: #fff;
 }
`

const PrintableBodyWrapper = styled.div`
	@media print {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const Container = styled.div`
	width: 80%;
	margin: auto;
	display: grid;
	justify-items: center;
	margin-bottom: 5rem;

	.image {
		margin-bottom: 1rem;
	}

	div.container {
		background: #fff;
		box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
		border-radius: 20px;
		padding: 3rem;
		width: 100%;

		h3 {
			text-align: center;
			margin-bottom: 1rem;
			font-size: 26px;
		}

		h2 {
			font-size: 16px;
			margin-bottom: 1rem;
		}

		h1 {
			font-size: 24px;
			color: #1f4173;
			margin-bottom: 1rem;
		}

		form {
			width: 100%;
			display: grid;

			div.no_flex {
				display: grid;
				width: 100%;
			}

			div.flex_three {
				display: grid;
				grid-template-columns: 30% 30% 30%;

				input {
					width: 80%;
				}
			}

			div.flex_two {
				display: grid;
				grid-template-columns: 60% 30%;
				align-items: flex-start;

				input {
					width: 80%;
				}
			}

			select {
				border: none;
				background: #f5f7fb;
				padding: 1rem;
				border-radius: 5px;
			}

			input {
				width: 50%;
				border: none;
				background: #f5f7fb;
				border-radius: 8px;
				padding: 0.5rem;
				margin-bottom: 1rem;
			}

			label {
				color: #11142d;
				margin-bottom: 0.3rem;
				font-size: 12px;
			}

			.btn {
				cursor: pointer;
				transition: all 0.2s ease;
				border: 1px solid #f5f7fb;
				/* display: flex;
        width: 5rem; */

				&:hover {
					border: 1px solid #0043f1;
					color: #0043f1;
				}
			}

			.active {
				background: #0043f1;
				color: #fff;
				border: 1px solid #0043f1;
			}
		}

		div.btns {
			display: flex;
			gap: 10px;
			width: 80%;
			margin-top: 2rem;

			button {
				padding: 0.5rem 2rem;
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				font-weight: bold;
			}

			button.cancel {
				border: none;
				background: none;
				color: #5a5a5a;
				font-size: 14px;

				&:hover {
					color: #0043f1;
				}
			}

			button.submit {
				background: #0043f1;
				border-radius: 4px;
				border: none;
				color: #fff;
				border: 2px solid #0043f1;

				&:hover {
					color: #0043f1;
					background: none;
					border: 2px solid #0043f1;
				}
			}

			button.print {
				background: none;
				border: 1px solid #0043f1;
				color: #0043f1;
				border-radius: 4px;

				&:hover {
					background: #000;
					border: 1px solid #000;
					color: #fff;
				}
			}
		}

		div.endorse,
		div.official {
			h3 {
				font-size: 18px;
				text-align: left;
				margin-top: 1rem;
			}
		}

		div.endorse {
			margin-bottom: 2rem;
		}

		div.signature {
			margin-bottom: 2rem;
		}

		div.signature,
		div.details,
		div.manager_details {
			display: flex;
			gap: 1rem;
		}

		div.wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin-bottom: 0.5rem;

			p {
				margin-bottom: 1rem;
				font-size: 13px;
			}

			span {
				font-weight: bold;
				border: 1px solid #cfcfcf;
				padding: 0.2rem;
				border-radius: 5px;
			}
		}
	}
`

export const Wrapper = styled.div`
	background-color: #fff;

	@media print {
		width: 100%;
		margin: auto;
		background-color: #fff;
		/* padding: 3rem; */

		.image {
			margin-bottom: 1rem;
		}

		div.endorse,
		div.official {
			h3 {
				font-size: 18px;
				text-align: left;
				margin-top: 1rem;
			}
		}

		div.endorse {
			margin-bottom: 2rem;
		}

		div.signature {
			margin-bottom: 2rem;
		}

		div.signature,
		div.details,
		div.manager_details {
			display: flex;
			gap: 1rem;
		}

		h3 {
			text-align: center;
			margin-bottom: 1rem;
			font-size: 26px;
		}

		h2 {
			font-size: 16px;
			margin-bottom: 1rem;
		}

		div.wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin-bottom: 0.5rem;

			p {
				margin-bottom: 1rem;
				font-size: 13px;
			}

			h2 {
				font-size: 20px;
			}

			span {
				font-weight: bold;
				border: 1px solid #cfcfcf;
				padding: 0.2rem;
				border-radius: 5px;
			}
		}
	}
`
