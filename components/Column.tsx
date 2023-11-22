'use client'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useBoardStore } from '@/store/BoardStore'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

function Column({ id, todos, index }: Props) {
    const [searchString, setSearchString] = useBoardStore((state) => [state.searchString, state.setSearchString])

    return (
        <Draggable draggableId={id} index={index} >
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={index.toString()} type='card'>
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"}`}
                            >
                                <h2 className='flex justify-between'>
                                    {id}
                                    <span className='text-gray-500'>
                                        {!searchString
                                            ? todos.length 
                                            : todos.filter(todo=> 
                                                todo.title
                                                    .toLowerCase()
                                                    .includes(searchString.toLowerCase())).length
                                        }</span>
                                </h2>
                                <div className='spac-y-2'>
                                    {
                                        todos.map((todo, index) => {
                                            if (
                                                searchString && 
                                                !todo.title
                                                .toLowerCase()
                                                .includes(searchString.toLowerCase()))
                                                    return null;
                                                return (
                                                    <Draggable
                                                        key={todo.$id}
                                                        draggableId={todo.$id}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <TodoCard
                                                                todo={todo}
                                                                index={index}
                                                                id={id}
                                                                innerRef={provided.innerRef}
                                                                draggableProps={provided.draggableProps}
                                                                dragHandleProps={provided.dragHandleProps}
                                                            />
                                                        )}
                                                    </Draggable>
                                                )
                                        })
                                    }
                                    {provided.placeholder}
                                    <div className='flex items-end'>
                                        <button className='text-green-500 hover:text-green-600'>
                                            <PlusCircleIcon className='h-10 w-10' />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}

export default Column
