import { Author, AuthorName, HeaderGrid, HeaderGridItem, Title } from "../styled components/styled";

export const Header = () => {
  return (
    <HeaderGrid container>
      <HeaderGridItem sx={{
        display: { xs: "none", sm: "none", md: "block" },
      }}>
        <Title variant="h1">Focus With Pomodoro</Title>
        <Author variant="body2">
          By&nbsp;&nbsp;
          <AuthorName>Satyam</AuthorName>
        </Author>
      </HeaderGridItem>
    </HeaderGrid>
  );
};
