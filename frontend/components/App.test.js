import AppFunctional from "./AppFunctional";
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react'
// Write your tests here
// test('sanity', () => {
//   expect(true).toBe(false)
// })

test('renders without errors', () => {
  render(<AppFunctional /> );
});