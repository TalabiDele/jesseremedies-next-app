import styled from 'styled-components'

export const Container = styled.div`
	width: 85%;
	margin-left: 12rem;
	margin-top: 5rem;
	position: relative;
	/* z-index: 0; */
	color: #11142d;

	@media not all and (min-width: 1024px) {
		margin-left: 10rem;
		width: 90%;
	}

	@media not all and (min-width: 768px) {
		margin: 5rem auto;
		width: 95vw;
	}

	.cust_type {
		text-transform: uppercase;
	}

	p > span,
	p {
		display: flex;
		align-items: center;
	}

	textarea {
		border: none;
		background: #f5f7fb;
		border-radius: 5px;
		padding: 1rem;
	}

	div.wrapper {
		display: flex;
		justify-content: space-between;

		button {
			padding: 1rem;
			border-radius: 5px;
			border: none;
			margin-left: 1rem;
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			@media not all and (min-width: 768px) {
				padding: 0.5rem;
			}
		}

		.add_loan {
			border: 1px solid #e80000;
			background: none;
			color: #e80000;

			&:hover {
				background: #e80000;
				color: #fff;
			}
		}

		.edit_loan {
			background: none;
			border: 1px solid #2e7cf6;
			color: #2e7cf6;
			width: 5rem;

			&:hover {
				background: #2e7cf6;
				color: #fff;
			}
		}
	}

	.image {
		border-radius: 20px;
	}

	.btn {
		border-radius: 5px;
		padding: 0.5rem;
		text-align: center;
		font-weight: 400;
	}

	.loaned {
		background: rgba(0, 58, 210, 0.1);
		color: rgba(0, 58, 210, 1);
	}

	.processing {
		color: rgba(36, 189, 199, 1);
		background: rgba(36, 189, 199, 0.1);
	}

	.paid {
		color: rgba(22, 195, 91, 1);
		background: rgba(22, 195, 91, 0.1);
	}

	.due_soon {
		color: rgba(255, 153, 0, 1);
		background: rgba(255, 153, 0, 0.1);
	}

	.overdue {
		color: #e80000;
		background: #e800002f;
	}

	.start {
		color: #2e7cf6;
		background: #2e7bf629;
	}

	div.container {
		margin-top: 3rem;
		padding-bottom: 10rem;
		font-size: 14px;
		padding: 2rem;

		@media not all and (min-width: 1024px) {
			padding: 1rem;
		}
	}

	div.personal {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;

		.img {
			width: 4rem;
		}

		h2 {
			font-weight: bold;
			font-size: 1.5rem;

			@media not all and (min-width: 768px) {
				font-size: 0.8rem;
			}
		}

		p {
			font-size: 14px;
			text-transform: capitalize;

			@media not all and (min-width: 768px) {
				font-size: 10px;
			}
		}
	}

	div.flex {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		@media not all and (min-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	button {
		padding: 0.5rem 1rem;
		border-radius: 5px;
		border: none;
		margin-left: 1rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		@media not all and (min-width: 768px) {
			padding: 0.5rem;
		}
	}

	.add_loan {
		border: 1px solid #e80000;
		background: none;
		color: #e80000;

		&:hover {
			background: #e80000;
			color: #fff;
		}
	}

	.edit_loan {
		background: none;
		border: 1px solid #2e7cf6;
		color: #2e7cf6;
		width: 10rem;
		cursor: pointer;
		font-weight: bold;

		&:hover {
			background: #2e7cf6;
			color: #fff;
		}
	}

	div.btns {
		button {
			padding: 0.5rem;
			background: none;
			border-radius: 5px;
			margin-right: 1rem;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
		}

		.approve {
			border: 1px solid rgba(22, 195, 91, 1);
			color: rgba(22, 195, 91, 1);

			&:hover {
				color: #fff;
				background: rgba(22, 195, 91, 1);
			}
		}

		.decline {
			border: 1px solid #e80000;
			color: #e80000;

			&:hover {
				color: #fff;
				background: #e80000;
			}
		}

		.start {
			border: 1px solid #2e7cf6;
			color: #2e7cf6;

			&:hover {
				color: #fff;
				background: #2e7cf6;
			}
		}
	}

	div.loan_container,
	div.finance {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 1rem;

		@media not all and (min-width: 1024px) {
			grid-template-columns: repeat(1, 1fr);
		}

		@media not all and (min-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	div.financial_wrapper {
		margin-bottom: 2rem;

		h3 {
			margin-bottom: 1rem;
			margin-left: 1rem;
			color: #e80000;
			background: #e8000022;
			padding: 0.5rem;
			border-radius: 5px;
			width: 40%;
			text-align: center;
		}
	}

	div.loan_wrapper {
		/* margin-right: 5rem; */
		width: 95%;

		h3 {
			margin-bottom: 1rem;
			margin-left: 1rem;
			color: #e80000;
			background: #e8000022;
			padding: 0.5rem;
			border-radius: 5px;
			width: 20%;
			text-align: center;
		}
	}

	div.loan_container,
	div.financial {
		background: #fff;
		box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
		border-radius: 20px;
		width: 100%;
		gap: 1rem;
		padding: 1rem;

		span {
			font-weight: 700;
		}

		p {
			margin-bottom: 0.5rem;
			font-size: 12px;
		}
	}

	div.documents {
		margin-top: 2rem;

		h3 {
			margin-bottom: 1rem;
		}

		img {
			border-radius: 10px;
			border: 2px solid #2e7cf6;
		}

		div.docs {
			display: flex;
			gap: 1rem;
		}

		.image {
			border: 2px solid #000;
			padding: 0.5rem;
			cursor: pointer;
			transition: all 0.2s ease;

			&:hover {
				border: 2px solid #2e7cf6;
			}
		}

		div.modal {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: #2f2f3096;
			z-index: 10;
			display: grid;
			justify-content: center;
			align-items: center;
			margin: auto;
			transition: all 0.3s ease-in-out;

			svg {
				position: absolute;
				color: #fff;
				/* right: 43rem; */
				top: 7rem;
				z-index: 3;
				cursor: pointer;
				right: 50%;
			}
		}
	}
`

export const Wrapper = styled.div`
	background: #123c80bb;
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 100;
	left: 0;
	right: 0;
	display: grid;
	align-items: center;

	div.edit_modal {
		background: #fff;
		width: 40%;
		margin: auto;
		box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
		border-radius: 20px;
		padding: 2rem;

		@media not all and (min-width: 768px) {
			width: 90vw;
		}

		.no_flex {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			width: 100%;
			justify-content: center;
			margin: auto;
		}

		.form {
			width: 80%;
			margin: auto;
		}

		input {
			width: 100%;
			border: none;
			background: #f5f7fb;
			border-radius: 8px;
			padding: 0.5rem;
			margin-bottom: 1rem;
		}

		label {
			color: #11142d;
			margin-bottom: 0.5rem;
			font-size: 12px;
		}

		div.btns {
			display: flex;
			gap: 10px;
			width: 80%;
			/* justify-content: flex-end; */
			margin-top: 2rem;

			button {
				padding: 0.5rem;
				cursor: pointer;
				transition: all 0.3s ease-in-out;

				@media not all and (min-width: 768px) {
				}
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
				border: 1px solid #0043f1;

				&:hover {
					color: #0043f1;
					background: none;
					border: 1px solid #0043f1;
				}
			}
		}
	}
`
