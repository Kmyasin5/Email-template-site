// import styled from "styled-components";
// import Link from "next/link";\
import Images from "next/image";

const Navbar = () => {
	return (
		//here creating the second navbar which is contain menubars

		// Note: create another navbar in the component and import in index.js page
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<div className="container-fluid  py-4">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNav">
					<ul className="navbar-nav position-absolute top-50 start-50 translate-middle ">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Our Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Our Products
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact.js">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
