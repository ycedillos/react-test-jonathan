import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <h1>DumbOldSpider LLC</h1>
      <p>Exam for Frontend developer</p>
      <button>Who we are?</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  button {
    width: 120px;
  }
`;
