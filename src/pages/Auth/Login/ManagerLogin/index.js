import React, {useContext, useEffect} from 'react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import InputField from '../../../../components/InputField';
import ManagerAuthContext from '../../../../context/Auth/ManagerAuth/ManagerAuthContext';
import AlertContext from '../../../../context/Alert/AlertContext';
import Alert from '../../../../components/Alert';
import ROUTE from '../../../../Route';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
import './style.css'

function ManagerLogin(props) {
    const managerAuthContext = useContext(ManagerAuthContext);
    const alertContext = useContext(AlertContext)
    const {loginManager, managerIsAuth, error, clearError} = managerAuthContext;
    const {setAlert} = alertContext;


    useEffect(() => {
        if(managerIsAuth){
            props.history.push(ROUTE.HOME)
        }

        if(error){
            setAlert(error, 'danger')
            clearError()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, managerIsAuth, props.history])


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email invalide')
                .required('ce champ est requis !'),
            password: Yup.string()
                .min(6, 'Votre mot de passe doit contenir au moins six(6) caractères !')
                .required('ce champs est requis'),
        }),
        onSubmit: (values) => {
            loginManager(values)
        },
      });


    return (
        <div>
            <Navbar/>
            <div className="manager-form">
                <h3 className="text-dark">
                    Connexion compte organisateur
                </h3>
                <div className="form-wrapper">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="col-md-12">
                            <Alert/>
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
                            <button type="submit" className="btn btn-primary btn-block">se connecter</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ManagerLogin;
