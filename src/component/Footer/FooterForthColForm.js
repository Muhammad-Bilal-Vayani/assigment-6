import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function FooterForthColForm() {
    return (
        <form action="">
            <input type="text" />
            <button><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    );
}

export default FooterForthColForm;