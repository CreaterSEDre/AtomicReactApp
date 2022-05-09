import styled from "styled-components";

export const IconAndName = (props) => {
  const { image, name } = props;
  return (
    <SConstainer>
      <SIcon height={200} width={200} src={image} alt={name} />
      <SName>{name}</SName>
    </SConstainer>
  );
};

const SConstainer = styled.div`
  text-align: center;
`;

const SIcon = styled.img`
  border-radius: 360px;
`;

const SName = styled.p`
  text-decoration: underline;
  font-weight: bold;
  font-size: 18px;
  color: #40514e;
`;
