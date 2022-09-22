const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const markup = images
	.map(
		(image) =>
			`<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`
	)
	.join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", markup);

galleryRef.style.display = "flex";
galleryRef.style.gridGap = "10px";
galleryRef.style.listStyle = "none";

const li = document.querySelectorAll("li");
console.log(li);
li.forEach((elem) => {
	elem.style.border = "1px dashed tomato";
	elem.style.borderRadius = "10%";
});

const trueImages = document.querySelectorAll("img");
trueImages.forEach((trueImg) => {
	trueImg.style.width = "200px";
	trueImg.style.height = "100%";
	trueImg.style.borderRadius = "10%";
});
