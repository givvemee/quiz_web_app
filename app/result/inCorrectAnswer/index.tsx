import { Text } from '@/app/atoms/text';
import { useStore } from '@/store';
import { QuizListType } from '@/store/type';
import { Answers, InCorrectAnswerContainer, Quesions } from './styles';

const IncorrectAnswers = () => {
  const { quizList, answerList } = useStore();

  const incorrectIndices = answerList.reduce((acc, answer, index) => {
    if (answer === 'X') {
      acc.push(index);
    }
    return acc;
  }, [] as number[]);

  const incorrectQuestions: QuizListType[] = incorrectIndices.map(
    (index) => quizList[index]
  );

  return (
    <InCorrectAnswerContainer>
      <Text type={'title'} isBold={'true'}>
        오답 노트
      </Text>
      {incorrectQuestions.map((question, index) => (
        <div key={index}>
          <p>
            <Quesions>{`Q${index + 1}`} : </Quesions> {question.question}
          </p>
          <Answers
            isBold={'true'}
          >{`정답: ${question.correct_answer}`}</Answers>
        </div>
      ))}
    </InCorrectAnswerContainer>
  );
};

export default IncorrectAnswers;
