import './footer.css'
import Applestore from './img/Applestore.webp'
import playstore from './img/playstore.webp'
import ZomatologoBlack from './img/ZomatologoBlack.avif'
import indianflag from './img/indianflag.webp'

export default function Footer(){
    return(
        //  This is for footer section 
		<footer class = "footer__container">
			<div class = "footer_section1">
				<img src ={ZomatologoBlack} alt = "zomato logo" />
				<div class = "section1__button_container">
					<button>
						<img id='flagimg' src ={indianflag} alt = "Indian Flag"/>
						<select className='countryselect' >
							<option>India</option>
							<option>United States</option>
							<option>Australia</option>
							<option>New Zealand</option>
							<option>Spain</option>
							<option>England</option>
						</select>
					</button>
					<button>
						<i class = "fa fa-globe"></i>
						<select className='Flanguage' >
							<option>English</option>
							<option>Español</option>
							<option>Čeština</option>
							<option>Slovenčina</option>
							<option>Polish</option>
							<option>Italian</option>
						</select>
					</button>
				</div>
			</div>
			<div class = "navigation_container">
				<div class = "link_container">
					<h5>About Zomato</h5>
					<div class = "link_container_anchors">
						<a href = "#">Who We Are</a>
						<a href = "#">Blog</a>
						<a href = "#">Work With Us</a>
						<a href = "#">Investor Relations</a>
						<a href = "#">Report Fraud</a>
						<a href = "#">Contact Us</a>
					</div>
				</div>
				
				<div class = "link_container">
					<h5>Zomaverse</h5>
					<div class = "link_container_anchors">
						<a href = "#">Zomato</a>
						<a href = "#">Blinkit</a>
						<a href = "#">Feeding India</a>
						<a href = "#">Hyperpure</a>
						<a href = "#">Zomaland</a>
					</div>
				</div>
				
				<div class = "link_container">
					<h5>For Restaurants</h5>
					<div class = "link_container_anchors">
						<a href = "#">Partner With Us</a>
						<a href = "#">Apps For You</a>
					</div>
					<h5 id = "enterprises">For Enterprises</h5>
					<div class = "link_container_anchors">
						<a href = "#">Zomato For Work</a>
					</div>
				</div>
				
				<div class = "link_container">
					<h5>Learn More</h5>
					<div class = "link_container_anchors">
						<a href = "#">Privacy</a>
						<a href = "#">Security</a>
						<a href = "#">Terms</a>
						<a href = "#">Sitemap</a>
					</div>
				</div>
				
				<div class = "link_container">
					<h5>Social Links</h5>
					<div class = "social_media_icon_buttons">
						<button><i class="fa-brands fa-linkedin-in"></i>	</button>
						<button><i class = "fa-brands fa-instagram"></i></button>
						<button><i class = "fa-brands fa-twitter"></i></button>
						<button><i class = "fa-brands fa-facebook"></i></button>
						<button><i class = "fa-brands fa-youtube"></i></button>
						<div class = "social_media_logos">
							<img src = {Applestore} alt = "Apple store" />
							<img src ={playstore} alt = "Play store" id = "img2"/>
						</div>
					</div>
				</div>
			</div>
			<div class = "disclaimer">
			By continuing past this page, you agree to our Terms of Service, Cookie Policy,
			Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
			2008-2023 © Zomato™ Ltd. All rights reserved.
			</div>
		</footer>
    )
}