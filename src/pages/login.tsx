import FlexBox from "@component/FlexBox";
import Login from "@component/sessions/Login";

const LoginPage = () => {
  return (
    <FlexBox minHeight="100vh" alignItems="center" flexDirection="column" justifyContent="center">
      <Login />
    </FlexBox>
  );
};

export default LoginPage;
