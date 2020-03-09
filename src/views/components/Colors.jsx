import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

import colors from '../../variables/colors';

class Colors extends React.Component {
	render() {
		return (
			<>
				<div className='content'>
					<Row>
						<Col md={12}>
							<Card classname='color-boxes'>
								<CardHeader>
									<CardTitle>Foundation</CardTitle>
									<h1 className='amsurg-blue'>Colors</h1>
									<h2 classname='slate-grey'>Web Colors</h2>
									<p>These are the primary colors used on the website</p>
								</CardHeader>
								<CardBody className='all-colors'>
									<div id='colors-wrapper'>
										<section>
											<Col xs={12} md={6} lg={4}>
												{colors.map((prop, key) => {
													const style = {
														backgroundColor: prop.hex
													};
													return (
														<div key={key} className='colorContainer'>
															<h4 className='colorName'>{prop.name}</h4>
															<div className='mx-0 colorSquare' style={style}>
																<Row className='mx-0 accessibilityContain'>
																	<Col
																		xs={3}
																		className='accessibilityStandards sOne'>
																		<div className='failA'>A</div>
																		<div className='failB'>fail</div>
																	</Col>
																	<Col
																		xs={3}
																		className='accessibilityStandards sTwo'>
																		<div className='failA2'>A</div>
																		<div className='failB2'>fail</div>
																	</Col>
																	<Col
																		xs={3}
																		className='accessibilityStandards sThree'>
																		<div className='passA'>A</div>
																		<div className='passB'>pass</div>
																	</Col>
																	<Col
																		xs={3}
																		className='accessibilityStandards sFour'>
																		<div className='passA2'>A</div>
																		<div className='passB2'>pass</div>
																	</Col>
																</Row>
															</div>
														</div>
													);
												})}
											</Col>
										</section>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default Colors;
