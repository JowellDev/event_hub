import React, {useContext} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputField from '../InputField';
import ManagerAuthContext from '../../context/Auth/ManagerAuth/ManagerAuthContext';

const UpdateEmailForm = () => {
    const managerContext = useContext(ManagerAuthContext);
    const {manager, updateInfo} = managerContext;

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const formik = useFormik({
        initialValues: {
            name: manager && manager.name,
            contacts: manager && manager.contacts,
            email: manager && manager.email,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Au moins trois(3) caractères ! '),
            email: Yup.string()
                .email('Email invalide'),
            contacts: Yup.string()
                .min(10, 'Le numéro doit contenir 10 chiffres !')
                .matches(phoneRegex, "Numéro invalide")
                .required('ce champ est requis !')
        }),
        onSubmit: (values) => {
            if(manager._id){
                updateInfo(manager._id, values)
            }
        }
      })
    return (
        <div className="form-wrapper">
            <h4 className="text-center text-muted">Modification Informations générales</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="col-md-12 mb-2">
                    <label className="text-muted" htmlFor="name">
                        Nom 
                    </label>
                    <InputField
                        type="text"
                        name="name"
                        id="name"
                        placeholder=""
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <label className="text-muted" htmlFor="name">
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
                    <label className="text-muted" htmlFor="name">
                        Contacts
                    </label>
                    <InputField
                        type="text"
                        name="contacts"
                        id="contacts"
                        placeholder=""
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

export default UpdateEmailForm;
