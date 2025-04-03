import GetStartedButton from "./GetStartedButton";

const NavBar = () => {
  return (
    <nav className="bg-primary dark:bg-primary/50 border-b-2 py-4 dark:border-b-slate-700">
      <div className="container flex flex-wrap items-center justify-between text-white">
        <h2 className="text-2xl">Cha-Ching</h2>

        <GetStartedButton className="bg-slate-300 text-black" />
      </div>
    </nav>
  );
};

export default NavBar;
