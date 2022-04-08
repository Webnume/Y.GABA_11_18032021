import { render } from "@testing-library/react";
import AppartCard from "./AppartCard";


test('should render Card', () => { 
  render(<AppartCard><div id="test"></div></AppartCard>)
  const test = document.querySelector("#test")
  expect(test).not.toBeNull()
 })
