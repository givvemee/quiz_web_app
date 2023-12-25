import { Text } from '@/app/atoms/text';
import { Container } from '@/app/start/styles';
import { useStore } from '@/store';
import { QuizListType } from '@/store/type';

const IncorrectAnswers = () => {
  const { quizList, answerList } = useStore();

  const incorrectIndices = answerList.reduce((acc, answer, index) => {
    if (answer === 'X') {
      acc.push(index);
    }
    return acc;
  }, [] as number[]);

  // Filter quizList to get only the questions with incorrect answers
  const incorrectQuestions: QuizListType[] = incorrectIndices.map(
    (index) => quizList[index]
  );

  return (
    <Container>
      <Text type={'title'} isBold={'true'}>
        오답 노트
      </Text>
      {incorrectQuestions.map((question, index) => (
        <div key={index}>
          <p>{`Q${index + 1}: ${question.question}`}</p>
          <p>{`정답: ${question.correct_answer}`}</p>
        </div>
      ))}
    </Container>
  );
};

export default IncorrectAnswers;
