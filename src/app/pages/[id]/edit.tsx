import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Box, Button, Input, Textarea, Heading } from '@chakra-ui/react';

const EditTodo = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getTodo, updateTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      const todo = getTodo(id);
      if (todo) {
        setTitle(todo.title);
       
