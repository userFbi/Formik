import React, { useState } from "react";
import { useFormik } from "formik";

const StudentResult = () => {
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            roll: "",
            m1: "",
            m2: "",
            m3: ""
        },

        onSubmit: (values, { resetForm }) => {
            const m1 = Number(values.m1);
            const m2 = Number(values.m2);
            const m3 = Number(values.m3);

            const total = m1 + m2 + m3;
            const percentage = ((total / 300) * 100).toFixed(2);

            const min = Math.min(m1, m2, m3);
            const max = Math.max(m1, m2, m3);

            const result = (m1 >= 35 && m2 >= 35 && m3 >= 35) ? "PASS" : "FAIL";

            const data = {
                ...values,
                m1, m2, m3,
                total,
                percentage,
                min,
                max,
                result
            };

            if (editIndex !== null) {
                const updated = [...list];
                updated[editIndex] = data;
                setList(updated);
                setEditIndex(null);
            } else {
                setList([...list, data]);
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

                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <br /><br />

                <input
                    type="number"
                    name="m1"
                    placeholder="Sub-1 Marks"
                    value={formik.values.m1}
                    onChange={formik.handleChange}
                />
                <br /><br />

                <input
                    type="number"
                    name="m2"
                    placeholder="Sub-2 Marks"
                    
                    value={formik.values.m2}
                    onChange={formik.handleChange}
                />
                <br /><br />

                <input
                    type="number"
                    name="m3"
                    placeholder="Sub-3 Marks"
                    value={formik.values.m3}
                    onChange={formik.handleChange}
                />
                <br /><br />

                <button type="submit">
                    {editIndex !== null ? "Update Result" : "Add Result"}
                </button>
            </form>

            <br /><hr /><br />



            {list.length === 0 ? (
                <></>
            ) : (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>S1</th>
                            <th>S2</th>
                            <th>S3</th>
                            <th>Total</th>
                            <th>Percentage</th>
                            <th>Min</th>
                            <th>Max</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((s, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{s.name}</td>
                                <td>{s.m1}</td>
                                <td>{s.m2}</td>
                                <td>{s.m3}</td>
                                <td>{s.total}</td>
                                <td>{s.percentage}%</td>
                                <td>{s.min}</td>
                                <td>{s.max}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                </td>
                                <td>
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

export default StudentResult;
