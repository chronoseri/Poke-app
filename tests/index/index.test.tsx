import {render,screen }from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../../src/pages/index";
import { describe } from "node:test";

describe('Home', () => {
    it('renders a heading', () => {
      const { container } = render(<Home />)
  
      const heading = screen.getByRole('heading', {
        name: /welcome to next\.js!/i,
      });
  
      expect(heading).toBeInTheDocument();
  
      expect(container).toMatchSnapshot();
    })
  });