import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'utils/test/helpers';

import Search, { SearchProps } from '.';

const searchProps: Required<Omit<SearchProps, 'onSubmit' | 'error'>> = {
  label: 'label',
  placeholder: 'placeholder',
};

describe('<Search />', () => {
  it('should render the search correct', () => {
    renderWithProviders(<Search {...searchProps} />);

    const input = screen.getByPlaceholderText(searchProps.placeholder);
    const label = screen.getByLabelText(searchProps.label);
    const button = screen.getByRole('button', { name: /search/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('should render the search styles correct', () => {
    const { container } = renderWithProviders(<Search />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render error', () => {
    const errorText = 'some error';

    renderWithProviders(<Search error={errorText} />);

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('should call onSubmit function when passed', () => {
    const onSubmit = jest.fn();
    const text = 'some value';

    renderWithProviders(<Search {...searchProps} onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText(searchProps.placeholder);
    const button = screen.getByRole('button', { name: /search/i });

    userEvent.type(input, text);
    fireEvent.click(button);

    expect(onSubmit).toBeCalledWith(text);
    expect(onSubmit).toBeCalledTimes(1);
  });

  it('should call onSubmit function with no value', () => {
    const onSubmit = jest.fn();

    renderWithProviders(<Search {...searchProps} onSubmit={onSubmit} />);

    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);

    expect(onSubmit).toBeCalledWith('');
    expect(onSubmit).toBeCalledTimes(1);
  });
});
