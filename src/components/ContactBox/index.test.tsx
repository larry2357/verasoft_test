import React from 'react';
import { render } from "@testing-library/react";
import ContactBox from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

describe("ContactBox Component Test", () => {
    test('ContactBOx component shows skeleton when loading is true', () => {
        const { container } = render(<ContactBox data={[]} isLoading={true} />);
        expect(container.firstChild.firstChild.classList.contains("contactBox__skeleton")).toBe(true);
    });

    test('Avatar component shows title when loading is finished', () => {
        const element = <FontAwesomeIcon icon={faUser} />;
        const data = [{
            icon: element,
            contact: "testnumber-0001"
        }];
        const { getByText } = render(<ContactBox data={data} isLoading={false} />);
        expect(getByText(/testnumber-0001/i)).toBeInTheDocument();
    });
});

