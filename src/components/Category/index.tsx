import { CategoryItem } from "./CategoryItem";

interface CategoryProps {
    title: string;
}

export const Category = ({ title }: CategoryProps) => {
    return (
        <div>
            <span>{title}</span>
            <div className="category-list">
                {Array.from({ length: 5 }, (_, index) => (
                    <CategoryItem key={index} />
                ))}
            </div>
        </div>
    );
};
