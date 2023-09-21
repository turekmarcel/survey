const btn = document.querySelectorAll('button');
const label = document.querySelectorAll('label');
const ul = document.getElementById('last')
// const genderCheck1 = document.getElementById('genderChoice1');
// const genderCheck2 = document.getElementById('genderChoice2');
// const genderSection = document.getElementById('req')
// let step = 8;

const setStep = step => {
	document.querySelectorAll(".step-content").forEach(element => element.style.display = "none");
	document.querySelector("[data-step='" + step + "']").style.display = "block";
	console.log("dziala")
};
document.querySelectorAll("[data-set-step]").forEach(element => {
	element.onclick = event => {
		setStep(parseInt(element.dataset.setStep));
	};
});




label.forEach(function (i) {
	i.addEventListener('click', function (){

		console.log(i)
		
	})
})








// btn.forEach(function (i) {
// 	i.addEventListener('click', function () {
// 		if (genderCheck1.checked || genderCheck2.checked === true) {
// 			document.querySelectorAll(".step-content").forEach(element => element.style.display = "none")
// 			step++
// 			document.querySelector("[data-step='" + step + "']").style.display = "block";

// 		} else{
// 			genderSection.style.transform = 'scale(1)';
// 			console.log(i)
// 		}
// 	});
// 	// genderCheck1.addEventListener('click', function(){
// 	// 	genderSection.style.transform = 'scale(0)';
// 	// 	console.log('test')
// 	// })
// 	// genderCheck2.addEventListener('click', function(){
// 	// 	genderSection.style.transform = 'scale(0)';
// 	// 	console.log('test')
// 	})
// });