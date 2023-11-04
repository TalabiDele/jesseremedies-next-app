import styled from 'styled-components'

export const All = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 10;
	height: 5rem;
`

export const Container = styled.div`
	width: 100%;
	background: #fff;
	position: relative;
	z-index: 3;
	top: 0;

	@media not all and (min-width: 768px) {
		.container {
			padding: 1rem;
			width: 90vw;
			margin: auto;

			form {
				width: 50%;
				margin: auto;
			}

			input {
				width: 100%;
			}
		}

		.img {
			display: none;
		}

		.icon {
			font-size: 2rem;
			cursor: pointer;
		}
	}

	.container {
		display: flex;
		/* grid-template-columns: 20% 50% 30%; */
		justify-items: space-between;
		align-items: center;
		padding: 1rem 0rem;
		/* margin: auto; */
	}

	h1 {
		font-size: 20px;
	}

	form {
		width: 70%;
	}

	input {
		border: none;
		background: #f4f4f4;
		padding: 0.5rem 0.5rem;
		border-radius: 10px;
		width: 50%;
		justify-self: flex-start;
	}

	div.user_info {
		display: flex;
		align-items: center;
		gap: 10px;

		p {
			color: #11142d;
			font-size: 16px;
			font-weight: 500;
			text-transform: capitalize;
		}

		p.type {
			color: #808191;
			font-size: 12px;
		}
	}
`

export const Wrapper = styled.div`
	/* position: fixed; */
	left: 0;
	right: 0;
	background: #fff;
	width: 12rem;
	height: 100vh;
	padding: 2rem 0rem;

	@media not all and (min-width: 1280px) {
		width: 10rem;
	}

	@media not all and (min-width: 768px) {
		display: none;
	}

	div.wrapper {
		width: 100%;
		margin: auto;
	}

	.active {
		transition: all 0.3s ease-in-out;

		li {
			border-left: 5px solid #003ad2;
			width: 100%;
		}

		p {
			background: #f5f7fb;
			border-radius: 37px 0px 0px 37px;

			margin: auto;
		}
	}

	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100vh;

		.logout {
			margin-top: 10rem;
			cursor: pointer;
			gap: 10px;
			color: #ff0000;
		}
	}

	li {
		display: flex;
		align-items: center;
		gap: 10px;
		/* margin-bottom: 1rem; */
		color: #1f417381;

		p {
			width: 80%;
			padding: 0.8rem 1rem;
		}

		svg {
			margin-left: 1rem;
		}
	}
`

export const Mobile = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	background: #fff;
	width: 12rem;
	height: 100vh;
	padding: 2rem 0rem;

	@media not all and (min-width: 1280px) {
		width: 10rem;
	}

	@media not all and (min-width: 768px) {
	}

	div.wrapper {
		width: 100%;
		margin: auto;
	}

	.active {
		transition: all 0.3s ease-in-out;

		li {
			border-left: 5px solid #003ad2;
			width: 100%;
		}

		p {
			background: #f5f7fb;
			border-radius: 37px 0px 0px 37px;

			margin: auto;
		}
	}

	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100vh;

		.logout {
			margin-top: 10rem;
			cursor: pointer;
			gap: 10px;
			color: #ff0000;
		}
	}

	li {
		display: flex;
		align-items: center;
		gap: 10px;
		/* margin-bottom: 1rem; */
		color: #1f417381;

		p {
			width: 80%;
			padding: 0.8rem 1rem;
		}

		svg {
			margin-left: 1rem;
		}
	}
`
