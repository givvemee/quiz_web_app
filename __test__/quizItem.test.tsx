import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import QuizItem from '../app/quiz/quizItem/index';

const mockMoveNextPage = jest.fn();

const mockProps = {
  question: 'Sample Question',
  options: ['Option A', 'Option B', 'Option C'],
  correctAnswer: 'Option A',
  moveNextPage: mockMoveNextPage,
};

test('버튼 클릭 시 handlePage가 실행되는지 테스트', () => {
  render(<QuizItem {...mockProps} />);

  const moveNextButton = screen.getByText('다음 질문으로');
  fireEvent.click(moveNextButton);

  expect(mockMoveNextPage).toHaveBeenCalledTimes(1);
});
