function declareWinner(fighter1, fighter2, firstAttacker) {
  //return "Write your code here";
  while( fighter2['health'] > 0 && fighter1['health'] > 0){
    if(firstAttacker === fighter1['name']){
      firstAttacker = fighter2['name']
      fighter2['health'] = fighter2['health'] - fighter1['damagePerAttack']
    } else {
      firstAttacker = fighter1['name']
      fighter1['health'] = fighter1['health'] - fighter2['damagePerAttack']
    }
  }
  return fighter1['health'] <= 0 ? fighter2['name'] : fighter1['name']
}