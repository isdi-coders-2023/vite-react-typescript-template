import { render, screen} from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Hello world!", () => {
      const expectedText = /hello world!/i;

      render(<App />);
  
      const text = screen.getByText(expectedText);
      
      expect(text).toBeInTheDocument();
    })
  })
})
