import { render, screen, waitFor } from '@testing-library/react';
import Result from '../app/result/page';

test('Chart 컴포넌트가 화면에 있는지 테스트', async () => {
  render(<Result />);
  const chartElement = screen.getByTestId('chart-component');
  await waitFor(() => {
    expect(chartElement).toBeInTheDocument();
  });
  expect(chartElement).toHaveClass('chart');
});
