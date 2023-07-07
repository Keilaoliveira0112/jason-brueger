import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContainerButtons from "./ContainerButtons";

describe("<ContainerButtons />", () => {
  it("Should render and perform the functions of the buttons", () => {
    const props = {
      onClickBtnOne: jest.fn(),
      onClickBtnTwo: jest.fn(),
      childrenBtnOne: "Café da manhã",
      childrenBtnTwo: "Resto do dia",
    };

    render(<ContainerButtons {...props} />);

    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(2);

    const btnFirst = screen.getByText(props.childrenBtnOne);
    userEvent.click(btnFirst);
    expect(props.onClickBtnOne).toHaveBeenCalledTimes(1);

    const btnSecond = screen.getByText(props.childrenBtnTwo);
    userEvent.click(btnSecond);
    expect(props.onClickBtnTwo).toHaveBeenCalledTimes(1);
  });
});
