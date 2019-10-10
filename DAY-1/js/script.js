let stars = ''
for(var i = 5; i > 0; i--){
  for( var j = 0; j < i; j++){
    stars = stars.concat("*")
  }
  stars = stars.concat('\n')
}
console.log(stars)


var personal_bio = {
  first_name: "Prashish",
  last_name: "Singh",
  gender: "Male",
  email: "PrashishMSingh@gmail.com",
  address: {
    permanent: {
      city : "Kathmandu",
      street : "Chagal",
      house_no : 01
    },
    temporary: {
      city : "Kathmandu",
      street : "Chagal",
      house_no : 01
    }
  },
  contact_no:[
    {
      type: "lan-line",
      number: "01-4289078"
    },
    {
      type: "lan-line",
      number: "01-4212378"
    },
    {
      type: "mobile",
      number: "01-9840055773"
    }
  ],
  education:{
    school: {
      name: "Gyanodaya Bal Bartika",
      graduated_Year: 2009
    },
    college: {
      name: "Prime College",
      major: "Management",
      graudated_year: 2011
    },
    Bacholor_Degree:{
      name: "Islington College",
      major: "BSC IT",
      graduated_year: 2019
    }
  }

}

function render(){
  x++;
  y++;
  window.requestAnimationFrame(render)

}
