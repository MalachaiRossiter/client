import mountainsforground from './images/mountainsforground.png';
import carouselmountain from './images/carouselmountain.jpg';
import mounteverest from './images/MountEverest.jpg';
import './App.css';

function App() {
  return (
    <div className={'container1'}>
      <div className={'hero-section'}>
        <nav className={'navbar'}>
          <h1>logo goes here</h1>
          <ul className={'nav-list'}>
            <li className={'nav-item'}>1.History</li>
            <li className={'nav-item'}>2.Team</li>
          </ul>
        </nav>
        <div className={"image-container"}>
            <img src={mountainsforground} alt={'Mountains'} className={'forground'}/>
        </div>
        <h1 className={"background"}>LOSANGLES<br/><span id={'mountain-text'}>MOUNTAINS</span></h1>
      </div>
      <div className={'carousel-container'}>
        <nav className={'navbar'}>
          <h1>logo goes here</h1>
          <ul className={'nav-list'}>
            <li className={'nav-item'}>1.History</li>
            <li className={'nav-item'}>2.Team</li>
          </ul>
        </nav>
        <img src={carouselmountain} alt="mountain" className={"carousel-hero-image"}/>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img src={mounteverest} alt="mounteverest" className={"carousel-image"}/>
          </div>
          <div class="item">
            <img src={mounteverest} alt="mounteverest" className={"carousel-image"}/>
          </div>
          <div class="item">
            <img src={mounteverest} alt="mounteverest" className={"carousel-image"}/>
          </div>
        </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      </div>
    </div>
  );
}

export default App;
