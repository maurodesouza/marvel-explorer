import { screen, render } from '@testing-library/react';

import ShowWhen from '.';

describe('<ShowWhen />', () => {
  it('should render the children if condition is true', () => {
    const text = 'Just a text';

    render(<ShowWhen condition={true}>{text}</ShowWhen>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should no render if condition is false', () => {
    const text = 'Just a text';

    const { container } = render(<ShowWhen condition={false}>{text}</ShowWhen>);

    expect(container.firstChild).toBeNull();
  });
});
