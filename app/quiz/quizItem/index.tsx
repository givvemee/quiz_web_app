import { Answer } from '@/app/atoms/Answer';
import { useStore } from '@/store';
import { QuizListType } from '@/store/type';
import { useState } from 'react';
import { AnswerMessages, MoveNextButton, OptionContainer } from './styles';

export type PropsType = {
  question: QuizListType['question'];
  options: string[];
  correctAnswer: string;
  moveNextPage: () => void;
};

const QuizItem = ({
  question,
  options,
  correctAnswer,
  moveNextPage,
}: PropsType) => {
  const { setAnswerList, answerList, quizList } = useStore();

  const [answerMessage, setAnswerMessage] = useState<string | null>(null);
  const [isCorrectList, setIsCorrectList] = useState<(boolean | null)[]>(
    Array(options.length).fill(null)
  );
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [isAnswerClickable, setIsAnswerClickable] = useState<boolean>(true);

  const handleButtonClick = (answer: string, index: number) => {
    if (!isAnswerClickable) return;

    const isAnswerCorrect = answer === correctAnswer;
    if (isAnswerCorrect) {
      setAnswerList('O');
    } else {
      setAnswerList('X');
    }
    const updatedIsCorrectList = [...isCorrectList];
    updatedIsCorrectList[index] = isAnswerCorrect;

    setIsCorrectList(updatedIsCorrectList);
    setAnsweredCount(answeredCount + 1);

    setAnswerMessage(isAnswerCorrect ? '정답입니다!' : '오답입니다!');
    setIsAnswerClickable(false);
  };

  const handlePage = () => {
    moveNextPage();
    setAnswerMessage(null);
    setIsCorrectList(Array(options.length).fill(null));
    setIsAnswerClickable(true);
  };

  return (
    <>
      <p>{question}</p>
      <OptionContainer>
        {options.map((answer, index) => (
          <Answer
            key={index}
            onClick={() => handleButtonClick(answer, index)}
            isCorrect={
              isCorrectList[index] === true
                ? 'true'
                : isCorrectList[index] === false
                ? 'false'
                : 'unselected'
            }
            isClickable={isAnswerClickable}
          >
            {answer}
          </Answer>
        ))}
      </OptionContainer>
      {answerMessage && (
        <AnswerMessages
          type={'main'}
          isBold={'true'}
          isCorrect={answerMessage.includes('정답')}
        >
          {answerMessage}
        </AnswerMessages>
      )}
      {answeredCount > 0 && (
        <MoveNextButton onClick={handlePage}>{}다음 질문으로</MoveNextButton>
      )}
    </>
  );
};

export default QuizItem;
