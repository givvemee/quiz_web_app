import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Result from '../app/result/page';

test('Chart 컴포넌트가 화면에 있는지 테스트', async () => {
  render(<Result />);
  await waitFor(() => {
    const chartElement = screen.getByTestId('chart-component');
    expect(chartElement).toBeInTheDocument();
  });
});
