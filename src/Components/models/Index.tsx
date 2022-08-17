import React from 'react'
import { FromModels } from '../subComponents/FromModels/Index'
import './Style.scss'

export function Models() {

  
  return(
    
    <section className='Models'>
      <FromModels Name={'Model 3'} ButtonName={'Existing Inventory'} opacity={'100'}/>
      <FromModels Name={'Model Y'} ButtonName={'Existing Inventory'} opacity={'0'}/>
      <FromModels Name={'Model S'} ButtonName={'Existing Inventory'} opacity={'0'}/>
      <FromModels Name={'Model X'} ButtonName={'Existing Inventory'} opacity={'0'}/>
      <FromModels Name={'Solar Painels'} ButtonName={'Learn More'} opacity={'0'}/>
      <FromModels Name={'Solar Roof'} ButtonName={'Learn More'} opacity={'0'}/>
      <FromModels Name={'Acessories'} ButtonName={''} opacity={'0'}/>

      <article className='Models#1' style={{background: 'red'}}/>
      <article className='Models#2' style={{background: 'blue'}}/>
      <article className='Models#3' style={{background: 'black'}}/>
      <article className='Models#4' style={{background: 'white'}}/>
      <article className='Models#5' style={{background: 'yellow'}}/>
      <article className='Models#6' style={{background: 'orange'}}/>
      <article className='Models#3' style={{background: 'green'}}/>

    </section>
  )

  

}
