import styled from "styled-components";

export const Dataproducts = styled.div`
/* & *{
  margin:0;
  padding: 0;
  box-sizing: border-box;
} */

  .Main_cont {
    width: 100%;
    height: 1000px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0%;
    background-color: black;
    /* border: 1px solid red; */
    left: 0;
    /* text-align: center; */
  }

  .items_cont {
    width: 1146px;
    height: 400px;
    margin: auto;
    margin-top: 180px;
    text-align: center;
    color: white;
    line-height: 1.8;
    text-align: center !important;
    /* border: 1px solid red; */
  }

  .learnmore {
    width: 1146px;
    height: 18px;
    text-align: center;
    font-weight: bold;
    align-items: center;
    text-align: center !important;
    /* border: 1px solid red; */
  }

  .div_right {
    width: 34%;
    height: 64px;
    margin: auto;
    text-align: justify;
    font-weight: bold;
    color: white;
    margin-top: 20px;
    /* margin-left: 35%; */
    line-height: 1;
    /* border: 1px solid red; */
  }

  .heading {
    width: 700px;
    height: 126px;
    font-size: 25px;
    margin: auto;
    text-align: center !important;    
    /* border: 1px solid blue; */
  }

  .offer {
    width: 170px;
    height: 18px;
    margin: auto;
    font-weight: bold;
    margin-bottom: 10px;
    /* border: 1px solid blue; */
  }

  .button > button {
    margin-top: 10px;
    border-radius: 4px;
    width: 116px;
    height: 39px;
    background-image: linear-gradient(
      48deg,
      rgb(236, 26, 91) 0%,
      rgb(246, 140, 38) 100%
    );
    font-size: 13px;
    color: white;
    font-weight: bold;
    border: none;
    margin-left: 30px;
  }

  .orange {
    color: #f68c26;
  }

  .player {
    width: 200px;
    height: 35px;
    display: flex;
    justify-content: space-around;
    margin: auto;
    font-weight: bold;
    margin-top: 25px;
    padding-top: 7px;
    /* border:1px solid red */
  }
`;
