import FlexBox from "@component/FlexBox";
import Signup from "@component/sessions/Signup";

const SignUpPage = () => {
  return (
    <FlexBox flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center">
      <Signup />
    </FlexBox>
  );
};

export default SignUpPage;
