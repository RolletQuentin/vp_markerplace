import { useState } from "react";
import { shoppingItemList } from "../../data/shoppingItem";
import ShoppingItem from "../../components/ShoppingItem";
import Category from "../../components/Category";
import styled from "styled-components";

const MainWrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShoppingItemWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

function Products() {
    const [activeCategory, setActiveCategory] = useState("");
    const categories = shoppingItemList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    );

    return (
        <MainWrapper>
            <Category
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ShoppingItemWrapper>
                {shoppingItemList.map(
                    ({
                        id,
                        name,
                        price,
                        cover,
                        category,
                        shortDescription,
                        ratings,
                    }) =>
                        !activeCategory || activeCategory === category ? (
                            <div key={id}>
                                <ShoppingItem
                                    id={id}
                                    cover={cover}
                                    name={name}
                                    price={price}
                                    shortDescription={shortDescription}
                                    ratings={ratings}
                                />
                            </div>
                        ) : null
                )}
            </ShoppingItemWrapper>
        </MainWrapper>
    );
}

export default Products;
