import React from 'react'
import Button from '../Button'

import * as S from './styles'

const Form = ({ handleSubmit, buttonText, children }) => {
  const [status, setStatus] = React.useState('idle')

  return (
    <S.Wrapper
      onSubmit={async (event) => {
        setStatus('loading')
        try {
          await handleSubmit(event)
          setStatus('idle')
        } catch (err) {
          setStatus('error')
        }
      }}
    >
      {children}
      <Button>{status === 'loading' ? 'Carregando...' : buttonText}</Button>
    </S.Wrapper>
  )
}

export default Form
