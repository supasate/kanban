import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag,
    Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import Editable from 'app/components/Editable.jsx';

describe('Editable', () => {
    it('renders value', () => {
        const value = 'value';
        const component = renderIntoDocument(
            <Editable value={value} />
        );

        const valueComponent = findRenderedDOMComponentWithClass(component, 'value');

        assert.equal(valueComponent.textContent, value);
    });

    it('enters edit mode', () => {
        const value = 'value';
        const component = renderIntoDocument(
            <Editable value={value} />
        );

        const valueComponent = findRenderedDOMComponentWithClass(component, 'value');
        Simulate.click(valueComponent);

        const input = findRenderedDOMComponentWithTag(component, 'input');

        assert.equal(input.value, value);
    });

    it('triggers onEdit', () => {
        let triggered = false;
        const newValue = 'newValue';
        const onEdit = (val) => {
            triggered = true;
            assert.equal(val, newValue);
        };

        const component = renderIntoDocument(
            <Editable value={'value'} onEdit={onEdit} />
        );

        let valueComponent = findRenderedDOMComponentWithClass(component, 'value');
        Simulate.click(valueComponent);

        const input = findRenderedDOMComponentWithTag(component,'input');
        input.value = newValue;

        Simulate.blur(input);

        assert.equal(triggered, true);

    });
})
