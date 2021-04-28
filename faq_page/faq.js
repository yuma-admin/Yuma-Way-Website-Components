const items = document.querySelectorAll(".accordion button");
const categories = document.querySelectorAll(".faq button");
const mobileCategories = document.querySelectorAll(".faqDropDownContent button");


function openDropDown() {
  const target = document.getElementById("faqMobileDropDown")
  target.classList.add("showMobileFaq");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("faqDropDownContent");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showMobileFaq')) {
        openDropdown.classList.remove('showMobileFaq');
      }
    }
  }
}


// element as first argument
var cannabisGrid = document.querySelector('.cannabisGrid');
var cannabisColc = new Colcade( cannabisGrid, {
  columns: '.cannabis-grid-col',
  items: '.cannabis-accordion-item'
});

var dispensaryGrid = document.querySelector('.dispensaryGrid');
var dispensaryColc = new Colcade( dispensaryGrid, {
  columns: '.dispensary-grid-col',
  items: '.dispensary-accordion-item'
});

var consumptionGrid = document.querySelector('.consumptionGrid');
var consumptionColc = new Colcade( consumptionGrid, {
  columns: '.consumption-grid-col',
  items: '.consumption-accordion-item'
});

var ordersGrid = document.querySelector('.ordersGrid');
var ordersColc = new Colcade( ordersGrid, {
  columns: '.orders-grid-col',
  items: '.orders-accordion-item'
});

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  if (itemToggle) {
    if(this.getAttribute('aria-expanded') === 'false'){
      this.setAttribute('aria-expanded', 'true');
    }
    else{
      this.setAttribute('aria-expanded', 'false');
      
    }
    
  }
}

function toggleCategory() {
    
    for (i = 0; i < categories.length; i++) {
        categories[i].setAttribute('aria-expanded', 'false');
        let targetCategory= categories[i].id.replace('-button','')
        let removeTargetSection = document.getElementById(targetCategory)
        if (removeTargetSection.classList.contains('shownContent')){
            let targetGrid = removeTargetSection.childNodes[1]
            targetGrid.classList.remove('showGrid')
            removeTargetSection.classList.remove('shownContent')
        }

    }
    const categoryToggle = this.getAttribute('aria-expanded');
    if (categoryToggle === 'false') {
      this.setAttribute('aria-expanded', 'true');
      const targetId = this.id.replace('-button','')
      const targetSection = document.getElementById(targetId)
      targetSection.classList.add('shownContent');
      const targetGrid = targetSection.childNodes[1]
      targetGrid.classList.add('showGrid')
    }
  }

  function toggleCategoryMobile() {
    
    for (i = 0; i < mobileCategories.length; i++) {
      mobileCategories[i].setAttribute('aria-expanded', 'false');
        let targetCategory= mobileCategories[i].id.replace('-button','')
        let removeTargetSection = document.getElementById(targetCategory)
        if (removeTargetSection.classList.contains('shownContent')){
            let targetGrid = removeTargetSection.childNodes[1]
            targetGrid.classList.remove('showGrid')
            removeTargetSection.classList.remove('shownContent')
        }
    }
    const categoryToggle = this.getAttribute('aria-expanded');
    if (categoryToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
      const targetId = this.id.replace('-button','')
      const targetSection = document.getElementById(targetId)
      // document.getElementsByClassName('dropBtn')[0].innerText=targetId
      document.getElementsByClassName('dropBtn')[0].innerText=this.innerText
      targetSection.classList.add('shownContent');
      const targetGrid = targetSection.childNodes[1]
      targetGrid.classList.add('showGrid')
    }
  }

items.forEach(item => item.addEventListener('click', toggleAccordion));
categories.forEach(category => category.addEventListener('click', toggleCategory));
mobileCategories.forEach(categories => categories.addEventListener('click', toggleCategoryMobile));

