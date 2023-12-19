import useInputState from "../../Utilities/useInputState";


const HookForm = () => {
    // const emailState = useInputState('mustafiz1123@go.com')
    const [name, handleNameChange] = useInputState('hossain papa')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('hello there', name);
        // console.log(emailState.value);
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-2 ml-12 ">
            <input value={name} onChange={handleNameChange} type="text" name="name" />
            <br />
            <input type="password" name="password" id="" />
            <br />
            {/* <input {...emailState} type="email" name="email" id="" /> */}
            <br />
            <input type="submit" value="Submit" />

        </form>
    );
};

export default HookForm;