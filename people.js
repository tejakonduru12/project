const people=[
    'Creola Katherine Johnson:mathematician',
    'Salin Ali:Amithologist',
    'Marlo Jose Molina-Pasquel Henrique:chemist',
    'Percy Lavon Julian:chemist',
    'Subrahmanyan Chandrasekhar:'
];
export default function PplList(){
    const listItems=people.map(person=>
        <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
}