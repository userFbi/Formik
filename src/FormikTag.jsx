import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const FormikTag = () => {

    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm()
    }


    return (
        <div>
            <Formik
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="name"></Field> <br /><br />
                    <Field name="surname"></Field> <br /><br />
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormikTag
