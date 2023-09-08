import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterContext } from "../contexts/RegisterProvider";
import "../assets/styles/Register.css";


const fieldsInfo = [
    {
        id: 1,
        type: "text",
        name: "username",
        pattern: "^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{4,10}$",
        placeholder: "Username",
        error: "Username should be 4-10 characters and numbers!"
    },
    {
        id: 2,
        type: "text",
        name: "email",
        pattern: "^[A-Za-z0-9]+[@][a-z]+[.][a-z]{2,3}$",
        placeholder: "Email Address",
        error: "Invalid email address!"
    },
    {
        id: 3,
        type: "password",
        name: "password",
        pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%])[A-Za-z0-9!@#$%]{6,16}$",
        placeholder: "Password",
        error: "Password should be 6-16 characters, numbers and special characters!"
    },
    {
        id: 4,
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm Password",
        error: "Password does not match!"
    }
];

const Register = () => {

    const {setIsRegistered, setUserData} = useContext(RegisterContext);
    const navigate = useNavigate();
    const {register, handleSubmit, getValues, formState: {errors}} = useForm();

    const onSubmit = () => {
        setIsRegistered(1);
        setUserData(getValues());
        navigate("/", {replace: true});
    };

    return (
        <div id="container">
            <main id="register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register</h1>
                    {
                        fieldsInfo.map(fieldInfo =>
                            <Field
                                key={fieldInfo.id}
                                fieldInfo={fieldInfo}
                                register={register}
                                getValues={getValues}
                                errors={errors}
                            />
                        )
                    }
                    <button
                        className={Object.keys(errors).length && "disable-btn"}
                        type="submit">
                        Sign Up
                    </button>
                </form>
            </main>
        </div>
    );
};


const Field = ({fieldInfo, register, getValues, errors}) => {

    const {type, name, pattern, placeholder, error} = fieldInfo;

    return (
        <div className="field">
            <input
                type={type}
                {...register(name, {
                    required: true,
                    pattern: new RegExp(pattern),
                    validate: value => {
                        if (name === "confirmPassword") {
                            const {password} = getValues();
                            return password === value;
                        }
                    }
                })}
                placeholder={placeholder}
                style={{border: errors[name] && "1px solid var(--red)"}}
            />
            <span className="error">
                {
                    (errors[name]?.type === "required" && `${placeholder} is required!`) ||
                    (errors[name] && error)
                }
            </span>
        </div>
    );
};


export default Register;