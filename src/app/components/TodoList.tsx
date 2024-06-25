import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useTodo } from '../app/context/TodoContext';

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <Box>
      <Heading>TODOリスト</Heading>
      <Link href="/create">
        <Button colorScheme="teal" mt={4}>
          TODO作成
        </Button>
      </Link>
      <Box mt={6}>
        {todos.map((todo: { id: number; title: string }) => (
          <Box key={todo.id} p={4} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{todo.title}</Heading>
            <Link href={`/${todo.id}`}>
              詳細を見る
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TodoList;

