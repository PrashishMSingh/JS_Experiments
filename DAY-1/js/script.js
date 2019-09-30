let stars = ''
for(var i = 5; i > 0; i--){
  for( var j = 0; j < i; j++){
    stars = stars.concat("*")
  }
  stars = stars.concat('\n')
}
console.log(stars)
