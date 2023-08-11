import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    useToast,
} from '@chakra-ui/react';

const RegistrationForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState('');
    const toast = useToast();

    // Check if all fields are valid
    const isFormValid = fullName && email && password;

    // Update password strength
    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);

        // Implement your password strength logic here
        // Example: Check for uppercase, lowercase, digits, and special characters
        // Update passwordStrength accordingly (weak, moderate, strong)
    };

    // Simulate registration (replace with actual registration logic)
    const handleRegister = () => {
        // Simulated registration logic
        setTimeout(() => {
            toast({
                title: 'Registration Successful',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        }, 1000);
    };

    return (
        <Box width="100%" maxWidth="400px" margin="0 auto">
            <FormControl isRequired isInvalid={!fullName}>
                <FormLabel>Full Name</FormLabel>
                <Input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <FormErrorMessage>Please enter your full name.</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={!email}>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={!password}>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <FormErrorMessage>Please enter a valid password.</FormErrorMessage>
            </FormControl>

            <Text mt={2} fontWeight="semibold">
                Password Strength: {passwordStrength}
            </Text>

            <Button
                mt={4}
                colorScheme="teal"
                isDisabled={!isFormValid}
                onClick={handleRegister}
            >
                Register
            </Button>
        </Box>
    );
};

export default RegistrationForm;
