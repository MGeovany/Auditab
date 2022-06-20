import { InputWrapper, Input, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import axios from 'axios'
import { useForm } from '@mantine/form'

export const SoftwareAsset = () => {
  //MANTINE
  const form = useForm({
    initialValues: {
      description: '',
      dateAdded: '',
      dateExpiration: '',
      price: 0
    }
  })

  const postAsset = values => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/auditab/software',
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
          <InputWrapper id='description' required label='Description'>
            <Input
              placeholder='Enter a description'
              id='description'
              value={form.values.description}
              {...form.getInputProps('description')}
            />
          </InputWrapper>

          <DatePicker
            {...form.getInputProps('dateAdded')}
            id='dateAdded'
            placeholder='Pick date'
            label='Added date'
            value={form.values.dateAdded}
            required
          />

          <DatePicker
            {...form.getInputProps('dateExpiration')}
            id='dateExpiration'
            placeholder='Pick exp date'
            value={form.values.dateExpiration}
            label='Expiration date'
            required
          />

          <InputWrapper id='price' required label='Price'>
            <Input
              id='price'
              {...form.getInputProps('price')}
              className='price'
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
