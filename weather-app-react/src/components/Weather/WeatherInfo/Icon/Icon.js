import React from 'react';

import Icon from 'components/Miscellanious/Icon/Icon';

import { ReactComponent as BrokenCloudsIcon } from 'assets/img/weather/broken-clouds.svg';
import { ReactComponent as ClearSkyIcon } from 'assets/img/weather/clear-sky.svg';
import { ReactComponent as ClearSkyNightIcon } from 'assets/img/weather/clear-sky-night.svg';
import { ReactComponent as FewCloudsIcon } from 'assets/img/weather/few-clouds.svg';
import { ReactComponent as FewCloudsNightIcon } from 'assets/img/weather/few-clouds-night.svg';
import { ReactComponent as MistIcon } from 'assets/img/weather/mist.svg';
import { ReactComponent as RainIcon } from 'assets/img/weather/rain.svg';
import { ReactComponent as ScatteredCloudsIcon } from 'assets/img/weather/scattered-clouds.svg';
import { ReactComponent as ShowerRainIcon } from 'assets/img/weather/shower-rain.svg';
import { ReactComponent as SnowIcon } from 'assets/img/weather/snow.svg';
import { ReactComponent as ThermometerIcon } from 'assets/img/weather/thermometer.svg';
import { ReactComponent as ThunderstormIcon } from 'assets/img/weather/thunderstorm.svg';

//weather icons set
const weatherIcons = {
	brokenClouds: BrokenCloudsIcon,
	clearSky: ClearSkyIcon,
	clearSkyNight: ClearSkyNightIcon,
	default: ThermometerIcon,
	fewClouds: FewCloudsIcon,
	fewCloudsNight: FewCloudsNightIcon,
	fog: MistIcon,
	mist: MistIcon,
	rain: RainIcon,
	scatteredClouds: ScatteredCloudsIcon,
	showerRain: ShowerRainIcon,
	snow: SnowIcon,
	thunderstorm: ThunderstormIcon,
};

const icon = (props) => {

	const { weatherType } = props;

	return(

		<Icon size={'lg'}>
			<MistIcon/>
		</Icon>

	);

};

export default icon;
