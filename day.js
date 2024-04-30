function dayName(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
						   "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[date.getDay()];
}

let now = new Date();

function greeting(date) {
	return(`Hello, world! Happy ${dayName(now)}.`)
}