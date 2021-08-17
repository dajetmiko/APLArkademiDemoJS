import './Alat.css'
import { FC } from 'react'

const Alat = (p) => {
  const dataKategori = ['Kalkulator Pajak Karyawan', 'Kalkulator Nilai Usaha', 'Tes Teknik Kewirausahaan'
  , 'Diagnosa Usaha', 'FAQ', 'Karir', 'Privacy Policy' 
]

  return(
    <ul className='alat-rekomendasi'>
      {dataKategori.map((nilai) => {
        return (<li className='isi-alat-rekomendasi'>{nilai}</li>
        )
      })}
    </ul>
  )
}

export default Alat