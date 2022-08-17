import './Style.scss'

 type modelNames = {
   Name: string,
   ButtonName: string,
   opacity: string
 }

export function FromModels(props: modelNames){

  return(
    <div className='FromModels' style={{opacity: `${props.opacity}`}}>
      
      <header>
        <h1>{props.Name}</h1>
        <h2>Ti Ti Ti...</h2>
      </header>

      <footer>
        <button>Costom Order</button>
        <button>{props.ButtonName}</button>
      </footer>

    </div>
  )
}