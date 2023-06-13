const vegetables = ['Cauliflower', 'Brinjal', 'Gourd', 'Potato', 'Bitter gourd'];


const Veg = () => {
    return (<ul>{vegetables.map((veg, index) => {
        return (<li key={index}>{veg}</li>);
    })}</ul>);
}

export default Veg;