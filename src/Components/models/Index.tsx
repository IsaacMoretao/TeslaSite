import { FromModels } from '../subComponents/FromModels/Index'
import ScrollReveal from 'scrollreveal'
import './Style.scss'


export function Models() {

var slideUp: any  = {
    duration: 1000,
    delay: 150,
    distance: '500px',
    scale: 1,
    easing: 'button',
  };

  ScrollReveal().reveal('.slide-up', { interval: 5, reset: true, delay: 50 });
  ScrollReveal().reveal('.slide-up', slideUp);
  

  
  return(
    
    <section className='Models'>
      
      <article
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/1596x2560/M3-Homepage-Desktop-LHD) no-repeat center center'}}>
        <div className='slide-up'>
          <FromModels Name={'Model 3'} ButtonName={'Existing Inventory'} /> 
        </div>
      </article>

      <article
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/1500x2400/Desktop-ModelY?quality=70) no-repeat center center'}}>

        <div className='slide-up'>
          <FromModels Name={'Model Y'} ButtonName={'Existing Inventory'}/>
        </div>
      </article>

      <article
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/1596x2560/Homepage-Model-S-Desktop-LHD) no-repeat center center'}}>
        <div className='slide-up'>
          <FromModels Name={'Model S'} ButtonName={'Existing Inventory'}/>
        </div>
      </article>

      <article
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/1596x2560/Homepage-Model-X-Desktop-LHD) no-repeat center center'}}>
        <div className='slide-up'>
          <FromModels Name={'Model X'} ButtonName={'Existing Inventory'}/>
        </div>
      </article>

      <article 
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/1580x1800/_25-HP-SolarPanels-D) no-repeat center center'}}>
        <div className='slide-up'>
          <FromModels Name={'Solar Painels'} ButtonName={'Learn More'}/>
        </div>
      </article>

      <article 
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/1500x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto) no-repeat center center'}}
      >
        <div className='slide-up'>
          <FromModels Name={'Solar Roof'} ButtonName={'Learn More'}/>
        </div>
      </article>

      <article 
      style={{ background: 'url(https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/1500x1800/dd739764-bcaa-4263-9488-8c73bc9fb046) no-repeat center center'}}>
        
        <div className='slide-up'>
          <FromModels Name={'Acessories'} None={'None'}/>
        </div>
      </article>


    </section>

  )

}


