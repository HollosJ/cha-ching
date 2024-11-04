import React from 'react';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="bg-emerald-500 py-4">
      <div className="container flex justify-between flex-wrap items-center text-white">
        <h2 className="text-2xl">Cha-ching</h2>
      </div>
    </nav>
  );
};

export default NavBar;
