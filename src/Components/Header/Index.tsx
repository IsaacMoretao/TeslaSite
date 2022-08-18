import { Link } from 'react-router-dom';
import { Buttons } from '../subComponents/Buttons/Index';
import LogoTesla from '../../Assets/Images/Tesla-Logo.png';

import './Style.scss';
import { useState } from 'react';
import { Hbutton } from '../subComponents/Hbutton/Index';


export function Header(){
 
  const [Hburguer, setHburguer] = useState('none');

  function Sumir(){

    if(Hburguer == 'flex'){
      setHburguer('none')
    }else if(Hburguer == 'none'){
      setHburguer('flex')
    } else{
      console.log('Algo deu errado')
    }

  }

  return(
    <body>

      <header className="header">

        <figure>
          <Link to={'/teslasite/'}>
            <img src={LogoTesla} alt="tesla logo" />
          </Link>
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
          <button className='Menu' onClick={Sumir}>
            <Buttons nameButton={'Menu'}/>
          </button>
            

        </div>
        
      </header>
        <aside className='Hamburguer' style={{display: `${Hburguer}`}}>
          <div className='sideBar'>
            <header>
              <button onClick={Sumir}>
                X
              </button>
            </header>
            <nav>
              <div>

              </div>
              <Link to={''}>
                <Hbutton nameButton={'Hey #01'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Hey #02'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Hey #03'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'awdadawd'}/>
              </Link>
              
            </nav>

          </div>
        </aside>
    </body>
  )
    
}   