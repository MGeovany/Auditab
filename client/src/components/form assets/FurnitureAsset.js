import React, { useEffect, useState } from 'react'
import { InputWrapper, Input, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import axios from 'axios'
import { useForm } from '@mantine/form'

export const FurnitureAsset = () => {
  //MANTINE
  const form = useForm({
    initialValues: {
      serialNumber: '',
      description: ''
    }
  })

  const postAsset = values => {
    console.log('HOOK', values)
    axios({
      method: 'post',
      url: 'http://localhost:5000/auditab/furniture',
      data: values
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='asset__form'>
      <form
        className='asset__form__body'
        onSubmit={form.onSubmit(values => postAsset(values))}
      >
        <div className='asset__form__body'>
          <InputWrapper id='serialNumber' required label='Serial Number'>
            <Input
              placeholder='Enter a Serial Number'
              id='serialNumber'
              value={form.values.serialNumber}
              {...form.getInputProps('serialNumber')}
            />
          </InputWrapper>
          <InputWrapper id='description' required label='Description'>
            <Input
              placeholder='Enter a description'
              id='description'
              value={form.values.description}
              {...form.getInputProps('description')}
            />
          </InputWrapper>
        </div>
        <div className='asset__form__btns'>
          <Button className='asset__form__btn' type='submit' size='md'>
            Add
          </Button>

          <Button
            className='asset__form__btn--discard'
            color='red'
            size='md'
            type='reset'
            onClick={() => form.reset()}
          >
            Discard
          </Button>
        </div>
      </form>
    </div>
  )
}
