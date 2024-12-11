async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

let el1 = document.querySelector(".l1");
let el2 = document.querySelector(".l2");
let el3 = document.querySelector(".l3");

async function init() {
	await sleep(500).then(() => {
		el1.classList.add("active");
	});

	await sleep(600).then(() => {
		el2.classList.add("active");
	});

	await sleep(700).then(() => {
		el3.classList.add("active");
	});
}

init();