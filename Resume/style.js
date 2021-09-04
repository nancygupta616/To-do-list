
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(var i =0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
            console.log(targetSection);

        interval = setInterval(function() {
            scrollVertically(targetSection);

        }, 20);
    });

        }

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}



// var progressBars = document.querySelectorAll(".skill-progress > div");
// // var skillsContainer = document.getElementById('skills-container');
// window.addEventListener('scroll' , checkScroll);

//  function initialiseBars() {
//        for(let bar of progressBars) {
//           bar.style.width = 0 + '%';
//      }
//  }

//  initialiseBars();


//   function fillBars() {

//      for(let bar of progressBars) {
//          let targetWidth = bar.getAttribute('data-bar-width');
//          let currentWidth = 0;         
//          let interval = setInterval(function () {
//              if(currentWidth > targetWidth) {
//                  clearInterval(interval);
//                  return;

//              }
//              currentWidth++;
//              bar.style.width = currentWidth + '%';
//          }, 3);

//      }

//  }

var progressBars = document.querySelectorAll(".skill-progress > div");
window.addEventListener('scroll' , checkScroll);

 function initialiseBar(bar) {
       bar.setAttribute("data-visited" , false);
       bar.style.width = 0 + '%';
  }


for(var bar of progressBars) {
initialiseBar(bar);
}

 function fillBar(bar) {
    let currentWidth = 0; 
    let targetWidth = bar.getAttribute('data-bar-width');
    let interval = setInterval(function () {
        if(currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 3);
        
 }

//  This function uses a for loop for individual progress bars.
function checkScroll() {

   for(let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if ((bar.getAttribute("data-visited") == "false") &&
       (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
        bar.setAttribute("data-visited", true);
        fillBar(bar);
     } else if (barCoordinates.top > window.innerHeight) {
         bar.setAttribute("data-visited", false);
        initialiseBar(bar);
    }
}

}




