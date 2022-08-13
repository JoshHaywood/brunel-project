import * as React from "react";
import { Container } from "@mui/material";
import Kresen05 from "./../../images/Kresen05.jpeg";
import Kresen06 from "./../../images/Kresen06.jpeg";

export default class History extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<>
				<Container style={{margin: '150px auto 0'}}>
					{/* about the workshop start */}
                    <h1 style={{marginBottom: "50px", color: '#00626B', fontWeight: '500' }}>About the workshop</h1>
					<p 
					style={{
					textAlign: 'justify',
					backgroundColor: 'white',
					padding: '20px',
					color: 'black',
					boxShadow: '1px 2px 10px grey',
					}}>
						<strong>Photographing Brunel</strong> is an experimental interactive workshop
						designed by staff and students from Falmouth University. The famous
						photograph of Isambard Kingdom Brunel in front of the launching
						chains of the Great Eastern is the inspiration for the workshop.
						That famous image was taken by a young Robert Howlett. This workshop
						will allow you to walk in the famous footsteps of Brunel and the
						slightly less famous but equally revolutionary footsteps of Howlett.
						This website will share the work made by members of the public that
						engage in this experimental mixture of digital and analogue
						technologies. The site also enables remote access and image capture
						with the augmented camera. Hosted at Kresen Kernow this workshop
						will run from Tuesday July 26th- Thursday 28th and Saturday 30th
						July.
					</p>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', justifyItems: 'center', alignContent: 'center', margin: '0 auto'}}>
                        <img src={Kresen06} style={{height: '350px', margin: '25px auto 0'}}/>
                        <img  src={Kresen05} style={{height: '350px', margin: '25px auto 0'}} />
                    </div>
					<figcaption style={{ fontSize: "0.8em", marginBottom: "25px", paddingLeft: '25px' }}>
						Replica Robert Howlett camera built for David White ©David White
					</figcaption>					
					{/*About the workshop end*/}

					{/* About the Image start */}
					<div style={{marginTop: '100px', marginBottom: '50px'}}>
						<h2 style={{marginBottom: 'px',color: '#00626B', fontWeight: '500' }}>About the image</h2>
						<div 
						style={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
						alignItems: 'center',
						justifyItems: 'center',
						alignContent: 'center',
						margin: '0 auto'
						}}>
							<div 
							style={{ width: '550px',
							height: '',
							padding: '40px',
							boxShadow: '1px 2px 10px grey',
							paddingBottom: '100px',
							display: 'flex',
							flexDirection: 'column',
							color: '#0a0a0a',
							backgroundColor: 'white'
							}}>
								<h4 
								style={{
								marginBottom: '25px',
								color: '#0a0a0a'
								}}>
									<strong>The famous image which has inspired this workshop.</strong>
								</h4>
								<p style={{ textAlign: 'justify', fontSize: '1.1em', color: '#0a0a0a'}}>
									To find out more about the incredible innovation and genius
									infront of and behind the lens we recommend Meredith Moore’s
									Photographing the 'Great Eastern'
									https://www.vam.ac.uk/articles/photographing-the-great-eastern
									and Rose Teanby’s excellent work on Robert Howlett
									https://roseteanbyphotography.co.uk/
								</p>
							</div>
							<br></br>
							<div style={{ transform: 'rotate(10deg)',width: '450px', height: '625px', padding: '20px 20px 600px 20px', backgroundColor: 'white',boxShadow: '1px 2px 10px grey', paddingBottom: '100px'}}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Robert_Howlett_%28Isambard_Kingdom_Brunel_Standing_Before_the_Launching_Chains_of_the_Great_Eastern%29%2C_The_Metropolitan_Museum_of_Art_-_restoration1.jpg/800px-Robert_Howlett_%28Isambard_Kingdom_Brunel_Standing_Before_the_Launching_Chains_of_the_Great_Eastern%29%2C_The_Metropolitan_Museum_of_Art_-_restoration1.jpg"
								style={{ height: "500px", margin: '0 auto' }}
							/>
							<figcaption style={{ fontSize: "0.8em", marginBottom: "25px", width: '90%', padding: '10px 0 0 20px' }}>
								<strong>Isambard Kingdom Brunel</strong>, source: https://en.wikipedia.org/wiki/Isambard_Kingdom_Brunel
							</figcaption>
							</div>
						</div>
					</div>
					{/*About the Image end */}

					{/* About the team Start */}
					<div style={{backgroundColor: '#00626B', padding: '35px 20px', borderRadius: '7px'}}>
						<h2 style={{fontWeight: '500'}}>About the team</h2>
						<br></br>
						<p>
							This workshop has been designed by a small team of students and
							staff from the Games and Photography departments of Falmouth
							University. We would like to thank Kresen Kernow for their support
							and the space to play in the archives.
						</p>
						<br></br>
						<br></br>
						<p>
							<strong>Tom Ingate</strong> is a senior lecturer from the institute
							of photography with research interests in photographic archives and
							participatory photography.
							<br></br>
							<a href="https://www.instagram.com/tomingate/">@tomingate</a>
						</p>
						<br></br>
						<p>
							<strong>David White</strong> is a senior lecturer from the institute
							of photography with varied research interests across photography and
							communication.
							<br></br>
							<a href="https://twitter.com/Falpressed">@falpressed</a>
						</p>
						<br></br>
						<p>
							<strong>Sokol Murturi</strong>
						</p>
						<br></br>
						<p>
							<strong>Louis Wright</strong>
						</p>
						<br></br>
						<p>
							<strong>Josh Haywood</strong>, currently a web development student at Falmouth University.
							Focusing on front-end based web development and design technologies.
							<a href="https://www.joshhaywood-portfolio.com/"></a>
						</p>
						<br></br>
						<p>
							<strong>Yordan Hristov</strong> is a web development student at
							Falmouth University focused on full stack web development with
							modern web technologies.
							<br />
							<a href="https://twitter.com/DantchoLV9">@DantchoLV9</a>
						</p>
						<br></br>
						<p>
							<strong>Danny Daley</strong> is currently a Web Development student at Falmouth University, creating Full Stack applications with a focus on social media systems.
							<br></br>
							<a href="https://dannydaley.co.uk">www.dannydaley.co.uk</a>
						</p>
					</div>
					{/*About the Team end*/}

					<hr style={{margin: '75px 0'}}></hr>
				</Container>				
			</>
		);
	}
}
