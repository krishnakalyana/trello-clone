import { ItemInterface, ReactSortable } from "react-sortablejs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CardType } from "./Board";
import { SetStateAction } from "react";
type columnProps = {
    id:string,
    name: string;
    cards: CardType[];
    setCards: SetStateAction<any>;
}

export default function Columns({ id,name, cards, setCards }: columnProps) {
    const setColumnsCard = (sortedCards: CardType[], newColumnId: string) => {
                
        setCards((prevCards:CardType[]) => {
            const newCards = [...prevCards]
            sortedCards.forEach((sortedCard: CardType, newIndex: number) => {
                const foundCard = newCards.find(newCard => newCard.id === sortedCard.id)
                if (foundCard) {
                    foundCard.index = newIndex
                    foundCard.columnId=newColumnId
                }
            })
            return newCards
            })
    }
    return <Card className="w-4/12" >
        <CardHeader>
            <CardTitle>{ name}</CardTitle>
        </CardHeader>
        <CardContent>
            <ReactSortable
                list={cards as ItemInterface[]}
                group={"cards"}
                setList={cards => setColumnsCard(cards, id)}
                className="py-2 min-h-12"
                ghostClass="opacity-40"
            >
            {cards.map((card,index) => <Card key={index} className="my-2 p-2">{card.name}</Card>)}
            </ReactSortable>
        </CardContent>
       </Card>
}