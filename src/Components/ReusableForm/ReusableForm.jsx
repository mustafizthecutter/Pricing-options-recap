
import PropTypes from 'prop-types';

const ReusableForm = ({ formTitle, submitBtnText = 'Submit', handleSubmit, children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            password: e.target.password.value,
            email: e.target.email.value,
        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
            <h2 className="ml-12 text-4xl">{formTitle}</h2>
            <form onSubmit={handleLocalSubmit} className="space-y-2 ml-12 ">
                <input type="text" name="name" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value={submitBtnText} />

            </form>
        </div>

    );
};
ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.function,
    children: PropTypes.object
};

export default ReusableForm;