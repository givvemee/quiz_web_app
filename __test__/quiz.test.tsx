// quiz.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Quiz from '../app/quiz/page';

test('localStorage에 quizItem이 잘 저장되는지 테스트', async () => {
  render(<Quiz />);

  await waitFor(() => {
    const currentQuestionElement = screen.getByTestId('current-question');
    expect(currentQuestionElement).toBeInTheDocument();
  });
});
