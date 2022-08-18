import './Style.scss'

 type modelNames = {
   Name: string,
   ButtonName?: string,
   None?: 'None' 
 }

export function FromModels(props: modelNames){

  return(
    <div className='FromModels'>
      
      <header>
        <h1>{props.Name}</h1>
        <h2>Order Online for Touchless Delivery</h2>
      </header>

      <footer>
        <button>Costom Order</button>
        <button style={{display:`${props.None}`}}>{props.ButtonName}</button>
      </footer>

    </div>
  )
}