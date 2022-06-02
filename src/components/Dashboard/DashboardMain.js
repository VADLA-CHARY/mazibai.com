import React,{useState} from "react";
import UserImage from "../../images/img1.jpg";
import "../../styles/DashboardCSS.css"
function DashboardMain() {
	const [state, setstate] = useState(1)
	let items = document.getElementsByClassName("movable");
	let left = 0; 
	let right = 0; 
	const moveLeft = ()=>{
		if(left!=0){
			left = left+320; 
			right = right - 320; 
		}
		for (var i = 0, max = items.length; i < max; i++) {
			items[i].style.transform = `translateX(${left}px)`;
		}
	}
	const services = [
		{
			title:'Baby Care',
			desc:'What can be a better gift than giving your baby and new mother, a loving and caring babysitter?'
		},
		{
			title:'Personal Hygiene',
			desc:'Want to look trendy and classy? To groom you and bring the best out of you.'
		},
		{
			title:'House Coloring',
			desc:'To keep your home new and shining forever, try our creative coloring and painting services.'

		},
		{
			title: 'Office Boy',
			desc: 'Discipline, Sincere, Punctual and Trained manpower.'
		},
		{
			title: 'Patient care',
			desc: 'To heal patients quickly and support them in their tough times try our experienced service for a family member recovering from Illness. Taking good care of your health recovery is our Responsibility.'
		},
		{
			title: 'Gardener',
			desc: 'To keep your garden, home surroundings beautiful, attractive, and lush green. Go green with our eco-friendly gardener.'
		},
		{
			title: 'Laundry',
			desc: 'Neat and Clean Washing for First Class Look.'
		},
		{
			title: 'Kitchen care',
			desc: 'Cleanliness is next to Godliness and a Clean Kitchen is next to Happiness.'
		}

	]
	const moveRight = ()=>{
		if(right<=300*5){
			right = right+300; 
			left = left - 320 
		}
		for (var i = 0, max = items.length; i < max; i++) {
			items[i].style.transform = `translateX(-${right}px)`;
		}
	}
	
	return (
		<>
			
			<main id="dashboard">
				<div className="head-title">
					<div className="left">
						<h1>Dashboard</h1>
					</div>
				</div>

				<div className="box">
					<div  className="leftarrow">
						<button onClick={moveLeft}
							className="slidebutton"
							type="button"
							id="left-arrow"
							name="button"
						></button>
						<label className="arrow left" htmlFor="left-arrow" id="aurr">
							&lt;
						</label>
					</div>
					<ul className="box-info">
					<li  className="movable"  id="1">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Cooking</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 3770 </p>
							</span>
						</li>
						<li  className="movable" id="2">
							{/* <i className="bx bxs-calendar-check"></i> */}
							<span className="text">
								<h3>Cleaning</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 2001</p>
							</span>
						</li>
						<li  className="movable" id="3">
							{/* <i className="bx bxs-dollar-circle"></i> */}
							<span className="text">
								<h3>Elder Care</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 1700</p>
							</span>
						</li>
						<li  className="movable" id="4">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Washing</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 1902 </p>
							</span>
						</li>
						<li  className="movable" id="5">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Old Care</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 1089 </p>
							</span>
						</li>
						<li  className="movable" id="6">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Others</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 209 </p>
							</span>
						</li>
					</ul>
					<div className="rightarrow">
						<button onClick={moveRight}
							className="slidebutton"
							type="button"
							id="right-arrow"
							name="button"
						></button>
						<label className="arrow right" htmlFor="right-arrow" id="arr">
							&gt;
						</label>
					</div>
				</div>
				<div className="chary-services">
					{ state===1 && 
						<div className="div  cooking text" id="cooking">
						<div className="dashboardHeading">
							<div className="dashboardHeader">
								<h3>Services</h3>
							</div>
							{/* <div className="reviews">
								<input type="radio" name="star" id="29"   />
								<input type="radio" name="star" id="28" defaultChecked  />
								<input type="radio" name="star" id="27"   />
								<input type="radio" name="star" id="26"   />
								<input type="radio" name="star" id="25" />
								<input type="radio" name="star" id="24" />
								<input type="radio" name="star" id="23" />
								<input type="radio" name="star" id="22" />
								<input type="radio" name="star" id="21" />
								<input type="radio" name="star" id="20" />
							</div> */}
						</div>
						<hr />
						<div className="dashboardData text">
							<div className="dashboardContent">
								<h6 style={{color:'green'}}>
									We provide specialised personalised services
								</h6>
								<ul>
									{
										services.map((item,index)=> {
											return <div key={index}>
												<h4 key={index}>
													{item.title}
												</h4>
												<li style={{marginBottom:'30px'}}>
												{item.desc}
												</li>
											</div>

										})
									}
								</ul>
							</div>
							{/* <div className="dashboardImage">
								<img src={UserImage} alt="User Image" />
							</div> */}
						</div>
					</div>
					}
				</div>
			</main>
		</>
	);
}

export default DashboardMain;
