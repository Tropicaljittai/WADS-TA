const adviceNumber = document.querySelector('header')
const advice = document.querySelector('.advice')
const button = document.querySelector('.button')

async function generate() {
  let quote = await fetch('https://api.adviceslip.com/advice')
  let data = await quote.json()
  return data
}
button.addEventListener('click', async () => {
  let data = await generate()
  let quote = data.slip
  adviceNumber.textContent = `ADVICE #${quote.id}`
  advice.textContent = quote.advice
  console.log(advice.textContent)
})
