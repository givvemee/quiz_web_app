import { render, screen, waitFor } from '@testing-library/react';
import Quiz from '../app/quiz/page';
import { useStore } from '../store/index';

const mockLocalStorage = (() => {
  let store = {};

  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

jest.mock('../app/store', () => ({
  useStore: jest.fn(() => ({
    quizList: [{ question: 'Sample Question' }],
    setQuizList: jest.fn(),
  })),
}));

test('localStorage에 quizItem이 잘 저장되는지 테스트', async () => {
  render(<Quiz />);

  await waitFor(() => {
    const currentQuestionElement = screen.getByTestId('current-question');
    expect(currentQuestionElement).toBeInTheDocument();
  });
});

test('Store의 quizList 배열이 0 이상인지 확인하는 테스트', async () => {
  render(<Quiz />);

  await waitFor(() => {
    const { quizList } = useStore();
    const isQuizListNotEmpty = quizList.length > 0;

    expect(isQuizListNotEmpty).toBeTruthy();
  });
});
