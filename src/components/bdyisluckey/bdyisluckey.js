import React, { useState } from "react";
import "./bdyisluckey.css";

function BirthDayIsLuckey() {
	const [dob, setDob] = useState("");
	const [dobSum, setDobSum] = useState();
	const [luckynum, setLuckyNum] = useState(0);
	const [toggle, setToggle] = useState(false);

	const handleDobChange = (e) => {
		const Dob = e.target.value;
		setDob(Dob);
	};

	const handleLuckeyNum = (e) => {
		const luckeynum = e.target.value;
		setLuckyNum(luckeynum);
	};

	const handleCheckClick = () => {
		SumofDob();
		setToggle(true);
	};

	const SumofDob = () => {
		const dob1 = dob;
		const sumofDob = calCulateSum(dob1);
		console.log(`sumofDob`, sumofDob);
	};

	const calCulateSum = (dob2) => {
		dob2 = dob2.replaceAll("-", "");
		let sum = 0;
		for (let i = 0; i < dob2.length; i++) {
			sum = sum + parseInt(dob2.charAt(i));
		}
		setDobSum(sum);
		return sum;
	};

	return (
		<div>
			<h1 className="bdy-head">Is your Birthday Lucky? 🤔</h1>
			<div>
				<div className="first-block">
					<label className="date-label">Date Of Birth:</label>
					<input
						className="date-input"
						type="date"
						value={dob}
						onChange={handleDobChange}
					/>
				</div>

				<div className="second-block">
					<label className="number-label">Lucky Number:</label>
					<input
						className="num-input"
						value={luckynum}
						type="number"
						onChange={handleLuckeyNum}
					/>
				</div>
			</div>

			<div>
				<button className="check-luck" onClick={handleCheckClick}>
					Check Number
				</button>
			</div>

			{toggle === false ? (
				<></>
			) : (
				<div className="result">
					{luckynum == dobSum
						? `${luckynum} is a luckey Number`
						: `this number not luckey with your date`}
				</div>
			)}
		</div>
	);
}

export default BirthDayIsLuckey;
