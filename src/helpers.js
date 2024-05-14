const handleActiveSelection = (e) => {
  const allBtn = document.querySelector(".all-coffee")
  const filterBtn = document.querySelector(".filtered-coffee")

  if (allBtn.classList && allBtn.classList.contains('active') && e.target === filterBtn) {
    allBtn.classList.remove('active')
    filterBtn.classList.add('active')
  } else if (filterBtn.classList && filterBtn.classList.contains('active') && e.target === allBtn) {
    filterBtn.classList.remove('active')
    allBtn.classList.add('active')
  }
}

export {
  handleActiveSelection
}