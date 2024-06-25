import { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const TodoList = () => {
  const { todos, fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Heading>TODOリスト</Heading>
      <Button as={Link} href="/create" colorScheme="teal" mt={4}>
        TODO作成
      </Button>
      <Box mt={6}>
        {todos.map((todo) => (
          <Box key={todo.id} p={4} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{todo.title}</Heading>
            <Link href={`/${todo.id}`}>詳細を見る</Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TodoList;
