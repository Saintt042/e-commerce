import styled from "@emotion/styled";
// 'styled-components';

export const Container = styled.div`

	margin: auto;
	width: 95%;
	max-width: 900px;
	// border-bottom: 1px solid #e8e7ec;
	// display: flex;
	// justify-content: space-between;

	& > * {
		// display: flex;
		align-items: center;
	}
	

	@media screen and (max-width: 900px) {
		width: 85%;
	}
	@media screen and (max-width: 750px) {
		.leftSect {
			width: 80%;
		}
	}
	@media screen and (max-width: 600px) {
		padding: 15px 0 15px 10%;
		width: 100%;
		.category {
			display: none;
		}
		.rightSect {
			width: 40%;
		}
		.leftSect {
			width: max-content;
		}
		.ham {
			display: block;
		}
	}
    `;