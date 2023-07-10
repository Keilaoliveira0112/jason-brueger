import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("<Select />", () => {
  it("Should check value change when selecting a new table", () => {
    const props = {
      defaultValue: "Teste",
      optionValues: ["001", "002", "003", "004"],
      variant:"primary"
    };
    render(<Select {...props} />);

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue(props.defaultValue);

    userEvent.selectOptions(select, props.optionValues[0]);
    expect(select).toHaveValue(props.optionValues[0]);
  });
});
