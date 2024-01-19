import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import IconFacebook from "../../assets/icon-facebook.svg";
import IconGoogle from "../../assets/icon-google.svg";
import Composition from "../../assets/composicao.svg";
import {
  Container,
  Header,
  Title,
  Form,
  BarOption,
  SocialButton,
  Footer,
} from "../../Styles/SignUpStyle";

const InputData = [
  {
    type: "text",
    placeholder: "Name here",
  },
  {
    type: "email",
    placeholder: "Email here",
  },
  {
    type: "password",
    placeholder: "Password here",
  },
];

const SocialButtons = [
  {
    urlImage: `${IconFacebook}`,
    alt: "icon Facebook",
    name: "Facebook",
    className: "btnSocial btn-facebook",
  },
  {
    urlImage: `${IconGoogle}`,
    alt: "icon Google",
    name: "Facebook",
    className: "btnSocial btn-google",
  },
];

export const SignUp = () => {
  return (
    <motion.div
      initial={{ x: 212, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 212, opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Container>
        <img
          className="composicaoImg"
          src={Composition}
          alt="imagem de composição"
        />
        <Header>
          <img
            className="logo"
            src={Logo}
            alt="logo"
          />
          <Title>Hey, Welcome Back!</Title>
        </Header>

        <Form>
          {InputData.map((item) => {
            return (
              <input
                type={item.type}
                placeholder={item.placeholder}
                required
              />
            );
          })}

          <p>
            By Creating an account you accept the
            Terms & Condition of the Company
          </p>
          <button>Continue</button>
        </Form>
        <BarOption>
          <div className="bar"></div>
          <p>Or Log In Using</p>
          <div className="bar"></div>
        </BarOption>
        <SocialButton>
          {SocialButtons.map((item) => {
            return (
              <a
                href={item.href}
                rel="noreferrer"
                className={item.className}
              >
                <img
                  src={item.urlImage}
                  alt={item.alt}
                />
                {item.name}
              </a>
            );
          })}
        </SocialButton>
        <Footer>
          Alredy a member?
          <Link
            className="bold"
            to="/"
            rel="noreferrer"
          >
            Log In
          </Link>
        </Footer>
      </Container>
    </motion.div>
  );
};

export default SignUp;
