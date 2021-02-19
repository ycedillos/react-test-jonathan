import styled from "styled-components";
import Card from "../components/Card";
import img from "../assets/imgs/profile.jpeg";

// this is mock data
const DATA = [
  { id: 1, fullname: "Souhail Afilial", position: "Founder", role: "Business Analytis", img: img },
  { id: 2, fullname: "Badr Abdallah", position: "Co-founder", role: "Program Manager", img: img },
  { id: 3, fullname: "Yonathan Cedilos", position: "", role: "Software Architect", img: img },
];

export default function About() {
  return (
    <Wrapper className="about">
      {DATA.map((item) => (
        <Card
          key={item.id}
          border
          img={item.img}
          title={item.fullname}
          content={item.position ? `${item.position} | ${item.role}` : `${item.role}`}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
