import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputField from '../InputField';


const EventForm = ({manager, create}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            location: '',
            description: '',
            price: '',
            available_places: '',
            start_at: '',
            end_at: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Au moins Trois(3) caractères !')
                .required('ce champs est requis !'),
            location: Yup.string()
                .min(3, 'Au moins Trois(3) caractères !')
                .required('Veuillez indiquer le ieu de l\'evenement !'),
            description: Yup.string()
                .min(10, 'Au moins 10 caractères!')
                .required('ce champ est requis !'),
            price: Yup.number()
                .required('ce champ est requis !'),
            available_places: Yup.number()
                .required('ce champ est requis !'),
            start_at: Yup.date()
                .required('ce champ est requis !'),
            end_at: Yup.date()
                .required('ce champ est requis !'),
        }),
        onSubmit: (values) => {
            values.organizer_id = manager._id
            create(values);
        }
      })
    return (
        <div className="form-wrapper">
            <form onSubmit={formik.handleSubmit}>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom de votre event"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Lieu de déroulement de votre event"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <div className="text-danger">{formik.errors.location}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <textarea 
                        name="description" 
                        id="description"
                        className="form-control" 
                        rows="4" 
                        placeholder="La description de votre event"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    >
                    </textarea>
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-danger">{formik.errors.description}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Prix du pass en Frcfa. NB: Entrez 0 si le pass est gratuit"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-danger">{formik.errors.price}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="text"
                        name="available_places"
                        id="available_places"
                        placeholder="Nombre de place disponible"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.available_places}
                    />
                    {formik.touched.available_places && formik.errors.available_places ? (
                        <div className="text-danger">{formik.errors.available_places}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="datetime-local"
                        name="start_at"
                        id="start_at"
                        placeholder="Date et heure de début"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.start_at}
                    />
                    {formik.touched.start_at && formik.errors.start_at ? (
                        <div className="text-danger">{formik.errors.start_at}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <InputField
                        type="datetime-local"
                        name="end_at"
                        id="end_at"
                        placeholder="Date et heure de fin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.end_at}
                    />
                    {formik.touched.end_at && formik.errors.end_at ? (
                        <div className="text-danger">{formik.errors.end_at}</div>
                    ) : null}
                </div>
                <div className="col-md-12 mb-2">
                    <button type="submit" className="btn btn-primary btn-block">Créer l'évenement</button>
                </div>
            </form>
        </div>
    )
}

export default EventForm;
