import { FromModels } from '../subComponents/FromModels/Index'
import ScrollReveal from 'scrollreveal'
import './Style.scss'


export function Models() {

  ScrollReveal().reveal('.headline');
  
  return(
    
    <section className='Models'>
      
      <article className='headline' style={{background: 'red'}}>
        <FromModels Name={'Model 3'} ButtonName={'Existing Inventory'} /> 
      </article>
      <article className='' style={{background: 'blue'}}>
        <FromModels Name={'Model Y'} ButtonName={'Existing Inventory'}/>
      </article>
      <article style={{background: 'black'}}>
        <FromModels Name={'Model S'} ButtonName={'Existing Inventory'}/>
      </article>
      <article style={{background: 'white'}}>
        <FromModels Name={'Model X'} ButtonName={'Existing Inventory'}/>
      </article>
      <article style={{background: 'yellow'}}>
        <FromModels Name={'Solar Painels'} ButtonName={'Learn More'}/>
      </article>
      <article style={{background: 'orange'}}>
        <FromModels Name={'Solar Roof'} ButtonName={'Learn More'}/>
      </article>
      <article style={{background: 'green'}}>
        <FromModels Name={'Acessories'} ButtonName={''}/>
      </article>

    </section>

  )

}


