import cardImage from './assets/images/illustration-article.svg';
import CardInfo from './CardInfo.jsx';

function Card(){

    return (
        <div className="card">
            <img src={cardImage} alt="Illustration Hero"/>
            <CardInfo/>
        </div>
    );
}

export default Card;