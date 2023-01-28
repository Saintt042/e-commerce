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
		width: 100%;
	}
	@media screen and (max-width: 750px) {
			// width: 80%;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		
	}
	@media screen and (max-width: 320px) {
		width: 100%;
		
	}
    `;