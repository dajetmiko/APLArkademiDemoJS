import './HakCipta.css';
import { FC } from 'react';

const HakCipta = (_p) => {
  return(
    <div className='hak-cipta-nav-bawah'>
      <div className='teks-hak-cipta'>
        © 2017-2020 PT Arkademi Daya Indonesia
      </div>
      <div className='seluruh-tautan-pelanggan'>
        <div className='tautan-pelanggan'>
          Ketentuan Layanan
        </div>
        <div className='tautan-pelanggan'>
          Kontak
        </div>
      </div>
    </div>
  )
}

export default HakCipta