import React from 'react'

import Button from '../Button'

import * as S from './styles'

const Tabs = ({ defaultIndex = 0, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex)

  function changeTab(newIndex) {
    setBindIndex(newIndex)
    console.log('botao clicado')
  }

  const items = children?.filter((item) => item.type.name === 'TabItem')

  return (
    <>
      <S.TabButtonsWrapper>
        {items?.map(({ props: { index, label } }, i) => (
          <Button key={i} onClick={() => changeTab(index)}>
            {label}
          </Button>
        ))}
      </S.TabButtonsWrapper>
      <S.TabViewWrapper>
        {items?.map(({ props }, i) => (
          <S.TabView isSelected={props.index === bindIndex} key={i}>
            {props.children}
          </S.TabView>
        ))}
      </S.TabViewWrapper>
    </>
  )
}

export default Tabs
