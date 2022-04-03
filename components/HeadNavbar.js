import Image from "next/image";

const HeadNavbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark w-100 py-5">
			<div className="container">
				<Image
					src="/Images/TJlogo.jpeg"
					width={75}
					height={40}
					alt="Picture of the author"
				/>
			</div>
			<div>
				<h1 className="HeadName position-absolute top-50 start-50 translate-middle">
					Tanishka Jewellers
				</h1>
			</div>
		</nav>
	);
};

export default HeadNavbar;
