setInterval(displayTime, 1000);
//setInterval(displayTime, 60 * 1000);
setInterval(displayDate, 1000);


function displayTime() {

	const timeNow = new Date();

	const tempo = document.querySelector('.clock');
	const icon = document.querySelector('.icon');

	let hoursOfDay = timeNow.getHours();
	let minutes = timeNow.getMinutes();

	if (hoursOfDay > 12) {
		period = "PM";
	}

	if (hoursOfDay === 0) {
		period = "AM";

	}

	hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
	minutes = minutes < 10 ? "0" + minutes : minutes;

	let time = hoursOfDay + ":" + minutes + " "; // + period;


	console.log(time + " ");

	tempo.innerHTML = time;
}

function displayDate() {

	const timeNow = new Date();

	const data = document.querySelector('.week');
	const mes = document.querySelector('.month');

	let weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
	let today = weekDay[timeNow.getDay()];
	let months = timeNow.toLocaleString("default", {
		month: "long"
	});

	data.innerHTML = today;

	mes.innerHTML = months;
}