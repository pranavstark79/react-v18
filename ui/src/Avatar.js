const Avatar = (props) => {
    console.log(props, props.name);
    const {img, name} = props;
    return (
        <>
        <h3>{name}</h3>
        <img src={img} className="avatar" alt="Heddy"></img>
        </>
    )
}


export default Avatar;