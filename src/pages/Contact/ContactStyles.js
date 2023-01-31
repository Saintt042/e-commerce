import styled from "@emotion/styled";


export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
  position: relative;
  border-bottom: 1px solid #e8e7ec;
  background: #e8e7ec;
 
//   img {
//     width: 100%;
//     max-width: 1360px;
//     max-height: 550px;
// height: 550px;
// }
.formcontrol {
    padding: 40px 15%;
    margin: 40px;
    gap: 50px;   
}
 .textfields {
    margin-left: 20px;
 }
   

  @media screen and (max-width: 815px) {
    
 .textfields {
    margin-left: 0;
 }
  }
  @media screen and (max-width: 320px) {
    .textfields {
        margin-left: 0;
     }
  }
`;