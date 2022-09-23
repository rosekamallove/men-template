import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "zod";

const createUserSchema = object({
  firstName: string().min(1, "First Name is required"),

  lastName: string().min(1, "Last Name is required"),

  password: string({
    required_error: "Name is required",
  }).regex(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "Enter an 8 letter password, with at least a symbol, upper and lower case letters and a number"
  ),

  passwordConfirmation: string().min(1, "Please confirm passwords"),

  email: string({
    required_error: "Email is required",
  }).email("Not a valid email"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [showC, setShowC] = useState(false);
  const handleClickC = () => setShowC(!showC);

  const onSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <>
      <Container my={20}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.firstName ? true : false}>
            <FormLabel>First Name</FormLabel>
            <Input
              placeholder="Jane"
              id="firstName"
              {...register("firstName")}
            />
            {errors.firstName ? (
              <FormErrorMessage>{`${errors.firstName?.message}`}</FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl mt={4} isInvalid={errors.lastName ? true : false}>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" id="lastName" {...register("lastName")} />
            <FormErrorMessage>{`${errors.lastName?.message}`}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={errors.email ? true : false}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              placeholder="jane.doe@example.com"
              id="email"
              {...register("email")}
            />
            <FormErrorMessage>{`${errors.email?.message}`}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={errors.password ? true : false}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="JaneDoe123"
                {...register("password")}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{`${errors.password?.message}`}</FormErrorMessage>
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={errors.passwordConfirmation ? true : false}
          >
            <FormLabel htmlFor="password">Confirm Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showC ? "text" : "password"}
                placeholder="JaneDoe123"
                {...register("passwordConfirmation")}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClickC}>
                  {showC ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{`${errors.passwordConfirmation?.message}`}</FormErrorMessage>
          </FormControl>
          <Button my={5} width="full" colorScheme="teal" mr={3} type="submit">
            Login
          </Button>
        </form>
      </Container>
    </>
  );
}
