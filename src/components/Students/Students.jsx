import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Students.css';
const Students = ({ handleStarred, student }) => {
    const { id, name, age, major, gpa } = student;

    const [star, setStar] = useState(false);

    const handleStar = (student, star) => {
        setStar(!star);
        handleStarred(student);
    }

    useEffect(() => {
        const iddArray = JSON.parse(localStorage.getItem('Stars')) || [];
        if (iddArray.includes(id)) {
            setStar(true);
        }
    }, [id]);


    return (
        <div className="smallbox">
            <h3>Name: {name}</h3>
            <h4>ID: {id}</h4>
            <h4>Age: {age}</h4>
            <h4>Major Subject: {major}</h4>
            <h4>CGPA: {gpa}</h4>
            <img onClick={() => handleStar(student, star)} className={star ? 'starred' : 'starr'} src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPXShkRNUuwD7GZty_dKDYGoES2wzvW26BR9HnIzcN-2i2mkVilZ9h651sdRgsm4L_wEdJwgNJYCEqSJpFUZ3JGkxM38ZRBK8uMBgr9ZNlmyIsT6zJjqckTIaIppGW3_I-443i1-dIc4WqcwKL4m1ysF5GCXzn4IJiUFp7XQIwzYUDfJJNx1eUCXrfeco/s1600/star_24dp_FILL0_wght400_GRAD0_opsz24.png' />
        </div>
    );
};

Students.propTypes = {
    handleStarred: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
}

export default Students;
