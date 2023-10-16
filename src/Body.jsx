import styled from "styled-components";

function Body() {
  return (
    <>
      <SyledBtn>Cadastrar Clientes</SyledBtn>
    </>
  );
}

export const SyledBtn = styled.button`
  color: white;
  margin: 25em 50em;
  background-color: #445353;
  border-radius: 10px;
  padding: 10px;
  border: none;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease-in-out;
  }
`;

export default Body;
