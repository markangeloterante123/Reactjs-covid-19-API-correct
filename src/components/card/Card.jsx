import CountUp from 'react-countup'

import { Typography } from '@material-ui/core'

const Card = ({ title, no, dates, comment }) => {
	return (
		<>
			<Typography variant="h6" gutterBottom > {title} </Typography>
			<Typography variant="h3"> 
				<CountUp
					start={0}
					end={no}
					duration={3.5}
					separator=","
				/>
			</Typography>
			<Typography >{new Date(dates).toDateString()}</Typography>
			<Typography variant="body2">{comment}</Typography>
		</>
	)
}

export default Card