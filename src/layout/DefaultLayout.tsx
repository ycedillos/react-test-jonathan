import styled from "styled-components/macro";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Wrapper>
      <Navbar />
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
  .content {
    /* position: absolute;
    top: 66px;
    width: 100%; */
    margin-top: 67px;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
    @media (min-width: 992px) {
      padding: 0 40px;
    }
    @media (min-width: 1200px) {
      padding: 0 100px;
    }
  }
`;
