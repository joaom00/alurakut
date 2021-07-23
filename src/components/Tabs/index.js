import React from 'react'

<<<<<<< HEAD
=======
import Button from '../Button'

import * as S from './styles'

>>>>>>> d6216fac0cbbe081aa0e5fd4e3ebb5f837310dbc
const Tabs = ({ defaultIndex = 0, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex)

  function changeTab(newIndex) {
    setBindIndex(newIndex)
    console.log('botao clicado')
  }

<<<<<<< HEAD
  const items = children?.filter((item) => item.type.name === 'TabItem');

  return (
    <div>
      <div>
        {items?.map(({ props: { index, label } }) => (
          <button key={index} onClick={() => changeTab(index)}>
=======
  const items = children?.filter((item) => item.type.name === 'TabItem')

  return (
    <>
      <S.TabButtonsWrapper>
        {items?.map(({ props: { index, label } }, i) => (
          <Button key={i} onClick={() => changeTab(index)}>
>>>>>>> d6216fac0cbbe081aa0e5fd4e3ebb5f837310dbc
            {label}
          </Button>
        ))}
<<<<<<< HEAD
      </div>
      <div>
        {items?.map(({ props }) => (
          <div key={props.index}></div>
=======
      </S.TabButtonsWrapper>
      <S.TabViewWrapper>
        {items?.map(({ props }, i) => (
          <S.TabView isSelected={props.index === bindIndex} key={i}>
            {props.children}
          </S.TabView>
>>>>>>> d6216fac0cbbe081aa0e5fd4e3ebb5f837310dbc
        ))}
      </S.TabViewWrapper>
    </>
  )
}

export default Tabs
