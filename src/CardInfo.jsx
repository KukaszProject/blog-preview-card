import imageAvatar from './assets/images/image-avatar.webp';
import AuthorInfo from './AuthorInfo';

function CardInfo() {

    return (
        <div className="card-info">
            <h3>Learning</h3>
            <p>Published 21 Dec 2023</p>
            <a href="#">HTML & CSS foundations</a>
            <span>These languages are the backbone of every website, defining structure, content and presentation.</span>
            <AuthorInfo className="author-info" avatar={imageAvatar} name="Greg Hooper " />
        </div>
    );
}

export default CardInfo;