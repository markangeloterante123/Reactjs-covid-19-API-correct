
import { Card, Grid } from '@material-ui/core'

import CountUp from 'react-countup'

import CardInfo from '../../components/card/Card'

const Local = ({ data:{ data, last_update }}) => {
	
	if(!data){
		return 'loading...'
	}

	return (
		<Grid
			container spacing={3}
			justify="center"
		>
			<Grid className="cards active" item component={Card} xs={12} md={3} >
				<CardInfo	
					title="ACTIVE"
					no = {data.active_cases}
					dates = {last_update}
					comment = "Active Cases of COVID-19"
				/>
			</Grid>
						
			<Grid className="cards recover" item component={Card} xs={12} md={3} >
				<CardInfo
					title="RECOVERED"
					no = {data.recoveries}
					dates = {last_update}
					comment = "Recovered Cases of COVID-19"
				/>
			</Grid>
						
			<Grid className="cards death" item component={Card} xs={12} md={3} >
				<CardInfo
					title="DEATHS CASED"
					no = {data.deaths}
					dates = {last_update}
					comment = "Deaths Cases of COVID-19"
				/>
			</Grid>

		</Grid>
	)
}

export default Local