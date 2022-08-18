import './Style.scss';

type buttonBurguer = {
  nameButton: string
}

export function Hbutton(props:buttonBurguer){
  return(
    <span className='Span'>
      {props.nameButton}
    </span>
  )
}