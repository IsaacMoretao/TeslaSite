import ScrollReveal from 'scrollreveal';
import './sr.css';

export function Test(){

  ScrollReveal().reveal('.Title', { interval: 5, reset: true, delay: 50 });
  ScrollReveal().reveal('.tagline', { delay: 50 });
  ScrollReveal().reveal('.punchline', { delay: 200 });

  var slideUp: any  = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('.slide-up', slideUp);

  return(
    <div>
      <ul className="widget-list">
        <li className="slide-up">1</li>
        <li className="slide-up">2</li>
        <li className="slide-up">3</li>

        <li className="Title">4</li>
        <li className="Title">5</li>
      </ul>
    </div>
  )
}