import React, {useContext, useEffect} from 'react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import InputField from '../../../../components/InputField';
import UserAuthContext from '../../../../context/Auth/UserAuth/UserAuthContext';
import AlertContext from '../../../../context/Alert/AlertContext';
import Alert from '../../../../components/Alert';
import ROUTE from '../../../../Route';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
import './style.css'

function UserRegister(props) {
    const userAuthContext = useContext(UserAuthContext)
    const alertContext = useContext(AlertContext)
    const {userRegister, error, clearError, userIsAuth} = userAuthContext;
    const {setAlert} = alertContext;

    useEffect(() => {
        if(userIsAuth){
            props.history.push(ROUTE.EVENTS);
        }

        if(error){
            setAlert(error, 'danger')
            clearError()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, userIsAuth, props.history])

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Au moins Trois(3) caractères !')
                .max(50, 'Quinze(15) caratères au maximum !')
                .required('ce champs est requis !'),
            lastName: Yup.string()
                .min(3, 'Au moins Trois(3) caractères !')
                .max(50, 'Quinze(15) caratères au maximum !')
                .required('ce champs est requis !'),
            email: Yup.string()
                .email('Email invalide')
                .required('ce champ est requis !'),
            phone: Yup.string()
                .min(10, 'Le numéro doit contenir 10 chiffres !')
                .matches(phoneRegex, "Numéro invalide")
                .required('ce champ est requis !'),
            address: Yup.string()
                .required('ce champ est requis !'),
            password: Yup.string()
                .min(6, 'Votre mot de passe doit contenir au moins six(6) caractères !')
                .required('ce champs est requis'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Les deux(2) mot de passe doivent être identique!")
                .required('ce champs est requis')
        }),
        onSubmit: (values) => {
            userRegister(values);
        }
      })


    return (
        <div>
            <Navbar/>
            <div className="form">
                <h3 className="text-dark">
                    Inscription utilisateur
                </h3>
                <div className="form-wrapper">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="col-md-12">
                            <Alert/>
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Entrer votre nom"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="error">{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Entrer votre prénoms"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="error">{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Entrer votre adresse email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Entrer votre numéro de téléphone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="error">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Entrer votre adresse"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address ? (
                                <div className="error">{formik.errors.address}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Entrer un mot de passe"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="error">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <InputField
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Entrer à nouveau le mot de passe"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="error">{formik.errors.confirmPassword}</div>
                            ) : null}
                        </div>
                        <div className="col-md-12 mb-2">
                            <button type="submit" className="btn btn-primary btn-block">s'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserRegister;
