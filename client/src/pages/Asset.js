import React from 'react'
import {
  Select,
  Input,
  InputWrapper,
  Button,
  MantineProvider,
  useMantineTheme
} from '@mantine/core'
import '../styles/assetStyle.css'
import { AssetTable } from '../components/AssetTable'
import { useModals } from '@mantine/modals'

export const Asset = () => {
  const modals = useModals()

  const theme = useMantineTheme()

  const openContextModal = () =>
    modals.openContextModal('addAssets', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: '1700px',
      innerProps: {
        type: 'asset'
      }
    })

  return (
    <div>
      <MantineProvider
        theme={{ fontFamily: 'Poppins, sans-serif' }}
        withGlobalStyles
      >
        <div className='asset'>
          <div className='asset__header'>
            <div className='asset__page'>Asset management</div>
            <div className='asset__title'>
              ADD THE ASSETS FOR YOUR{' '}
              <span style={{ color: '#7771de' }}>COMPANY</span>
            </div>
          </div>

          <div className='asset__body'>
            <div className='asset__body__title'>ASSETS OF THE COMPANY</div>
            <div className='asset__body__content'>
              <div className='asset__body__controls'>
                <div className='asset__control'>
                  <Select
                    searchable
                    clearable
                    data={[
                      'Software',
                      'Hardware',
                      'DataBase',
                      'Projects',
                      'Job Position',
                      'furniture and equipment',
                      'Networks',
                      'Maintenance and backup',
                      'Supplies or general'
                    ]}
                    placeholder='Select'
                    label='Select the Asset'
                  />
                </div>
                <div className='asset__control'>
                  <InputWrapper id='input-demo' label='Search by ID'>
                    <Input id='input-demo' placeholder='Search' />
                  </InputWrapper>
                </div>
                <div className='asset__control'>
                  <Button color='violet'>Search</Button>
                </div>
              </div>
              <div className='asset__body__table'>
                <AssetTable />
                <div className='asset__btns'>
                  <div className='asset__control'>
                    <Button
                      color='violet'
                      size='md'
                      radius='md'
                      onClick={openContextModal}
                    >
                      Add Asset
                    </Button>
                  </div>
                  <Button
                    color='violet'
                    variant='outline'
                    size='md'
                    radius='md'
                  >
                    Discard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
    </div>
  )
}
