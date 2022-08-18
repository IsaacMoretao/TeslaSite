import ScrollReveal from 'scrollreveal';
import './sr.css';

export function Test(){

  ScrollReveal().reveal('.slide-up', { interval: 5, reset: true, delay: 50 });
  ScrollReveal().reveal('.tagline', { delay: 50 });
  ScrollReveal().reveal('.punchline', { delay: 200 });

  ScrollReveal().reveal('.slide-up', { delay: 250 });
  ScrollReveal().reveal('.slide-up', { duration: 500 });
  ScrollReveal().reveal('.slide-up', { delay: 375, reset: true });

 // ScrollReveal().reveal('.slide-up', slideUp);
  
 /* var slideUp: any  = {
    origin: 'right',
    duration: 1000,
    delay: 150,
    distance: '500px',
    scale: 1,
    easing: 'button',
  };*/

  return(
    
    <div>
      <ul className="widget-list">
        <li className="slide-up">1</li>       
        <li className="slide-up">2</li>
        <li className="slide-up">3</li>
        <li className="slide-up">4</li>
        <li className="slide-up">5</li>
      </ul>
    </div>
  )
}

