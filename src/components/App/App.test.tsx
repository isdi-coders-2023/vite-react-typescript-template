import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Hello world!", () => {
      const expectedText = /hello world!/i;

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
