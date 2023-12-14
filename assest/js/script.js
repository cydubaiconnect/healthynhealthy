
window.addEventListener('scroll', function() {
    var rotation = window.scrollY / 15; // Adjust the rotation speed
    document.getElementById('rotatingImage').style.transform = 'rotate(' + rotation + 'deg)';
    document.querySelector('.shallot').style.transform = 'rotate(' + rotation + 'deg)';
    document.getElementById('rotatingImage').style.transformOrigin = 'center';
  });

  
  window.addEventListener('scroll', function() {
    let rideElement = document.getElementById('ride');
    let scrollX = window.scrollY;
    let translationX = scrollY / 12; 
    let direction = scrollX > this.scrollX ? .5 : -.5;
    let translateValue = direction * translationX;
    rideElement.style.transform = 'translateX(' + translateValue + 'px)';
  });

  const initSlider = () =>{
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    
    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide" ? -340 : 340;
            const scrollAmount = imageList.clientwidth = direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth" });
        });
    });
}





let currentSlide = 0;
const totalSlides = document.querySelectorAll('.image-list > div').length;
const slideWidth = 316;

function showSlide(index) {
  const list = document.querySelector('.image-list');
  list.style.transform = `translateX(${-slideWidth * index}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % (totalSlides);;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % (totalSlides);;
  showSlide(currentSlide);
}

const imageList = document.querySelector('.image-list');
const originalCards = Array.from(document.querySelectorAll('.image-list > div'));

// Duplicate all cards for continuous loop
for (let i = 0; i < totalSlides; i++) {
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    imageList.appendChild(clone);
  });
}

// Add transition for smooth sliding
imageList.style.transition = 'transform 0.5s ease';

// Reset position when reaching the duplicated set of cards
imageList.addEventListener('transitionend', () => {
  if (currentSlide >= totalSlides ) {
    currentSlide = 0;
    imageList.style.transition = 'none'; // Remove transition for instant reset
    showSlide(currentSlide);
    setTimeout(() => {
      imageList.style.transition = 'transform 0.5s ease'; // Restore transition
    });
  }
});

setInterval(nextSlide, 5000);





document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.image-list > div');

    cards.forEach(card => {
      card.addEventListener('mouseover', function () {
        this.querySelector('.image-item').classList.add('scale');
      });

      card.addEventListener('mouseout', function () {
        this.querySelector('.image-item').classList.remove('scale');
      });
    });
  });



  

  document.addEventListener("DOMContentLoaded", function() {
    const gridElements = document.querySelectorAll('.grid1, .grid2, .grid3');

    gridElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            const mouseoverClass = element.classList[0].replace('grid', 'mousover');
            displayBlock(mouseoverClass);
        });

        element.addEventListener('mouseout', function() {
            const mouseoverClass = element.classList[0].replace('grid', 'mousover');
            hideElement(mouseoverClass);
        });
    });
});




function displayBlock(className) {
    const elements = document.querySelectorAll('.' + className);

    elements.forEach(function(element) {
        element.style.transform = 'scale(1)';
        // Add transition effect
        element.style.transition = '.5s ease-in-out';
       
    });
}

function hideElement(className) {
    const elements = document.querySelectorAll('.' + className);

    elements.forEach(function(element) {
       
       
        element.style.transform = 'scale(0)';
    });
}






document.addEventListener('DOMContentLoaded', () => {
    const section8 = document.querySelector('.section8');
    const percent = document.querySelector('.percent');

    section8.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        percent.style.transition = 'transform 0.8s ease'; // Adjust transition duration
        percent.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    section8.addEventListener('mouseout', () => {
        // Reset to the original position with a slow transition effect
        percent.style.transition = 'transform 0.8s ease'; // Adjust transition duration
        percent.style.transform = 'translate(0, 0)';
    });
});




document.addEventListener("DOMContentLoaded", function () {
    let pizza = document.querySelector('.pizza');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        // Scrolling down, move the pizza down
        pizza.style.transform = 'translateY(10%)';
        
      } else {
       
        // Scrolling up, move the pizza up
        pizza.style.transform = 'translateY(-100%)';

        
      }
    });
  });



  //close cart function closeCart() {
    let cartClose = document.querySelector('.Shopping-cart');

    function closeCart() {
      console.log('Closing cart');
      cartClose.style.display = 'none';
    }
    
    function openCart() {
      console.log('Opening cart');
      cartClose.style.display = 'block';
    }
    
   
    //userIcon Login

let Log = document.querySelector('.login');
function userLogin() {
  Log.classList.toggle('closeLogin');

}





//searchbar
let head = document.querySelector('header');
let research = document.querySelector('.searchBar');
function searchBox() {
  head.style.display = "none";
  research.style.display = "flex";
  
}

  function closeSearchBox() {
    research.style.display = "none";
    head.style.display = "flex";
  }



  

  let bar = document.querySelector('.sideleft');
  function showActive(){
    bar.classList.toggle('sideshow');
    bar.classList.remove('closeBarMenu');
  }

  function closebarMenu() {
    bar.classList.toggle('closeBarMenu');
    bar.classList.remove('sideshow');
    
  }