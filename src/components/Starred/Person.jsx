import PropTypes from 'prop-types';

import './Person.css';
const Person = ({ person }) => {
    return (
            <div className='nameTag'>
                <div>{person.name} ({person.id})</div>
                <div>Age: {person.age}</div>
            </div>
    );
};

Person.propTypes = {
    person: PropTypes.array.isRequired
}

export default Person;