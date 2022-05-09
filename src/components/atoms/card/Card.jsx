import styled from "styled-components";

//box-shadow: 色　X軸の距離　Y軸の距離　ぼかし　広がり
//カードの大きさの調整は行わない
//　→　レイアウトの調整はコンポーネントを呼ぶ側に任せる(最低限の実装)

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
