import itemJson from '../src/test.json'
import GridItem from '../components/GridItem'

function HomePage() {
    return (
        <GridItem list={itemJson.itens} />
    )
}

export default HomePage