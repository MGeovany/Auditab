/* eslint-disable react/react-in-jsx-scope */

import '../styles/features-servicesStyle.css'

export const Features = () => {
  return (
    <div className='features flex'>
      <div className='title flex'>Our Features 🎁</div>
      <div className='card-container'>
        <div className='card flex'>
          <div className='img'>
            <img
              src='/assets/icons/icons8-browse-page-48.png'
              alt='friendly'
            ></img>
          </div>
          <div className='card-title'>User Friendly</div>
          <div className='card-text flex'>
            Easy to use for people who are either new or professional
          </div>
        </div>
        <div className='card flex'>
          <div className='img'>
            <img
              src='/assets/icons/icons8-flexibility-64.png'
              alt='friendly'
            ></img>
          </div>
          <div className='card-title'>Flexibility</div>
          <div className='card-text flex'>
            Tasking can be opened on all
            <br /> existing websites
          </div>
        </div>

        <div className='card flex'>
          <div className='img'>
            <img src='/assets/icons/icons8-free-64.png' alt='friendly'></img>
          </div>
          <div className='card-title'>100% Free</div>
          <div className='card-text flex'>
            This Web app is completely
            <br /> free, without any charges
          </div>
        </div>
      </div>
    </div>
  )
}
