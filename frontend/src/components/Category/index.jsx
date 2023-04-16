function Category({ setActiveCategory, categories, activeCategory }) {
    const categoryName = (cat) => {
        let name = "";
        switch (cat) {
            case "clothe":
                name = "Vêtements";
                break;

            case "accessory":
                name = "Accessoires";
                break;
            case "goodie":
                name = "Goodies";
                break;
            default:
                break;
        }

        return name;
    };

    return (
        <div>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value="">---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {categoryName(cat)}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
        </div>
    );
}

export default Category;
