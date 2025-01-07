async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

let el1 = document.querySelector(".l1");
let el2 = document.querySelector(".l2");
let el3 = document.querySelector(".l3");

async function init() {
	await sleep(200).then(() => {
		el1.classList.add("active");
	});

	await sleep(400).then(() => {
		el2.classList.add("active");
	});

	await sleep(600).then(() => {
		el3.classList.add("active");
	});
}

// var duration = 15 * 1000;
// var animationEnd = Date.now() + duration;
// var skew = 1;

// function randomInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

// (function frame() {
//   var timeLeft = animationEnd - Date.now();
//   var ticks = Math.max(200, 500 * (timeLeft / duration));
//   skew = Math.max(0.8, skew - 0.001);

//   confetti({
//     particleCount: 1,
//     startVelocity: 0,
//     ticks: ticks,
//     origin: {
//       x: Math.random(),
//       // since particles fall down, skew start toward the top
//       y: (Math.random() * skew) - 0.2
//     },
//     colors: ['#ff1100'],
//     shapes: ['circle'],
//     gravity: randomInRange(0.4, 0.6),
//     scalar: randomInRange(0.4, 1),
//     drift: randomInRange(-0.4, 0.4)
//   });

//   if (timeLeft > 0) {
//     requestAnimationFrame(frame);
//   }
// }());

// init();