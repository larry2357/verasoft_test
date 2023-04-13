import React from 'react';
import { render } from "@testing-library/react";
import Panel from "./index";

describe("Panel Component Test", () => {
    const data = [{
        value: "xyz",
        label: "xyz"
    }];

    test('Panel component shows data', () => {
        const { getByText } = render(<Panel title="tester" data={data} theme="green" isLoading={false} />);
        expect(getByText(/tester/i)).toBeInTheDocument();
    });
});

