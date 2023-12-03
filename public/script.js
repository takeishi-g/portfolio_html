const pickup = document.querySelector("#pickup")
const pickupArticle = pickup.children

const addClassFadeIn = () => {
  for(article of pickupArticle) {
    article.classList.add("fadeIn")
  }  
  console.log(pickupArticle)
}

const fadeIN = () => {
  setTimeout(() => {
    addClassFadeIn()
  },3000)
}

// setTimeout(fadeIN, 3000)


fadeIN()