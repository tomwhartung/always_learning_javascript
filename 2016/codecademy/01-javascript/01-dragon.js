
 //
// Declare variables:
//
var slaying = true;
var youHit = Math.floor( Math.random() * 2 );
var damageThisRound = Math.floor( (Math.random() * 5) + 1 );
var totalDamage = 0;

while( slaying ) {
    if( youHit ) {
        console.log( 'Congrats: you hit the dragon!' );
        slaying = false;
        totalDamage += damageThisRound;
        if ( totalDamage >= 4 ) {
            console.log( 'Double congrats: the dragon is dead!' );
        } else {
            youHit = Math.floor( Math.random() * 2 );
        }
    } else {
        console.log( 'Oh man sorry, but the dragon got you!' );
        slaying = false;
    }
    
}

