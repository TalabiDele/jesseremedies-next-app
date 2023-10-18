import styled from 'styled-components'

export const Container = styled.div`
	width: 60vw;
	margin: 7rem auto 2rem auto;

	div.container {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		justify-items: center;
		align-items: center;
		width: 100%;
		margin: auto;
		color: #1f4173;
	}

	.item {
		border: 3px solid #1f4173;
		padding: 1rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 4rem;
		margin: 0rem auto 1rem auto;
	}

	.active {
		background: #003ad2;
		border: 3px solid #003ad2;
		color: #fff;
	}

	p.text {
		text-align: center;
		color: #1f4173;
		font-size: 12px;
	}

	p.text_active {
		color: #003ad2;
	}
`
