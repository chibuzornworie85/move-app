import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Link } from "react-router-dom";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <Link style={{
        
      }} to={"/procurement3yiukjeg5-47/5408456-856"}>
      <SubmitButton type="submit">Sign in</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Sign up
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
