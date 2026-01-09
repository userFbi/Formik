import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const FormikTag = () => {

    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })
    const [list, setList] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        

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

            {list.map((item, index) => {
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>sub1</td>
                    <td>sub2</td>
                    <td>sub3</td>
                    <td>Min</td>
                    <td>Max</td>
                    <td>Total</td>
                    <td>Per</td>
                </tr>
            })}
        </div>
    )
}

export default FormikTag
