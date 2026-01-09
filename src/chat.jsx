import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const StudentResultFormik = () => {
    const [students, setStudents] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const initialValues = {
        name: "",
        sub1: "",
        sub2: "",
        sub3: ""
    };

    const handleSubmit = (values, { resetForm }) => {
        const s1 = Number(values.sub1);
        const s2 = Number(values.sub2);
        const s3 = Number(values.sub3);

        const total = s1 + s2 + s3;
        const min = Math.min(s1, s2, s3);
        const max = Math.max(s1, s2, s3);
        const per = (total / 3).toFixed(2);

        const result = {
            name: values.name,
            sub1: s1,
            sub2: s2,
            sub3: s3,
            min,
            max,
            total,
            per
        };

        if (editIndex !== null) {
            const updated = [...students];
            updated[editIndex] = result;
            setStudents(updated);
            setEditIndex(null);
        } else {
            setStudents([...students, result]);
        }

        resetForm();
    };

    const handleDelete = (index) => {
        setStudents(students.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: "20px" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ setValues }) => (
                    <>
                        <Form>
                            <Field name="name" placeholder="Student Name" />
                            <br /><br />

                            <Field name="sub1" type="number" placeholder="Subject 1" />
                            <br /><br />

                            <Field name="sub2" type="number" placeholder="Subject 2" />
                            <br /><br />

                            <Field name="sub3" type="number" placeholder="Subject 3" />
                            <br /><br />

                            <button type="submit">
                                {editIndex !== null ? "Update" : "Add"}
                            </button>
                        </Form>

                        <br />

                        {students.length > 0 && (
                            <table border="1" cellPadding="10">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Sub1</th>
                                        <th>Sub2</th>
                                        <th>Sub3</th>
                                        <th>Min</th>
                                        <th>Max</th>
                                        <th>Total</th>
                                        <th>Per %</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.sub1}</td>
                                            <td>{item.sub2}</td>
                                            <td>{item.sub3}</td>
                                            <td>{item.min}</td>
                                            <td>{item.max}</td>
                                            <td>{item.total}</td>
                                            <td>{item.per}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        setEditIndex(index);
                                                        setValues(item); // ✅ WORKS
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                &nbsp;
                                                <button onClick={() => handleDelete(index)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
            </Formik>
        </div>
    );
};

export default StudentResultFormik;
