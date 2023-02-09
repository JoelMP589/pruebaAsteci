import { render } from '@testing-library/react';
import { Table } from '../components/Table';

describe('prueba en componente <Table/>', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = render(<Table />);
        expect(wrapper).toMatchSnapshot();
    });
});