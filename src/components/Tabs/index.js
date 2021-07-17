import React from "react";
import * as S from "./styles";

const Tabs = ({ defaultIndex = 0, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  function changeTab(newIndex) {
    setBindIndex(newIndex);
  }

  const items = children?.filter((item) => item.type.name === "TabItem");

  return (
    <>
      <div>
        {items?.map(({ props: { index, label } }) => (
          <S.TabButton key={index} onClick={() => changeTab(index)}>
            {label}
          </S.TabButton>
        ))}
      </div>
      <S.TabViewWrapper>
        {items?.map(({ props }) => (
          <S.TabView isSelected={props.index === bindIndex} key={props.index}>
            {props.children}
          </S.TabView>
        ))}
      </S.TabViewWrapper>
    </>
  );
};

export default Tabs;
