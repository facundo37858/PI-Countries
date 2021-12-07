


// // app.test.js
// import { 
//     render, 
//     screen, 
//     waitFor 
// } from '@testing-library/react';

// import Login from './Login';


// // test('renders learn react link', () => {
// //   render(<Login />);
// // //   const signIn = screen.getByText(/learn react/i);
// //   expect(screen.getByText('Sign In')).toBeInTheDocument();
// // });

// // expect(screen.getByText('Foo')).toBeInTheDocument()


// test('Extract button node with getByText', () => {
//     render(<Login/>);
//     const button = screen.getByText('Sign In')
//     expect(button).toBeInTheDocument() 
//   });

import React from "react";
import { configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Login from './Login'


configure({ adapter: new Adapter() });

describe("<Login />", () => {
  let wrapper= shallow(<Login />)



  it("Renderiza un <button>", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});