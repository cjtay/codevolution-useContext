import React from 'react';
import ComponentB from './ComponentB';

function ComponentA() {
    return (
        <div>
            <h1>This is component A</h1>
            <ComponentB />
        </div>
    );
}

export default ComponentA;
