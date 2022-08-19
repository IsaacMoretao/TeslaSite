import { Link } from 'react-router-dom';
import { Buttons } from '../subComponents/Buttons/Index';
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
      <span className='spaan'>&copy; www.tesla.com</span>

      <header className="header">

        <figure>
          <Link to={'/teslasite/'}>
            <img src='https://www.pngmart.com/files/21/Tesla-Car-Logo-PNG-Pic.png' alt="tesla logo" />
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
                <Hbutton nameButton={'Existing Inventory'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Used Inventory'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Trade-In'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Test Drive'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Insurance'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Cybertruck'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Roadster'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Semi'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Charging'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'PowerWall'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Commercial Energy'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Ultilities'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Find Us'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Support'}/>
              </Link>
              
              <Link to={''}>
                <Hbutton nameButton={'Inventor Relations'}/>
              </Link>
              
            </nav>

          </div>
        </aside>
    </body>
  )
    
}   