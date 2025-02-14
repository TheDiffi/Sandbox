const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const book = document.querySelector(".book")
const papers = document.querySelectorAll(".paper")

let currentPage = 0
const totalPages = papers.length

function updateZIndex(paper, index) {
  if (index < currentPage) {
    paper.classList.add("flipped")
    paper.style.zIndex = index - 3 /* totalPages - currentPage- (currentPage - index) + 2 */
  }
  else {
    paper.classList.remove("flipped")
    paper.style.zIndex = totalPages - index - 3
  }
}
function updateBook() {
  papers.forEach((paper, index) => {
    !paper.classList.contains("transitioning") && updateZIndex(paper, index)
  })

  if (currentPage === 0) {
    book.classList.remove("open", "closed")
  } else if (currentPage === totalPages) {
    book.classList.remove("open")
    book.classList.add("closed")
  } else {
    book.classList.add("open")
    book.classList.remove("closed")
  }

  prevBtn.disabled = currentPage === 0
  nextBtn.disabled = currentPage === totalPages
}

function goNextPage() {
  if (currentPage < totalPages) {
    const index = currentPage;

    const paper = papers[currentPage]
    const paperPrev = papers[currentPage - 1]

    paper.style.zIndex = totalPages + 1
    if (paperPrev?.style?.zIndex) paperPrev.style.zIndex = totalPages - 1

    paper.classList.add("transitioning")
    if (paperPrev) paperPrev.classList.add("transitioning")

    currentPage++
    setTimeout(() => {
      paper.classList.add("flipped")
      updateBook()

      setTimeout(() => {
        paper.classList.remove("transitioning")
        paperPrev.classList.remove("transitioning")
        updateZIndex(paper, index)
        updateZIndex(paperPrev, index - 1)
      }, 1000) // Half of the transition time
    }, 50) // Small delay to ensure the z-index change is applied before the flip
  }
}

function goPrevPage() {
  if (currentPage > 0) {
    currentPage--
    const index = currentPage;
    const paper = papers[currentPage]
    const paperNext = papers[currentPage + 1]

    paper.style.zIndex = totalPages + 1
    if (paperNext) paperNext.style.zIndex = totalPages - 1

    paper.classList.add("transitioning")
    if (paperNext) paperNext.classList.add("transitioning")

    setTimeout(() => {
      paper.classList.remove("flipped")
      updateBook()

      setTimeout(() => {
        paper.classList.remove("transitioning")
        paperNext.classList.remove("transitioning")
        updateZIndex(paper, index)
        updateZIndex(paperNext, index + 1)
      }, 1000) // Half of the transition time
    }, 50) // Small delay to ensure the z-index change is applied before the flip
  }
}

nextBtn.addEventListener("click", goNextPage)
prevBtn.addEventListener("click", goPrevPage)

// Initialize the book
updateBook()

