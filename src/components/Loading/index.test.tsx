import React from 'react';
import { render } from "@testing-library/react";
import Loading from './index';

describe("Loading Component Test", () => {
    test('Loading component shows dot loader', () => {
        const { container } = render(<Loading />);
        expect(container.firstChild.firstChild.classList.contains("dot")).toBe(true);
    });
});

