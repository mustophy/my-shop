import { IconCard } from '@/components/ui/IconCard'
import { Calendar } from '@mantine/dates';

import { makeStyles } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// const customStyle = makeStyles(() => ({
    
// }))

const calendar = () => {
    return (
        <div className="p-[30px] flex gap-x-[30px] bg-surface-gray">
            <div className="262px">
                <div className="flex justify-between items-center">
                    <h2 className="text-primary">Create Event</h2>
                    <img src="/assets/edit.svg" className="h-4 cursor-pointer" alt="" />
                </div>
                <div className='relative mt-7'>
                    <svg className='absolute text-red-500 top-5 left-4' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 9H9.0325L8.8225 8.7975C9.58291 7.91552 10.0008 6.78952 10 5.625C10 4.66082 9.71409 3.71829 9.17842 2.9166C8.64275 2.11491 7.88137 1.49007 6.99058 1.12109C6.09979 0.752112 5.11959 0.655571 4.17394 0.843674C3.22828 1.03178 2.35964 1.49608 1.67786 2.17786C0.996076 2.85964 0.531777 3.72828 0.343674 4.67394C0.155571 5.61959 0.252112 6.59979 0.621089 7.49058C0.990067 8.38137 1.61491 9.14275 2.4166 9.67842C3.21829 10.2141 4.16082 10.5 5.125 10.5C6.3325 10.5 7.4425 10.0575 8.2975 9.3225L8.5 9.5325V10.125L12.25 13.8675L13.3675 12.75L9.625 9ZM5.125 9C3.2575 9 1.75 7.4925 1.75 5.625C1.75 3.7575 3.2575 2.25 5.125 2.25C6.9925 2.25 8.5 3.7575 8.5 5.625C8.5 7.4925 6.9925 9 5.125 9Z" fill="#727272" />
                    </svg>
                    <input type="text" className='py-[14px] w-full pl-12 pr-6 rounded-lg bg-surface-background' placeholder='Search Event...' />
                </div>
                <div className="mt-[30px]">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar className='w-full text-white' disableHighlightToday/>
                    </LocalizationProvider>
                </div>
                <div className="flex flex-col gap-y-5 mt-[30px]">
                    {[0, 1, 2].map(entry => (
                        <div className="flex items-center">
                            <IconCard></IconCard>
                            <p className="ml-4 font-semibold">Events</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar className='w-full' />
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default calendar

