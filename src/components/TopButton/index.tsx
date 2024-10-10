import classNames from "classnames";
import "./index.css"

interface TopButtonProps {
    label: string;
    isActive: boolean;
    setActive: (label: string) => void;
}

export const TopButton = ({
    label,
    isActive,
    setActive
}: TopButtonProps) => {
    return (
        <div>
            <button
                className={classNames(
                    "button",
                    { active: isActive }
                )}
                onMouseEnter={() => setActive(label)}
                onMouseLeave={() => {
                    if (label !== "All") {
                        setActive("All");
                    }
                }}
            >
                <span>
                    {label}
                </span>
            </button>
        </div>
    );
};

