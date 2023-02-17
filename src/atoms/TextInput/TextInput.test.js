import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./index";

const props = {
  title: "Title",
  placeholder: "Placeholder",
  value: "",
  onChange: jest.fn(),
  required: true,
  maxLength: 10,
  disabled: false,
  id: "input-id",
};

describe("TextInput", () => {
  it("renders the component with the correct props", () => {
    render(<TextInput {...props} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Placeholder");
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("maxlength", "10");
    expect(input).not.toBeDisabled();
  });

  it("calls the onChange function when the input value changes", () => {
    render(<TextInput {...props} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "hello");
    expect(props.onChange).toHaveBeenCalledTimes(5);
    expect(props.onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("updates the input value when the props change", () => {
    const { rerender } = render(<TextInput {...props} />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("");
    props.value = "world";
    rerender(<TextInput {...props} />);
    expect(input.value).toBe("world");
  });

  it("disables the input when the disabled prop is true", () => {
    props.disabled = true;
    render(<TextInput {...props} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("renders the title when the title prop is passed", () => {
    render(<TextInput {...props} />);
    const title = screen.getByText("Title");
    expect(title).toBeInTheDocument();
  });

  it("renders TextInput with correct class", () => {
    render(<TextInput />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("text-input__input");
  });
});
