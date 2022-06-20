import React from 'react'
import { InputWrapper, Input, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'

export const HardwareAsset = () => {
  return (
    <div className='asset__form'>
      <div className='asset__form__body'>
        <InputWrapper id='serial_number' required label='Serial Number'>
          <Input id='serial_number' />
        </InputWrapper>
        <InputWrapper id='description' required label='Description'>
          <Input id='description' />
        </InputWrapper>
        <InputWrapper id='model' required label='Model'>
          <Input id='model' />
        </InputWrapper>
        <InputWrapper id='price' required label='Price'>
          <Input id='price' />
        </InputWrapper>

        <DatePicker placeholder='Pick date' label='Buy date' required />
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
