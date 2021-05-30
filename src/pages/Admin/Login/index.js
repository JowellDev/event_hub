import React, {useContext, useEffect} from 'react';
import InputField from '../../../components/InputField';
import AdminContext from '../../../context/Auth/AdminAuth/AdminContext';
import ManagerAuthContext from '../../../context/Auth/ManagerAuth/ManagerAuthContext';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import AlertContext from '../../../context/Alert/AlertContext';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';
import { useFormik } from 'formik';
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
    const {admin, adminIsAuth, error, clearError, loginAdmin} = adminContext;


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
            <h3>Login</h3>
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
                        <div className="text-danger">{formik.errors.email}</div>
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
                        <div className="text-danger">{formik.errors.password}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <button type="submit" className="btn btn-primary btn-block">se connecter</button>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;
