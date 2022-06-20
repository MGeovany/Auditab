/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  NativeSelect,
  Input,
  InputWrapper,
  Button,
  MantineProvider
} from '@mantine/core'
import '../styles/assetStyle.css'
import { AssetTable } from '../components/AssetTable'
import { useModals } from '@mantine/modals'
import { Navbar } from '../components/Navbar'

export const Asset = () => {
  const modals = useModals()

  const openContextModal = () =>
    modals.openContextModal('addAssetModal', {
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      size: '500px',
      overflow: 'outside',
      innerProps: {
        type: 'asset'
      }
    })

  const [asset, setAsset] = useState('Software')

  return (
    <>
      <Navbar />

      <div>
        <div className='asset'>
          <div className='asset__header'>
            <div className='asset__page'>Asset management</div>
            <div className='asset__title'>
              ADD THE ASSETS FOR YOUR
              <span style={{ color: '#7771de' }}>COMPANY</span>
            </div>
          </div>

          <div className='asset__body'>
            <div className='asset__body__title'>ASSETS OF THE COMPANY</div>
            <div className='asset__body__content'>
              <div className='asset__body__controls'>
                <div className='asset__control'>
                  <NativeSelect
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
                    onChange={event => setAsset(event.currentTarget.value)}
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
                <AssetTable asset={asset} />
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
      </div>
    </>
  )
}
