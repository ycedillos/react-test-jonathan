import styled from "styled-components";

interface IProps {
  border: boolean;
  title?: string;
  content?: string;
  img?: string;
}
export default function CardComponent({ border = false, title, content, img }: IProps) {
  return (
    <Card border={border} className="card">
      <img src={img} className="img-card" alt="card" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{content}</p>
      </div>
    </Card>
  );
}

const Card = styled.div`
  border: ${(props: IProps) => (props.border ? "1 solid black" : "inherit")};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);

  :hover {
    transform: translate(0px, -5px);
  }

  .img-card {
    width: 100%;
  }

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
