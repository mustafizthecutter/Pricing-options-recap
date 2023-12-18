

const PriceOption = ({ option }) => {
    const { id, facilities, name, price, duration } = option || {}
    return (
        <div className="bg-blue-500 text-white mx-8 p-8 rounded-lg ">
            <h2 className="text-center mb-4">
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h2 className="text-4xl text-center">{name}</h2>
        </div>
    );
};

export default PriceOption;