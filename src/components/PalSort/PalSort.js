import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function PalSort(rawPal, userId) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    //const [heading, setHeading] = useState('Functional Component');
    let pal = { id: "id", name: "null" };
    if (rawPal.pal1_id === userId) {
        pal = {
            id: rawPal.pal1_id,
            name: rawPal.pal1_name
        }

    }
    else if (rawPal.pal2_id === userId) {
        pal = {
            id: rawPal.pal2_id,
            name: rawPal.pal2_name
        }
    }




    return (
        <tr >
            <td>{JSON.stringify(rawPal)}</td>

            <td>{pal.id}</td>
            <td>{pal.name}</td>
        </tr>
    );
}

export default connect(mapStoreToProps)(PalSort);
