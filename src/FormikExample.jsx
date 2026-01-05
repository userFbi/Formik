import { useFormik } from 'formik'
import React, { useState } from 'react'

const FormikExample = () => {

    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })

    const [list, setList] = useState([])


    const f = useFormik({
        initialValues: ini,
        onSubmit: (values) => {
            console.log(values);

            setList([...list, values])
            
            f.handleReset()
        }
    })


    return (
        <div>
            <form action="" onSubmit={f.handleSubmit}><br /><br />
                <input type="text" name="name" id="" value={f.values.name} onChange={f.handleChange} /> <br /><br />
                <input type="text" name="surname" id="" value={f.values.surname} onChange={f.handleChange} /> <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikExample


