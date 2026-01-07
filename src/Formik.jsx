import React, { useState } from "react";
import { useFormik } from "formik";

const FormikCrud = () => {

    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: ""
        },

        onSubmit: (values, { resetForm }) => {

            if (editIndex !== null) {
                const updated = [...list];
                updated[editIndex] = values;
                setList(updated);
                setEditIndex(null);
            } else {
                setList([...list, values]);
            }

            resetForm();
        }
    });

    const handleEdit = (index) => {
        formik.setValues(list[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setList(list.filter((_, i) => i !== index));
    };

    return (
        <div>

            <form onSubmit={formik.handleSubmit}>
                <br />

                <input className="temp"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <br /><br />

                <input className="temp"
                    type="text"
                    name="surname"
                    placeholder="Enter Surname"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                />
                <br /><br />

                <button type="submit" className="btn">
                    {editIndex !== null ? "Update" : "Submit"}
                </button>
            </form>

            <br /><hr /><br />

            {list.length === 0 ? (
                <p>No Records Found</p>
            ) : (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    &nbsp;
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
};

export default FormikCrud;
