import { render } from '@testing-library/react';
import ApplicationBar from '../ApplicationBar';

describe("ApplicationBar Component Test", () => {

  const renderComponent = () => render(<ApplicationBar />);

  it("Should render default component correctly", async () => {

    const { findByTestId } = renderComponent();

    const component = await findByTestId("application-bar");

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent('Trending');

  });

  it("Should be able to click the extremely useful button", async () => {

    const { findByText } = renderComponent();

    const component = await findByText("My Faves");
    component.click();
    expect(component).toBeInTheDocument();

  });

});