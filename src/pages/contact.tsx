import React, { useState } from 'react';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const toast = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // You can replace this with your own logic to send the form data to a server
    // For demonstration purposes, we'll just log the form data to the console
    console.log(formData);

    toast({
      title: 'Message sent',
      description: 'Thanks for reaching out to me!',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '80%' }}>
        <Center>
          <Text fontFamily="American Typewriter" fontSize="6xl" p='1rem' pb='0'>
            <h1>Contact</h1>
          </Text>
        </Center>
        <VStack spacing={4} fontFamily="American Typewriter">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleInputChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Send
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default Contact;
