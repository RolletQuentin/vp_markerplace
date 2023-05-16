import { useState } from "react";
import { useFetch } from "../../utils/hooks";
import { shoppingItemList } from "../../data/shoppingItem";
import ShoppingItem from "../../components/ShoppingItem";
import Category from "../../components/Category";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";

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

    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/shoppingItem"
    );
    const { shoppingItem } = data;

    if (error) {
        return <div>Oups, il y a un problème</div>;
    }

    return (
        <MainWrapper>
            <Category
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <>
                {isLoading ? (
                    <Loader />
                ) : (
                    <ShoppingItemWrapper>
                        {shoppingItem.map(
                            ({
                                _id,
                                name,
                                price,
                                cover,
                                category,
                                shortDescription,
                            }) =>
                                !activeCategory ||
                                activeCategory === category ? (
                                    <div key={_id}>
                                        <ShoppingItem
                                            id={_id}
                                            cover={cover}
                                            name={name}
                                            price={price}
                                            shortDescription={shortDescription}
                                        />
                                    </div>
                                ) : null
                        )}
                    </ShoppingItemWrapper>
                )}
            </>
        </MainWrapper>
    );
}

export default Products;
