function Item({name,isPacked}){
    if(isPacked){
        return<li className="item">{name}.Packed</li>;
    }
    return<li className="item">{name}</li>;
}
export default function PackingList(){
    return(
        <section>
            <h1>Kusum's Packing list</h1>
            <ul>
                <Item isPacked={true}
                name="Collar Blazor"
                />
                <Item isPacked={true}
                name="Hat with a golden leaf"
                />
                <Item isPacked={false}
                name="High Heels"
                />
                <Item isPacked={true}
                name="Golden Brown Gown"
                />
            </ul>
        </section>
    );
}