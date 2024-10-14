import { CategoryItem } from "./CategoryItem";
import "./index.css";

interface CategoryProps {
    title: string;
}

export const Category = ({ title }: CategoryProps) => {
    return (
        <div className="category-container">
            <span className="catogory-title ">{title}</span>
            <div className="category-list">
                {Array.from({ length: 5 }, (_, index) => (
                    <CategoryItem key={index} />
                ))}
            </div>
        </div>
    );
};
