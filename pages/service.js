import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
	return (
		<>
			<div className="carousel-item active text-center">
					{/* <Image
						src="/Images/sliderImage/slide1.jpg"
						className="img-fluid d-block w-100"
						height={750}
						width={1550}
						alt="slide1Pic"
					/> */}

				<div class="container-fluid p-0">
					<div class="slide1Heading text-center">
						<div class="d-flex justify-content-center">
							<div class="d-flex flex-column mt-5">
								<h1 class=" mb-5">Just look into the gold Hub</h1>
								<p class="slide1Para text-center mt-3">
									Jewellery Is Like the Perfect Spic- It Always Complements
									What’s Already There
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
