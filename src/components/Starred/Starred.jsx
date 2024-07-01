import PropTypes from 'prop-types';

import Person from './Person';
import './Starred.css';
const Starred = ({ starredStudent }) => {

    return (
        <div className={starredStudent.length ? 'starredContainerInvisible' : 'starredContainerInvisibleNoData'}>
            <div className='starredContainer'>
                <h4>Starred Students (Total : {starredStudent.length})</h4>
                <div className='infoContainer'>
                    {
                        starredStudent.map(person => <Person key={person.id} person={person}></Person>)
                    }
                </div>
            </div>
        </div>
    );
};

Starred.propTypes = {
    starredStudent: PropTypes.array.isRequired
}

export default Starred;