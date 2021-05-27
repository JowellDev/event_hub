import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputField from '../InputField';

const UpdatePasswordForm = ({resetPassword, id}) => {

    const formik = useFormik({
        initialValues: {
            old_password: '',
            new_password:'',
            confirm_password: ''
        },
        validationSchema: Yup.object({
            old_password: Yup.string()
                .min(6, 'Votre mot de passe doit contenir au moins six(6) caractères !')
                .required('ce champs est requis'),
            new_password: Yup.string()
                .min(6, 'Votre mot de passe doit contenir au moins six(6) caractères !')
                .required('ce champs est requis'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("new_password")], "Les deux(2) mot de passe doivent être identique!")
                .required('ce champs est requis')
        }),
        onSubmit: (values) => {
            resetPassword(id, values)
        }
      })

    return (
        <div className="form-wrapper">
            <h4 className="text-muted text-center mb-2">Modification de mot de passe</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="password"
                        name="old_password"
                        id="old_password"
                        placeholder="Entrer l'ancien mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.old_password}
                    />
                    {formik.touched.old_password && formik.errors.old_password ? (
                        <div className="text-danger">{formik.errors.old_password}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="password"
                        name="new_password"
                        id="new_password"
                        placeholder="Entrer le nouveau mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.new_password}
                    />
                    {formik.touched.new_password && formik.errors.new_password ? (
                        <div className="text-danger">{formik.errors.new_password}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="confirmer le mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirm_password}
                    />
                    {formik.touched.confirm_password && formik.errors.confirm_password ? (
                        <div className="text-danger">{formik.errors.confirm_password}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <button type="submit" className="btn btn-success">modifier le mot de passe</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePasswordForm;
