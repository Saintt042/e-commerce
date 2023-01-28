import styled from "@emotion/styled";
// 'styled-components';

export const Container = styled.div`

	margin: auto;
	width: 100%;
	max-width: 900px;
    position: relative;
	border-bottom: 1px solid #e8e7ec;
	display: flex;
	justify-content: space-between;


	& > * {
		
	}
    .hero-banner-container{
        padding: 100px 40px;
        background-color: #dcdcdc;
        border-radius: 5px;
        // position: relative;
        height: 500px;
        line-height: 0.9; 
        width: 100%;
      }
      .hero-banner-container .beats-solo{
        font-size: 10px;
      }
      .hero-banner-container button{
         border-radius: 15px;
        padding: 10px 16px;
        background-color: #f02d34;
        color: white;
        border: none;
        margin-top: 40px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        z-index:10000 !important;
      }
      
      .hero-banner-container h3{
        font-size: 1.5rem;
        margin-top: 4px;
      }
      .hero-banner-container h1{
        color: white;
        font-size: 2em;
        margin-left: -20px;
        text-transform: uppercase;
      }
      .hero-banner-image{
        position: absolute;
        top: 0%;
        left:50%;
        width: 450px;
        height: 450px;
      }
      
      
      .desc{
      position: absolute;
      right: 15%;
      bottom: 5%;
      width: 150px;
      line-height: 1.3;
      display: flex;
      flex-direction: column;
       color: #324d67;
      
      }
      .desc p{
        color: #5f5f5f;
        font-weight: 100;
      text-align: end;
      }
      .desc h5{
        margin-bottom: 12px;
        font-weight: 700;
        font-size: 16px;
        /* color: black; */
        align-self: flex-end;
      }
	

	@media screen and (max-width: 900px) {
		width: 100%;
        .hero-banner-container{
            line-height: 1.3;
          }
          .hero-banner-container h1{
            font-size: 25px;
          }
         .hero-banner-container h3{
            font-size: 20px;
          }
          .hero-banner-container button{
            margin-top: 90px;
            z-index: 10000;
          }
          .desc{
           bottom: 60px;
          }
          .hero-banner-container{
            height: 560px;
          }
          .hero-banner-image{
            width: 47%;
            height: 32%;
            top: -2%;
            right: -6%;
          }
	}
	@media screen and (max-width: 750px) {
		// width: 75%;
	}
	@media screen and (max-width: 600px) {
		// padding: 15px 0 15px 10%;
		// width: 75%;
        .hero-banner-container h1{
            font-size: 22px;
          }
         .hero-banner-container h3{
            font-size: 17px;
          }
		
	}
    @media screen and (max-width: 320px) {
       
        .hero-banner-container h1{
            font-size: 15px;
          }
         .hero-banner-container h3{
            font-size: 15px;
          }
          .hero-banner-image{
            width: 37%;
            height: 22%;
            top: -0.5%;
            left: 46%;
          }
		
	}
    `;