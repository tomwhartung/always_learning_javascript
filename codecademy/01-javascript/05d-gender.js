

var gender = prompt( 'What is your gender?' ).toLowerCase();

switch( gender ) {
    case 'boy':
    case 'm':
    case 'man':
    case 'male':
        console.log( 'Yo dude!' );
        break;
    case 'f':
    case 'femme':
    case 'female':
    case 'g':
    case 'girl':
    case 'gurrrl':
        console.log( 'Hey girlfriend <3 !' );
        break;
    default:
        console.log( "'Sup my friend!?!" );
        break;
}
