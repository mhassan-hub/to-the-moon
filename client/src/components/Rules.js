import "../App.css";
import NavBar from "./NavBar";
import "./Rules.css"

export default function Rules() {
  return (
    <div className="Rules">
      <NavBar/>
      <h1 className="page-title">
       rules
      </h1>
      <h2 className="subtitle">
        Introduction
      </h2>
      <div className="page-content">
      <h3 className="paragraphs">
        To The Moon is a cryptocurrency themed retro space shooter inspired by games like Space Invaders. Your goal is to take your selected cryptocurrency #TOTHEMOON!
      </h3>
      <h3 className="paragraphs">
        Select from 1 of 4 cryptocurrencies; Bitcoin, Litecoin, Ethereum and Dogecoin!
      </h3>
      <img className="crypto-images" src="https://i.imgur.com/K3HF62h.png"></img>
      <img className="crypto-images" src="https://i.imgur.com/4htYPdn.png"></img>
      <img className="crypto-images" src="https://i.imgur.com/0eqxT2v.png"></img>
      <img className="crypto-images" src="https://i.imgur.com/dchp5MR.png"></img>
      <h3 className="paragraphs">
        Collect coins and shoot asteroids to earn points!. If you collect the coin that corresponds to your selected currency you will get double points! Some currencies are worth more than others so choose your currency carefully!
      </h3>
      <img className="crypto-images" src="https://i.imgur.com/CqB7ele.png"></img>
      <img className="crypto-images" src="https://i.imgur.com/q1Brec7.png"></img>
      <img className="crypto-images" src="https://i.imgur.com/ftBwrI3.png"></img>
      <img className="crypto-images" src="https://i.imgur.com/8cwXMcv.png"></img>
      <h3 className="paragraphs">
        Watch out for enemies! You will be pursued by the banks so avoid them or shoot them down! Beware of the dastardly Elon Musk, he shoots back! 
      </h3>
      <h2 className="subtitle">
        Controls
      </h2>
      <h3 className="paragraphs">
        Use arrow keys to move up, down, left, right and space bar to shoot!
      </h3>
      <img src="https://i.imgur.com/DX2bHAh.png"></img>
      <h2 className="subtitle">
        Power Ups
      </h2>
      <h3 className="paragraphs">
        Invincibility: Upon recieving this power up nothing will be able to damage you for a brief period of time allowing you to maximize your gains. Grab the Wallstreet bets icon to recieve this power up!
      </h3>
      <img src="https://i.imgur.com/eysHhcJ.png?1"></img>
      <h3 className="paragraphs">
        Extra Life: Upon recieving this power up you will gain an additional life. Grab the heart icon to recieve this powerup
      </h3>
      <img src="https://i.imgur.com/ezdHt28.png"></img>
      <h3 className="paragraphs">
        Maximum Flurry: Upon recieving this power up you will unleash an unstoppable flurry of laser fire that will rain down onto your enemies. Grab the diamond hands icon to recieve this powerup #HODL.
      </h3>
      <img src="https://i.imgur.com/62JDb1u.png"></img>
      <h2>
        Debuffs
      </h2>
      <h3 className="paragraphs">
        Disable Movement: For a few seconds you will not be able to move up, down, left or right. The icon for this debuff looks very similar to the icon for Invincibility so Watch ut!
      </h3>
      <img src="https://i.imgur.com/89Hr9E2.png"></img>
      <h3 className="paragraphs">
        Disable Shoot: For a few seconds you will not be able to shoot. The icon for this debuff looks very similar to the icon for Maximum Flurry so Watch out!
      </h3>
      <img src="https://i.imgur.com/ZhamkcW.png"></img>
      </div>
    </div>
  );
}
