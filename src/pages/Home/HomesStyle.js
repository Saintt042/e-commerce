import styled from "@emotion/styled";

export const Container = styled.div`

	margin: auto;
	width: 100%;
	max-width: 900px;
	border-bottom: 1px solid #e8e7ec;
	// display: flex;
	// justify-content: space-between;

	& > * {
		align-items: center;
	}
	.products-heading {
		text-align: center;
	}
	.products-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 15px;
		margin-top: 20px;
		width: 100%;
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