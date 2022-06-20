/* eslint-disable react/prop-types */
import React from 'react'
import { FormAsset } from '../components/form assets/FormAsset'

export const addAssetModal = ({ context, id, innerProps }) => (
  <>
    <div className='add__asset'>
      <div className='asset__title'>
        ADD NEW <span style={{ color: '#7260D9' }}> ASSET</span>
      </div>

      <div className='asset__modal__body'>
        <FormAsset />
      </div>
    </div>

    {/*  <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button> */}
  </>
)
