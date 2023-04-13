import React from 'react';
import { render } from "@testing-library/react";
import Modal from './index';

describe("Modal Component Test", () => {
    test('Modal component shows dot loader', () => {
        const { container } = render(<Modal hideModal={() => {}} />);
        expect(container.firstChild.classList.contains("modal")).toBe(true);
    });
});

