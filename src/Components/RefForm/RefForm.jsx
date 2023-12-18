import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const [error, setError] = useState('')
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordRef.current.value.length < 6) {
            setError('please set valid Password')
        }
        else {
            setError('')
            console.log(passwordRef.current.value);
        }
    }
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    return (

        <div>
            <form onSubmit={handleSubmit} className="space-y-2 ml-12 ">
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>

        </div>

    );
};

export default RefForm;