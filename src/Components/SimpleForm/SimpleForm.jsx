

const SimpleForm = () => {
    return (
        <div className="text-center mt-12">
            <form>
                <input className="mb-6" type="text" />
                <br />
                <input className="bg-blue-300 px-2 py-1 text-white" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;