import { TitleContainer } from "./style";

type TitleProps = {
  children: React.ReactNode;
  centered?: boolean;
};

function Title({ children, centered }: TitleProps) {
  return (
    <TitleContainer className={centered ? "centered" : ""}>
      <div>{children}</div>
    </TitleContainer>
  );
}

export default Title;
