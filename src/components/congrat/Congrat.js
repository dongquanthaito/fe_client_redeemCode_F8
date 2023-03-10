import { useEffect } from 'react';
import '../../assets/styles/congrat.scss';

const Congrat = () => {
    useEffect(() => {
        const Confettiful = function(el) {
            this.el = el;
            this.containerEl = null;
            
            this.confettiFrequency = 3;
            this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D'];
            this.confettiAnimations = ['slow', 'medium', 'fast'];
            
            this._setupElements();
            this._renderConfetti();
          };
          
          Confettiful.prototype._setupElements = function() {
            const containerEl = document.createElement('div');
            const elPosition = this.el.style.position;
            
            if (elPosition !== 'relative' || elPosition !== 'absolute') {
              this.el.style.position = 'relative';
            }
            
            containerEl.classList.add('confetti-container');
            
            this.el.appendChild(containerEl);
            
            this.containerEl = containerEl;
          };
          
          Confettiful.prototype._renderConfetti = function() {
            this.confettiInterval = setInterval(() => {
              const confettiEl = document.createElement('div');
              const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
              const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
              const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
              const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
              
              confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
              confettiEl.style.left = confettiLeft;
              confettiEl.style.width = confettiSize;
              confettiEl.style.height = confettiSize;
              confettiEl.style.backgroundColor = confettiBackground;
              
              confettiEl.removeTimeout = setTimeout(function() {
                confettiEl.parentNode.removeChild(confettiEl);
              }, 3000);
              
              this.containerEl.appendChild(confettiEl);
            }, 25);
          };
          
          window.confettiful = new Confettiful(document.querySelector('.js-container'));
    })
    return (
        <div className="congrat-wrapper">
            <div className="js-container congrat-container"></div>
            <div className="congrat-main confetti-container">
                <div className="checkmark-circle">
                    <div className="background"></div>
                    <div className="checkmark draw"></div>
                </div>
                <h1>Ch??c m???ng!</h1>
                <p className='congrat-id'></p> {/**Nh???p t??n */}
                <p>B???n ???? nh???n th??nh c??ng <p className='congrat-score'></p>??i???m</p> {/**Nh???p ??i???m */}
                <a href="https://shbetv0.com/Promotion">
                    <button className="congrat-submit-btn" type="submit">Ti???p t???c</button>
                </a>
            </div>  
        </div>
        
    )
}
export default Congrat;



  
  
  