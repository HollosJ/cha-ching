import GetStartedButton from "./GetStartedButton";

const NavBar = () => {
  return (
    <nav className="bg-primary/50 border-b-2 py-4">
      <div className="container flex flex-wrap items-center justify-between text-white">
        <h2 className="text-2xl">Cha-Ching</h2>

        <GetStartedButton />
      </div>
    </nav>
  );
};

export default NavBar;
