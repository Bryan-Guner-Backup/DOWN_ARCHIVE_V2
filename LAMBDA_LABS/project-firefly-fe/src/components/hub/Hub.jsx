import React from 'react';
import StoreSideBar from './StoreSidebar';
import { HubDiv } from './Hub-Styles';
import FireflyExample from '../../assets/fireflylive1.png';
import Firefly from '../../assets/fireflylive2.png';
import Carousel from "./Hub-Carousel";


const gameLink = 'https...'; // replace this with the deploy link

const cImages = [Firefly, FireflyExample];

const Hub = props => {
	// when we get more than one game, add the logic for switching between game store pages.
	return (
		<HubDiv className='hub-container'>
			<main>
				<article>
					<div className='game-info'>
						<Carousel images={cImages} />
						<button className='play-now'>
							<a href={`${gameLink}`}>Play Firefly</a>
						</button>
					</div>
				</article>
				<StoreSideBar />
			</main>
		</HubDiv>
	)
};

export default Hub;

