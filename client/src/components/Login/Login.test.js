


// app.test.js
import { 
    render, 
    screen, 
    waitFor 
} from '@testing-library/react';

import Login from './Login';


// test('renders learn react link', () => {
//   render(<Login />);
// //   const signIn = screen.getByText(/learn react/i);
//   expect(screen.getByText('Sign In')).toBeInTheDocument();
// });

// expect(screen.getByText('Foo')).toBeInTheDocument()


test('Extract button node with getByText', () => {
    render(<Login/>);
    const button = screen.getByText('Sign In')
    expect(button).toBeInTheDocument() 
  });