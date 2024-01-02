'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/utils';
import { Button } from '@/app/components/ui/button';
import { Calendar } from '@/app/components/ui/calendar';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';

interface DatePickerWithRangeProps {
  date?: DateRange;
  className?: string;
  setDate?: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export const DatePickerWithRange: React.FC<DatePickerWithRangeProps> = ({
  className,
  date,
  setDate,
}) => {
  const fromRef = React.useRef<HTMLInputElement>(null);
  const toRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (date) {
      if (fromRef.current) fromRef.current.value = String(date.from);
      if (toRef.current) toRef.current.value = String(date.to);
    }
    console.log(fromRef.current?.value, toRef.current?.value);
  }, [date]);

  return (
    <>
      <div>
        <label htmlFor="from"></label>
        <input
          ref={fromRef}
          name="from"
          id="from"
          type="text"
          className="hidden"
        />

        <label htmlFor="to"></label>
        <input
          ref={toRef}
          defaultValue={String(date?.to)}
          name="to"
          id="to"
          type="text"
          className="hidden"
        />
      </div>

      <div className={cn('grid gap-2', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-[300px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
