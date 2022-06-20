import React from 'react'
import { InputWrapper, Input, Button } from '@mantine/core'

export const JobPAsset = () => {
  return (
    <div className='asset__form'>
      <div className='asset__form__body'>
        <InputWrapper id='accessLevel' required label='Access Level'>
          <Input id='accessLevel' />
        </InputWrapper>
        <InputWrapper id='description' required label='Description'>
          <Input id='description' />
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
