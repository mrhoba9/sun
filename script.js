// Initialize AOS
AOS.init({
	once: true,
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.classList.remove("active");
	});
});

// Header Scroll Effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

// Hero Background Image Slider
const heroBg = document.querySelector(".hero-bg");
const images = heroBg.querySelectorAll("img");
let currentImage = 0;

function changeBackground() {
	images[currentImage].classList.remove("active");
	currentImage = (currentImage + 1) % images.length;
	images[currentImage].classList.add("active");
}

setInterval(changeBackground, 3000);

// Back to Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		backToTop.classList.add("show");
	} else {
		backToTop.classList.remove("show");
	}
});
// Back to Top Button Click Event
backToTop.addEventListener("click", (e) => {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// Smooth scroll for internal anchor links (e.g., menu links)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	});
});

// Initialize tooltips if you have any elements with data-tooltip attribute
document.querySelectorAll("[data-tooltip]").forEach((el) => {
	el.addEventListener("mouseenter", () => {
		const tooltip = document.createElement("div");
		tooltip.className = "tooltip";
		tooltip.textContent = el.getAttribute("data-tooltip");
		document.body.appendChild(tooltip);
		const rect = el.getBoundingClientRect();
		tooltip.style.left = rect.left + window.pageXOffset + "px";
		tooltip.style.top =
			rect.top + window.pageYOffset - tooltip.offsetHeight + "px";
		el._tooltip = tooltip;
	});
	el.addEventListener("mouseleave", () => {
		if (el._tooltip) {
			document.body.removeChild(el._tooltip);
			el._tooltip = null;
		}
	});
});

// Lazy-load images (if you have images with data-src attribute)
const lazyImages = document.querySelectorAll("img[data-src]");
const lazyLoad = (target) => {
	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				observer.disconnect();
			}
		});
	});
	io.observe(target);
};
lazyImages.forEach(lazyLoad);





// loading
setTimeout(function () {
	document.querySelector(".juice-loader-overlay").style.opacity = "0";
	setTimeout(function () {
		document.querySelector(".juice-loader-overlay").remove();
	}, 500);
}, 3000);
if (typeof FontAwesome === "undefined") {
	const faLink = document.createElement("link");
	faLink.rel = "stylesheet";
	faLink.href =
		"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
	document.head.appendChild(faLink);
}
if (!document.querySelector('link[href*="Fredoka+One"]')) {
	const fontLink = document.createElement("link");
	fontLink.href =
		"https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap";
	fontLink.rel = "stylesheet";
	document.head.appendChild(fontLink);
}
