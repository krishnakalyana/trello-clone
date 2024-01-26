import NewColumnForm from "../forms/NewColumnForm";
import { Card } from "../ui/card";
import Columns from "./Columns";
const columns = [
    {id:"abcd",name:"todo",index:"0"},
    {id:"cdef",name:"in progress",index:"1"},
    {id:"efgh",name:"done",index:"2"},
]
export type CardType = {
    name: String,
    id: String,
    order:Number
}
const cards = [
    {id:"1",name:"task 1",order:"0",columnId:"abcd"},
    {id:"2",name:"task 2",order:"1",columnId:"cdef"},
    {id:"3",name:"task 3",order:"2",columnId:"efgh"},
]
export default function Board (){
    return <div className="flex gap-4">
        {columns.map(column => { return <Columns {...column} cards={cards}  />})}
        <NewColumnForm />
    </div>
}