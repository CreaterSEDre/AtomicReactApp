import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>TEST</PrimaryButton>
      <SecondaryButton>sex</SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UserCard />
    </div>
  );
}