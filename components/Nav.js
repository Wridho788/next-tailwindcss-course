import NavItems from "./NavItems";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-6"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={classnames("flex", pickedDir)}>
            <NavItems scheme={scheme} href="#profile">Profile</NavItems>
            <NavItems scheme={scheme} href="#skills">Skills</NavItems>
            <NavItems scheme={scheme} href="#projects">Projects</NavItems>
            <NavItems scheme={scheme} href="#contact">Contact</NavItems>
        </ul>
    );
}
