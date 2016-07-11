

var name = prompt( 'What is your name?' );
var gender = prompt( 'What is your gender? (m/f/?)' ).toLowerCase();
var youngOrOld = prompt( 'Are you young or old? (y/o/?)' ).toLowerCase();
var likeMusic = prompt( 'Do you like music? (y/n/?)' ).toLowerCase();

switch( gender ) {
    case 'm':
        if( youngOrOld === 'y' && likeMusic == 'y' ) {
            console.log( 'Jam out dude!' );
        } else {
            console.log( 'Keep it real dude!' );
        }
        break;
    case 'f':
        if( youngOrOld === 'y' || likeMusic == 'y' ) {
            console.log( '<3 you girlfriend <3 !!' );
        } else {
            console.log( 'Keep it real girlfriend!' );
        }
        break;
    default:
        console.log( "'Sup my friend!?!" );
        break;
}
