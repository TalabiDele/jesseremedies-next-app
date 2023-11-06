import styled from 'styled-components'

export const Container = styled.div`
	margin-left: 15rem;
	margin-top: 3rem;
	position: relative;
	top: 5rem;
	padding-bottom: 5rem;

	h1 {
		font-weight: bold;
		font-size: 1.5rem;
		width: 90vw;
		margin: auto;
	}

	@media not all and (min-width: 768px) {
		margin: 1rem auto;

		.mobile {
			margin: 1rem auto;
			width: 90vw;
		}
	}

	div.user_report {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		@media not all and (min-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
			justify-items: center;
			width: 95vw;
			margin: auto;
		}
	}

	.user_container {
		background: #fff;
		box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
		border-radius: 20px;
		width: 90%;
		margin-top: 3rem;
		padding-bottom: 1rem;
		font-size: 14px;
		padding-top: 1rem;

		@media not all and (min-width: 768px) {
			width: 100%;
			height: 50vh;
			overflow-x: scroll;
		}

		@media not all and (min-width: 640px) {
			width: 90vw;

			.inside {
				width: 30rem;
			}
		}

		h3 {
			margin-left: 1rem;
		}
	}

	div.search {
		width: 90%;
		justify-content: center;
		margin: 1rem 0rem;
		gap: 4rem;
		color: #1f4173;
		margin-left: 1rem;

		div.input {
			display: grid;
			width: 70%;

			input {
				border: none;
				border-bottom: 1px solid #e6eaf0;
				padding: 0.3rem 1rem 1rem 0rem;
				font-size: 13px;
			}

			label {
				font-size: 13px;
				color: #717a8a;
			}
		}

		ul {
			display: flex;
			width: 100%;
			justify-content: space-between;
		}
	}

	div.table {
		width: 100%;
		margin: auto;

		ul {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			width: 100%;
			justify-items: center;
			margin: 2rem 0rem 1rem 0rem;
			border-bottom: 1px solid #e6eaf0;
			padding-bottom: 1rem;

			li {
				font-weight: 700;
				font-size: 12px;
				color: #1f4173;
			}
		}

		div.loan {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			align-items: center;
			justify-items: center;
			width: 100%;
			border-bottom: 1px solid #e6eaf0;
			padding-bottom: 1rem;
			margin-bottom: 1rem;

			.id {
				color: #003ad2;
				text-transform: uppercased;
			}

			.name {
				color: #1f4173;
			}

			.btn {
				border-radius: 5px;
				padding: 0.5rem;
				margin: auto;
				text-align: center;
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

			.start {
				color: rgba(46, 124, 246, 1);
				background: rgba(46, 124, 246, 0.1);
			}

			.due_soon {
				color: rgba(255, 153, 0, 1);
				background: rgba(255, 153, 0, 0.1);
			}

			.overdue {
				color: #e80000;
				background: #e800002f;
			}

			.total {
				font-size: 14px;
				color: #1f4173;
				display: flex;
				align-items: center;
				gap: 5px;

				svg {
					font-weight: 400;
				}
			}
		}
	}

	h3 {
		font-size: 20px;
	}
`

export const Wrapper = styled.div``
