import classnames from "classnames";

export default function SectionSubtitle({ left, children }) {
    return (
        <p className={classnames("text-lg mt-2 text-gray-600", !left && "text-center")}>{children}</p>
    );
}