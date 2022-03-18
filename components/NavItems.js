export default function NavItems({ children }) {
  return (
    <li>
      <a className="text-white text-opacity-60 font-semibold">{children}</a>
    </li>
  );
}
