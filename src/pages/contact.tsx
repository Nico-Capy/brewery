import React, { useState } from 'react';
import { Button, Center, FormControl, FormLabel, Input, Textarea, Text, VStack, useToast, } from '@chakra-ui/react';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: "#76b1e8" }} >
      <form onSubmit={handleSubmit} style={{ width: '80%' }}>
        <Center>
          <Text fontFamily="American Typewriter" fontSize="6xl" p='1rem' pb='0'>
            <h1>Contact</h1>
          </Text>
        </Center>
        <VStack spacing={4} fontFamily="American Typewriter">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required pattern=".{1,}" title="Please enter your name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required pattern=".{1,}" title="Please enter your email" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="You get extra credit if the message is a compliment" required title="Please enter a message" />
          </FormControl>
          <Button type="submit" colorScheme="blue" borderRadius={0}>
            Send
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default Contact;
