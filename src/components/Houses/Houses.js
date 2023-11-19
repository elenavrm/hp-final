import ImgMediaCard from "./ImgMediaCard";
import './styles.css';

function Houses () {
    return (
        <div>
        <div className="sub-container">
            <h1>Hogwarts Faculties</h1>
        </div>
        <div className="f-container">
        <blockquote>
  <p className="f">
    <span className="space f">" T</span>he four Houses are called Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. Each House has its own noble history and each has produced outstanding witches and wizards. While you are at Hogwarts, your triumphs will earn your House points, while any rule breaking will lose House points. At the end of the year, the House with the most points is awarded the House Cup, a great honour. I hope each of you will be a credit to whichever House becomes yours."
  </p>
  <footer>
    <cite className="f">— Minerva McGonagall, September 1<span className="st">st</span> 1991, shortly before the Sorting Ceremony</cite>
  </footer>
</blockquote>
        </div>
        <div>
            <ImgMediaCard />
        </div>
        </div>
    )
}

export default Houses;