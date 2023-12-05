import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("");

	const handleColorChange = (newColor) => {
		setColor(newColor);
	};

	return (
		<div className="container">
			<div>
				<div className="traffic-light">
					<input
						className={color === "colorRed" ? "colorRed selected" : "colorRed"}
						type="radio"
						onClick={() => handleColorChange("colorRed")}
					/>

					<input
						className={
							color === "colorYellow" ? "colorYellow selected" : "colorYellow"
						}
						type="radio"
						onClick={() => handleColorChange("colorYellow")}
					/>

					<input
						className={
							color === "colorGreen" ? "colorGreen selected" : "colorGreen"
						}
						type="radio"
						onClick={() => handleColorChange("colorGreen")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
