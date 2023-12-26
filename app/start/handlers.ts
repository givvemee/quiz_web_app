import { useStore } from '@/store';
import { QuizListType } from '@/store/type';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const useHandlers = () => {
  const { push } = useRouter();
  const { setStartTime, setQuizList } = useStore();

  const fetchQuizList = async () => {
    try {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&type=multiple'
      );
      const decodedResults = response.data.results.map((item: QuizListType) => {
        const parser = new DOMParser();
        const decodedQuestion = parser.parseFromString(
          item.question,
          'text/html'
        ).body.textContent;

        return {
          ...item,
          question: decodedQuestion,
        };
      });

      setQuizList(decodedResults);
      const storedQuizList = JSON.stringify(decodedResults);
      localStorage.setItem('quizList', storedQuizList);
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  const getStartTime = () => {
    setStartTime(Date.now());
    push('/quiz');
  };

  return {
    fetchQuizList,
    getStartTime,
  };
};
