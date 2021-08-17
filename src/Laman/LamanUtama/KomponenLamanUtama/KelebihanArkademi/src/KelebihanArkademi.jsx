import './KelebihanArkademi.css'
import { FC } from 'react'
import GbrKelebihanArkademi from './gbr/kelebihan-arkademi.png'

const KelebihanArkademi = (_p) => {
  return(
    <div className='kelebihan-arkademi'>
      <GbrKelebihan gambar={GbrKelebihanArkademi}/>
    </div>
  )
}

const GbrKelebihan = (p) => {
  return <img className='gbr-kelebihan-arkademi' src={p.gambar} alt='alt-gbr-kelebihan-arkademi'/>
}

export default KelebihanArkademi
