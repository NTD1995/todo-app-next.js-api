import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const TodoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getTodo, deleteTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      setTodo(getTodo(id));
    }
  }, [id]);

  if (!todo) return <Box>Loading...</Box>;

  return (
    <Box>
      <Heading>{todo.title}</Heading>
      <Text mt={4}>{todo.description}</Text>
      <Button as={Link} href={`/${todo.id}/edit`} colorScheme="teal" mt={4}>
        編集
      </Button>
      <Button colorScheme="red" mt={4} onClick={() => {
        deleteTodo(todo.id);
        router.push('/');
      }}>
        削除
      </Button>
    </Box>
  );
};

export default TodoDetail;
