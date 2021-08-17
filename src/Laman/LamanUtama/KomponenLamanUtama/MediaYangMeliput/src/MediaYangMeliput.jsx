import './MediaYangMeliput.css'
import { FC } from 'react'
import GbrMediaYangMeliput from './gbr/media-yang-meliput.png'

const MediaYangMeliput = (_p) => {
  return(
    <div className='media-yang-meliput'>
      <GbrMedia gambar={GbrMediaYangMeliput}/>
    </div>
  )
}

const GbrMedia = (p) => {
  return <img className='gbr-media-yang-meliput' src={p.gambar} alt='alt-gbr-media-meliput'/>
}

export default MediaYangMeliput
