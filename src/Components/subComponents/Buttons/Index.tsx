import './Style.scss';

type buttonHeader = {
 nameButton: string
}

export function Buttons(props: buttonHeader){
  return(
    <>
      <button className='ButtonNav'>
        {props.nameButton}
      </button>
    </>
  )

}