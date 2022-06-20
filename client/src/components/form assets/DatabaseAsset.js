import React from 'react'
import { InputWrapper, Input, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'

export const DatabaseAsset = () => {
  return (
    <div className='asset__form'>
      <div className='asset__form__body'>
        <DatePicker placeholder='Pick date' label='Event date' required />
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
