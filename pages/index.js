import Head from "next/head";

import Image from "next/image";
import Navbar from "../components/Navbar";
import HeadNavbar from "../components/HeadNavbar";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceRelieved } from "@fortawesome/pro-solid-svg-icons";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import {
	faFacebook,
	faLocationDot,
	faLocationArrow,
	faHome,
	faEnvelope,
	faPhone,
	faPrint,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<>
			<Head>
				<title>Tanishka Jewellers</title>
				<link rel="shortcut icon" href="../Images/TJlogo.jpeg" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
				/>

				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
				></link>
			</Head>
			<HeadNavbar />
			<Navbar />
			{/* Here, we using the Carousel to make slide for the home page */}
			<>
				<div
					id="carouselExampleFade"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						{/* Here, the slide 1 topic is start */}

						<div className="carousel-item active text-center">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="img-fluid d-block w-100"
								height={750}
								width={1550}
								alt="slide1Pic"
							/>

							<div class="container-fluid p-0">
								<div class="slide1Heading text-center">
									<div class="d-flex justify-content-center">
										<div class="d-flex flex-column mt-5">
											<h1 class=" mb-5">Just look into the gold Hub</h1>
											<p class="slide1Para text-center mt-3">
												Jewellery Is Like the Perfect Spic- It Always
												Complements What’s Already There
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Here, the slide 1 topic is end */}

						{/* Here, the slide 2 topic is start */}

						<div className="carousel-item">
							<Image
								src="/Images/sliderImage/slide8.jpg"
								className=" img-fluid d-block w-100"
								height={750}
								width={1550}
								alt="slider2"
							/>

							<div className="container-fluid p-0">
								<div className="slide2Heading text-center">
									<div
										className="d-flex 
									justify-content-center"
									>
										<div className="d-flex flex-column mt-5">
											<h1 className="site-head mb-5">
												Tanishka Jewellers Pawn Brokers
											</h1>
											<p className="slide2Para text-center mt-2">
												Instant top cash for gold ornaments! Trust us for what
												we do best
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Here, the slide 2 topic is end */}

						{/* Here, the slide 3 topic is start */}
						<div className="carousel-item">
							<Image
								src="/Images/sliderImage/slide7.jpg"
								className="img-fluid d-block w-100 text-center"
								height={750}
								width={1550}
								alt="slider3"
							/>

							<div className="container-fluid p-0">
								<div className="slide3Heading text-center">
									<div className="d-flex justify-content-center">
										<div className="d-flex flex-column mt-5">
											<h1 className=" mb-5">Tanishka Gold chit Scheme</h1>
											<p className="slide3Para  text-center mt-5">
												...Coming Soon...
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Here, the slide 3 topic is end */}
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</>
			{/* Here, we creating the Pawn broker section  */}
			<>
				<div className="joinus bg-dark">
					<div className="container">
						<div class="row">
							<div className="col-md-7">
								<Image
									src="/Images/sliderImage/slide5.jpg"
									alt="join"
									className="img-fluid d-block w-100"
									width={800}
									height={700}
								/>
							</div>

							<div className="col-md-5">
								<h3>Wanna to explore our products? Let's join Us</h3>
								<a href="#">Join with Us</a>
								<p className="para">
									Our Product management team conduct the webminars and some
									product exhibition through via online. This may useful for our
									stakeholders as well as the end users. Actually our product
									management motto is to provide the knowledge of our products
									to all.
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
			{/* Here, Pawn broker section is end*/}
			{/* Here, we creating the Chit scheme section  */}
			<>
				<div className="joinus bg-dark">
					<div className="container">
						<div class="row">
							<div className="col-md-6">
								<h3>Wanna to explore our products? Let's join Us</h3>
								<a href="#">Join with Us</a>
								<p className="para">
									Our Product management team conduct the webminars and some
									product exhibition through via online. This may useful for our
									stakeholders as well as the end users. Actually our product
									management motto is to provide the knowledge of our products
									to all.
								</p>
							</div>

							<div className="col-md-6">
								<Image
									src="/Images/sliderImage/slide5.jpg"
									className="img-fluid d-block w-100"
									width={800}
									height={700}
									alt="join"
								/>
							</div>
						</div>
					</div>
				</div>
			</>
			{/* Here, the Chit scheme section is end  */}
			{/* Here, the gallery slider is satrted */}
			<section className="product">
				<h2 className="product-category">best selling</h2>
				<button className="pre-btn" alt=""></button>
				<button className="nxt-btn">
					<Image
						src="/Images/sliderImage/arrow.png"
						className="img-fluid d-block w-100"
						width={20}
						height={30}
						alt=""
					/>
				</button>
				<div className="product-container">
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/card1.jpg"
								className="product-thumb img-fluid d-block w-100 rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/card2.jpg"
								className="product-thumb img-fluid d-block w-100 rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/card3.jpg"
								className="product-thumb img-fluid d-block w-100 rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
					<div className="product-card">
						<div className="product-image">
							<Image
								src="/Images/sliderImage/slide1.jpg"
								className="product-thumb img-fluid d-block w-100rounded-3 border-2 border border-dark"
								width={270}
								height={310}
								alt=""
							/>
							<button className="card-btn">add to wishlist</button>
						</div>
						<div className="product-info">
							<h2 className="product-brand">brand</h2>
							<p className="product-short-description">
								a short line about the cloth..
							</p>
							<span className="price">$20</span>
							<span className="actual-price">$40</span>
						</div>
					</div>
				</div>
			</section>
			{/* Here, the gallery slider is satrted */}
			{/* Here, we creating the store location section  */}
			<>
				<div className="location bg-light">
					<div className="container-fluid">
						<div class="row">
							<div className="col-md-8">
								<Image
									src="/Images/sliderImage/store.jpg"
									className="img-fluid"
									width={870}
									height={520}
									alt="join"
								/>
							</div>

							<div className="text-lg-start col-md-4">
								<h3 className="text-center ">Visit Us</h3>
								<h5 className="text-center mb-3">Explore Our Store</h5>
								<FontAwesomeIcon
									icon={faLocationDot}
									className="font-loc rounded mx-auto d-block"
								/>
								<p className="location-para text-center mt-3">
									3/8A, Valluvar Salai, Ramapuram, Chennai - 600089
								</p>
								<button
									type="button"
									className="btn btn-secondary mt-4 mx-auto d-block"
								>
									<a
										href="https://goo.gl/maps/82mLYBv7FDWMaeSJA"
										target="_blank"
									>
										Get Direction
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
			{/* Here, the store location section is end  */}
			{/* Here, the footer section is start  */}
			<div className="container-fluid mt-5">
				<footer
					className="text-center text-lg-start text-white"
					style={{ backgroundColor: "#1c2331" }}
				>
					<section
						className="d-flex justify-content-between p-4"
						style={{ backgroundColor: "#6351ce" }}
					>
						<div className="me-5">
							<span>Get connected with us on social networks:</span>
						</div>

						<div>
							<a href="" className="text-white me-4">
								<FontAwesomeIcon icon={faFacebookF} />
							</a>

							<a href="" className="text-white me-4">
								<FontAwesomeIcon icon={faLocationArrow} />
							</a>
							<a href="" className="text-white me-4">
								<FontAwesomeIcon icon={faInstagram} />
							</a>

							<a href="" className="text-white me-4">
								<FontAwesomeIcon icon={faWhatsapp} />
							</a>
						</div>
					</section>

					<section className="">
						<div className="container text-center text-md-start mt-5">
							<div className="row mt-3">
								<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold">Company name</h6>
									<hr
										className="mb-4 mt-0 d-inline-block mx-auto"
										style={{
											width: "60px",
											backgroundColor: "#7c4dff",
											height: "2px",
										}}
									/>
									<p>
										Here you can use rows and columns to organize your footer
										content. Lorem ipsum dolor sit amet, consectetur adipisicing
										elit.
									</p>
								</div>

								<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold">Additional Info</h6>
									<hr
										className="mb-4 mt-0 d-inline-block mx-auto"
										style={{
											width: "60px",
											backgroundColor: "#7c4dff",
											height: "2px",
										}}
									/>
									<p>
										<a href="#!" className="text-white">
											Saving Scheme
										</a>
									</p>
									<p>
										<a href="#!" className="text-white">
											General Enquiry
										</a>
									</p>
									<p>
										<a href="#!" className="text-white">
											Contact Us
										</a>
									</p>
									<p>
										<a href="#!" className="text-white">
											Help
										</a>
									</p>
								</div>

								<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
									<h6 className="text-uppercase fw-bold">Contact</h6>
									<hr
										className="mb-4 mt-0 d-inline-block mx-auto"
										style={{
											width: "60px",
											backgroundColor: "#7c4dff",
											height: "2px",
										}}
									/>
									<p>
										<FontAwesomeIcon icon={faHome} className="mr-3" />
										Ramapuram, Chennai - 600089
									</p>
									<p>
										<FontAwesomeIcon icon={faEnvelope} className="mr-3" />
										info@Tanishkajewellers.com
									</p>
									<p>
										<FontAwesomeIcon icon={faPhone} className="mr-3" />+ 01 234
										567 88
									</p>
									<p>
										<FontAwesomeIcon icon={faPrint} className="mr-3" />+ 01 234
										567 89
									</p>
								</div>
							</div>
						</div>
					</section>

					<div
						className="text-center p-3"
						style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
					>
						© 2020 Copyright:
						<a className="text-white">Tanishkajewellers.com</a>
					</div>
					<div className="text-center p-3" style={{ backgroundColor: "grey" }}>
						Powered by NewFangle TechSpace
					</div>
				</footer>
			</div>
			{/* Here, the footer section is end  */}
			<script src="productSlider.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
		</>
	);
}
