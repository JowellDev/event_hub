import React, {useContext, useEffect} from 'react';
import InputField from '../../../components/InputField';
import Footer from '../../../components/Footer';
import AdminContext from '../../../context/Auth/AdminAuth/AdminContext';
import ManagerAuthContext from '../../../context/Auth/ManagerAuth/ManagerAuthContext';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import AlertContext from '../../../context/Alert/AlertContext';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';
import { useFormik } from 'formik';
import admin_svg from '../../../images/svg/admin.svg';
 import * as Yup from 'yup';
import './style.css'

const AdminLogin = (props) => {
    const adminContext = useContext(AdminContext);
    const managerAuthContext = useContext(ManagerAuthContext);
    const userAuthContext = useContext(UserAuthContext);
    const alertContext = useContext(AlertContext)
    const {managerIsAuth} = managerAuthContext;
    const {userIsAuth} = userAuthContext;
    const {setAlert} = alertContext;
    const {adminIsAuth, error, clearError, loginAdmin} = adminContext;


    useEffect(() => {
        if(adminIsAuth){
            props.history.push(ROUTE.ADMIN_DASH)
        }
        if(userIsAuth){
            props.history.push(ROUTE.EVENTS)
        }
        if(managerIsAuth){
            props.history.push(ROUTE.MANAGER_DASH)
        }

        if(error){
            setAlert(error, 'danger')
            clearError()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, adminIsAuth, props.history])


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
            loginAdmin(values)
        },
      });


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 img-left">
                        <div className="d-flex flex-row justify-content-center">
                            <img src={admin_svg} width="400" height="500" alt="admin_svg" />
                        </div>
                    </div>
                    <div className="col-md-6 formulaire min-vh-100 d-flex flex-column justify-content-between p-5">
                        <div className="text-center">
                            <h3 className="text-muted">CONNEXION ESPACE D'ADMINISTRATION</h3>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="col-md-12 mb-3">
                                <Alert/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <InputField
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Adresse email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="col-md-12 mb-3">
                                <InputField
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Mot de passe"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-danger">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="col-md-12 mb-3">
                                <button type="submit" className="btn btn-primary btn-block">se connecter</button>
                            </div>
                        </form>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;
