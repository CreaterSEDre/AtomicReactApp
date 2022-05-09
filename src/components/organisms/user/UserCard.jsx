import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { IconAndName } from "../../molecules/user/IconAndName";

export const UserCard = (props) => {
  const { user } = props;

  //unsplach・・・画像提供サイト。[photo/]を削除して[source.]を付ける
  return (
    <Card>
      <SDl>
        <IconAndName image={user.image} name={user.name} />
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 45px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
