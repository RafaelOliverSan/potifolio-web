window.revelar = ScrollReveal({reset:true})

//efeito topo do site
revelar.reveal('.efeito-txt', {
  duration: 2000,
  distance: '90px',
  delay: 500
})

revelar.reveal('.efeito-headshot', {
  duration: 2000,
  distance: '90px',
 // rotate:{x:100, y:100, z:0}
})

//Efeito Projetos

revelar.reveal('.efeito-projeto1', {
  duration: 2000,
  distance: '90px',
  origin: 'left'
})

revelar.reveal('.efeito-projeto2', {
  duration: 2000,
  distance: '90px',
  delay:500,
  origin: 'left'
})

revelar.reveal('.efeito-projeto3', {
  duration: 2000,
  distance: '90px',
  delay:1000,
  origin: 'left'
})