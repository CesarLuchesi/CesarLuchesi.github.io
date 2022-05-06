import styled from "styled-components";
import profileImg from "./images/ProfileImg.jpeg"


export const Header = styled.header`
  background-color: aqua;
  min-width: 30vh;
  min-height: 100vh;
  position: fixed;
  position: absolute;
  align-items: center;
`;



export const LiHeader = styled.li`
display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-left: 30px;
  height: 15%;
  position: relative;
  color: #a4a6b3;
  &:hover {
    background-color: rgb(159, 162, 180, 0.08);
  }
  :hover:before {
    content: "";
    left: 0px;
    position: absolute;
    height: 100%;
    background-color: rgba(55, 81, 255, 1);
    width: 2px;
  }

`;


export const ProfileImg = styled.img.attrs({
  src: `${profileImg}`
})`
width: 200px;
border-radius: 200px;
border-style: solid 2px white;
`;

export const Body = styled.div`
  min-height: 100vh;
  min-width: 70vh;
  background-color: #FFF;
  color: black;
  margin-left: 30vh;
`;