import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnlyLayout } from "./components/templetes/HeaderOnlyLayout";
import "./styles.css";

const user = {
  name: "Sanada.Pelicans",
  image: "https://source.unsplash.com/ID48ekBTlDo",
  email: "12345exam.com",
  phone: "111-2222-3333",
  company: {
    name: "bold.inc"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnlyLayout>
        <PrimaryButton>TEST</PrimaryButton>
        <SecondaryButton>sex</SecondaryButton>
        <br />
        <SearchInput />
        <br />
        <UserCard user={user} />
      </HeaderOnlyLayout>
    </BrowserRouter>
  );
}
