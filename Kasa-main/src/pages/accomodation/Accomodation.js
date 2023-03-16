import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


export default function Accomodation() {

	const [imageSlider, setImageSlider] = useState([]);
	// Récupération de l'id de l'hébergement dans l'URL
	const idAccomodation = useParams('id').id;
	// Filtre des données pour récupérer les informations de l'hébergement courant
	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
	// Utilisation de useEffect pour mettre à jour le state de l'image du slider au chargement de la page
	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);
	// Définition des variables à afficher dans le contenu de la page
	const name = dataCurrentAccomodation[0].host.name.split(' ');
	const rating = dataCurrentAccomodation[0].rating;
	const description = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

	// Affichage du contenu
	return (
		<>
			<Header />
			<Slider imageSlider={imageSlider} />
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
