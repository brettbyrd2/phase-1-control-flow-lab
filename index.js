function scuberGreetingForFeet(feet){
  let greeting
  
  if (feet <= 400){
   return greeting = 'This one is on me!'
  
  }

  
else if (feet > 400 && feet < 2000){
  return greeting = 'That will be twenty bucks.'
}

else if (feet > 2000 && feet < 2500) {
 return greeting = 'I will gladly take your thirty bucks.'
}
 
else  (feet > 2500)
  return greeting = 'No can do.'
}
function ternaryCheckCity(city){
return city === 'NYC'?'Ok, sounds good.':'No go.'
}
function switchOnCharmFromTip(tip){
 switch(tip) {
  case 'generous' :
    return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
      default:
        return 'Bye.'
 } 
}