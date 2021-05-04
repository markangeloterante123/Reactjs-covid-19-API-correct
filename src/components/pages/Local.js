
import React, { useState } from 'react'

import { fetchData, fetchDailyData } from "../../api/Local"

import LocalPage from '../../components/card/Local'

import {  Card, CardContent, Typography, Grid  } from "@material-ui/core"

import Charts from '../../components/charts/Charts'

import Region from '../../components/Region'

class Local extends React.Component {
	
	state = {
	    local: {},
	    region: "",
	    dataRegion: {}
	}

	async componentDidMount() {
	    const fetchedData = await fetchData() //fetch the data from API
	    this.setState({ local: fetchedData }) //save into the state	
	}

	onClickRegion = async (region) => {
		const fetchedData = await fetchDailyData(region) 
		this.setState({ region: region, dataRegion:fetchedData })
	}

	render() {
		const { local, region, dataRegion } = this.state
		console.log( local )
		return (
			<div className="main-container">
				<div className="card-container">
					<LocalPage data={local} />
				</div>
				<div className="card-container">
					<Grid 
						container 
						spacing={3}
	  					justify="center"
					>
						<Grid className="province-holder" item lg={3} xs={12}>
							<div className="province-title">
								<p className="title">TOP REGION</p>
							</div>
							<div className="province-content">
								<Region onClick={this.onClickRegion} />
							</div>
						</Grid>
						
						<Grid className="graph-holder" item lg={8} xs={12}>
							<h3 style={{display:'flex',justifyContent:'center',alignItems:'center'}}> { !region ? '' : region } </h3>
							<Charts region={region} dataRegion={dataRegion} />
						</Grid>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Local
