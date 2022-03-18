import NavItems from "./NavItems";
export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10 py-20">
      <NavItems>Profile</NavItems>
      <NavItems>Skills</NavItems>
      <NavItems>Projects</NavItems>
      <NavItems>Contact</NavItems>
    </ul>
  );
}
