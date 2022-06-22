import { render } from '@testing-library/react';
import ApplicationWrapper from '../ApplicationWrapper';

describe("ApplicationWrapper Component Test", () => {

  let props: any;

  beforeEach(() => {
    props = {
      children: internalComponent
    }
  });

  const renderComponent = () => render(<ApplicationWrapper {...props}/>);

  it("Should render default component correctly", async () => {

    const { findByTestId, findByText } = renderComponent();

    const component = await findByTestId("application-wrapper");
    const childComponent = await findByText("I AM INTERNALLL");

    expect(component).toBeInTheDocument();
    expect(childComponent).toBeInTheDocument();

  });

});

const internalComponent = <h1>I AM INTERNALLL</h1> 