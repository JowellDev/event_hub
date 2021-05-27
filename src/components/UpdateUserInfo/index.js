import React, {useContext} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputField from '../InputField';
import UserAuthContext from '../../context/Auth/UserAuth/UserAuthContext';

const UpdateUserInfo = () => {
    const userContext = useContext(UserAuthContext);
    const {user, updateInfo} = userContext;

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const formik = useFormik({
        initialValues: {
            firstname: user && user.firstname,
            lastname: user && user.lastname,
            contacts: user && user.contacts,
            email: user && user.email
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .min(3, 'Au moins trois(3) caractères ! ')
                .required('ce champ est requis !'),
            lastname: Yup.string()
                .min(3, 'Au moins trois(3) caractères ! ')
                .required('ce champ est requis !'),
            email: Yup.string()
                .email('Email invalide')
                .required('ce champ est requis !'),
            contacts: Yup.string()
                .min(10, 'Le numéro doit contenir 10 chiffres !')
                .matches(phoneRegex, "Numéro invalide")
                .required('ce champ est requis !')
        }),
        onSubmit: (values) => {
            if(user._id){
                updateInfo(user._id, values)
            }
        }
      })
    return (
        <div className="form-wrapper">
            <h4 className="text-center text-muted">Modification Informations générales</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="col-md-12 mb-2">
                    <label className="text-muted" htmlFor="firstname">
                        Nom 
                    </label>
                    <InputField
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Votre nom"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                        <div className="text-danger">{formik.errors.firstname}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <label className="text-muted" htmlFor="lastname">
                        Prenoms 
                    </label>
                    <InputField
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Votre prenoms"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                        <div className="text-danger">{formik.errors.lastname}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <label className="text-muted" htmlFor="email">
                        Email
                    </label>
                    <InputField
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Veuillez enter la nouvelle adresse Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <label className="text-muted" htmlFor="contacts">
                        Contacts
                    </label>
                    <InputField
                        type="text"
                        name="contacts"
                        id="contacts"
                        placeholder="votre contact"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contacts}
                    />
                    {formik.touched.contacts && formik.errors.contacts ? (
                        <div className="text-danger">{formik.errors.contacts}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <button type="submit" className="btn btn-success">Enregistrer les modifications</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUserInfo;
