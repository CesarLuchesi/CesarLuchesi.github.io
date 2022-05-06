import './App.css';

import {
  Body,
  Header,
  ProfileImg,
  LiHeader,
} from './Global.styles'

function App() {
  return (
    <>
      <Header>
        <ProfileImg/>
        <LiHeader>CONTATO</LiHeader>
        <LiHeader>EDUCAÇÃO</LiHeader>
        <LiHeader>EXPERIÊNCIA</LiHeader>
        <LiHeader>CONHECIMENTOS</LiHeader>
        <LiHeader>PROJETOS</LiHeader>
        <LiHeader>SOBRE MIM</LiHeader>
      </Header>
      <Body>body</Body>
    </>
  );
}

export default App;
