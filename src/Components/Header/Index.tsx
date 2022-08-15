import { Link } from 'react-router-dom';
import { Buttons } from '../subComponents/Buttons/Index';
import LogoTesla from '../../Assets/Images/Tesla-Logo.png';

import './Style.scss';


export function Header(){
  return(

    <header className="header">

      <figure>
        <img src={LogoTesla} alt="tesla logo" />
      </figure>

      <nav>

        <Link to={''}>
          <Buttons nameButton={'Modelo S'}/>
        </Link>

        <Link to={''}>
          <Buttons nameButton={'Modelo 3'}/>
        </Link>

        <Link to={''}>
          <Buttons nameButton={'Modelo X'}/>
        </Link>

        <Link to={''}>
          <Buttons nameButton={'Modelo Y'}/>
        </Link>

        <Link to={''}>
          <Buttons nameButton={'Solar Roof'}/>
        </Link>

        <Link to={''}>
          <Buttons nameButton={'Solar Painels'}/>
        </Link>

      </nav>
      <div>

        <Link to={''}>
          <Buttons nameButton={'Shop'}/>
        </Link>

        <Link to={''}>
          <Buttons nameButton={'Account'}/>
        </Link>

          <Buttons nameButton={'Menu'}/>

      </div>
      <aside>
        <div className='sideBar'>

        </div>
      </aside>
    </header>
  )
    
}   