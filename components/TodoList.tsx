'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"

const tasks = Array.from({ length: 10 }, (_, i) => ({
  id: `task${i + 1}`,
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
}));

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className='w-full my-2'>
          <Button>
            <CalendarIcon />
            {date ? format(date, 'PPPP') : 'Pick a date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 border-0 w-auto'>
          <Calendar
            mode="single"
            selected={date}
            onSelect={date => {
              setDate(date)
              setOpen(false)
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="h-[250px] px-2">
        {tasks.map((task, index) => (
          <Card key={task.id} className='p-0 my-2 rounded-sm'>
            <CardContent className='flex items-center gap-2 p-2'>
              <Checkbox id={task.id} checked={task.id === 'task1' || task.id === 'task4'} />
              <Label htmlFor={task.id} className='text-xs text-muted-foreground'>{task.text}</Label>
            </CardContent>
          </Card>
        ))
        }
      </ScrollArea>
    </div >
  )
}

export default TodoList