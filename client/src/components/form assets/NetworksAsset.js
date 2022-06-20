import React from 'react'
import { InputWrapper, Input, Button } from '@mantine/core'

export const NetworksAsset = () => {
  return (
    <div className='asset__form'>
      <div className='asset__form__body'>
        <InputWrapper id='type' required label='Type'>
          <Input id='type' />
        </InputWrapper>
        <InputWrapper id='description' required label='Description'>
          <Input id='description' />
        </InputWrapper>
        <InputWrapper id='price' required label='Price'>
          <Input id='price' />
        </InputWrapper>
      </div>
      <div className='asset__form__btns'>
        <Button className='asset__form__btn' size='md'>
          Add
        </Button>
        <Button className='asset__form__btn--discard' color='red' size='md'>
          Discard
        </Button>
      </div>
    </div>
  )
}
