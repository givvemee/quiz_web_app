import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import StartQuiz from '../app/start/page';

test('fetchQuizList 함수가 실행되었는지 테스트', async () => {
  render(<StartQuiz />);

  await waitFor(() => {
    const buttonTextElement = screen.getByText('문제 풀기');
    expect(buttonTextElement).toBeInTheDocument();
  });
});
