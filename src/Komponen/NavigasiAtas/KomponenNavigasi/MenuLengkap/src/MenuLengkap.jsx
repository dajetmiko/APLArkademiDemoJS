import {FC} from 'react'
import './MenuLengkap.css'

const MenuLengkap = (_p) => {
  //diklik dapat diisi dengna fungsi
  return(
    <ul className='menu-lengkap'>
      <IsiMenuLengkap teks='Kategori' onClick={()=> {}}/>
      <IsiMenuLengkap teks='Mitra' onClick={()=> {}}/>
      <IsiMenuLengkap teks='Tentang' onClick={()=> {}}/>
      <IsiMenuLengkap teks='Blog' onClick={()=> {}}/>
    </ul>
  )
}

const IsiMenuLengkap = (p) => {
  return(
    <li className='isi-menu-lengkap' onClick={p.onClick}>
      {p.teks}
    </li>
  )
}


export default MenuLengkap