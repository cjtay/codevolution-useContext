import React, { useContext } from 'react';

import { LangContext, ThemeContext } from '../index';

function ComponentB() {
    const { lang1, lang2 } = useContext(LangContext);
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1>This is component B</h1>
            <p>Lang1: {lang1}</p>
            <p>Lang2: {lang2}</p>
            <p>Theme: {theme}</p>
        </div>
    );
}

export default ComponentB;
