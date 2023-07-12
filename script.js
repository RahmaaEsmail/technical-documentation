const copyIcon = document.querySelectorAll('.copy-icon');
copyIcon.forEach(ele => {
  ele.addEventListener('click', () => {
    const code = ele.closest('.main-section').querySelector('.code')
    navigator.clipboard.writeText(code.innerHTML)
    addCopyTooltip(ele)
  })
})

const addCopyTooltip = (ele) => {
  const copyBox = ele.closest('.copy');
  copyBox.dataset.content = "copied"

  setTimeout(() => {
    copyBox.dataset.content = "copy to clipboard"
  }, 1000)
}