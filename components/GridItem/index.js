import { FlexContainer } from "../styled"
import { GridItemFrame } from "../styled"
import { GridItemImg } from "../styled"
import { GridItemPrice } from "../styled"

export default function GridItem(props) {
    const itemIds = Object.keys(props.list)
    return (
        <FlexContainer>
            {itemIds.map((itemId) => {
                const array = props.list[itemId]
                //console.log(array)
                //console.log(itemId)
                return array.map((item) => {
                    return (
                        <GridItemFrame>
                            <GridItemImg
                                src={`https://raw.communitydragon.org/pbe/game/assets/items/icons2d/${item.image}`}
                            />
                            <GridItemPrice>{item.cost}</GridItemPrice>

                        </GridItemFrame>
                    )
                })
            })}
        </FlexContainer>
    )
}