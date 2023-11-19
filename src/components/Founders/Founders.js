import ImgMediaCard from "./ImgMediaCard";
import './styles.css';

function Founders () {
    return (
        <div>
        <div className="sub-container">
            <h1>Hogwarts Founders</h1>
        </div>
        <div>
<blockquote>
  <p className="f">
    <span className="space f">" Y</span>ou all know, of course, that Hogwarts was founded over a thousand years ago — the precise date is uncertain — by the four greatest witches and wizards of the age. The four school Houses are named after them: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin. They built this castle together, far from prying Muggle eyes, for it was an age when magic was feared by common people, and witches and wizards suffered much persecution."
  </p>
  <footer>
    <cite className="f">— Professor Cuthbert Binns regarding the founding of Hogwarts</cite>
  </footer>
</blockquote>
        </div>
        <div>
            <ImgMediaCard />
        </div>
        </div>
    )
}

export default Founders;