import './IsiTentang.css';
import { FC } from 'react';

const IsiTentang = (p) => {
  return(
    <div className='isi-tentang'>
      {p.judul ? 
        <div className='judul-tentang'>
          {p.judul}
        </div>
        :
        <img className='logo-judul-tentang' src={p.gbr} alt={'gbr judul'}/>
      }
      <div className='teks-tentang'>
        {p.isiTeks}
      </div>
      {p.gbrStlhTtg &&
        <img className='logo-setelah-tentang' src={p.gbrStlhTtg} alt={'gbr isi'}/>
      }
    </div>
  )
}

export default IsiTentang
