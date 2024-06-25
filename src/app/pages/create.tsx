import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useRouter } from 'next/router';
import { Box, Button, Input, Textarea, Heading } from '@chakra-ui/react';

const CreateTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo({ title, description });
    router.push('/');
  };

  return (
    <Box>
      <Heading>TODO作成</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mt={4}
        />
        <Textarea
          placeholder="詳細"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mt={4}
        />
        <Button type="submit" colorScheme="teal" mt={4}>
          保存
        </Button>
      </form>
    </Box>
  );
};

export default CreateTodo;
