import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CardType } from "./Board";
type columnProps = {
    name: String,
    cards: CardType[]
}

export default function Columns({name,cards}:columnProps) {
    return <Card className="w-4/12" >
        <CardHeader>
            <CardTitle>{ name}</CardTitle>
        </CardHeader>
        <CardContent>
            {cards.map((card,index) => <Card key={index} className="my-2 p-2">{card.name}</Card>)}
        </CardContent>
       </Card>
}