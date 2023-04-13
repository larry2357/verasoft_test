import React from 'react';
import { render } from "@testing-library/react";
import Avatar from "./index";

describe("Avatar Component Test", () => {
    test('Avatar component shows skeleton when loading is true', () => {
        const { container } = render(<Avatar url="" title="men 3" isLoading={true} />);
        expect(container.firstChild.firstChild.classList.contains("avatar__skeleton")).toBe(true);
    });

    test('Avatar component shows title when loading is finished', () => {
        const { getByText } = render(<Avatar url="" title="men 3" isLoading={false} />);
        expect(getByText(/men 3/i)).toBeInTheDocument();
    });
});

