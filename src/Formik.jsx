import { useFormik } from 'formik'
import React from 'react'

const Formik = () => {
    const tem = useFormik({
        name: "",
        surname: ""
    })
    return (
        <div>
            <form onSubmit={tem.handleSubmit}><br /><br />
                <input type="text" value={tem.values.name} onChange={tem.handleChange} /><br /><br />
                <input type="text" value={tem.values.surname} onChange={tem.handleChange} /><br /><br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}


export default Formik