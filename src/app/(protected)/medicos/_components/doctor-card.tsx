import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Check, Calendar, Timer, CircleDollarSign } from 'lucide-react';
import React from 'react';

const DoctorCard = () => {
    return (
        <Card className='w-full p-4'>
            {/* HEADER */}
            <div className='flex items-center gap-4'>
                <div className='w-18 h-18 rounded-full border-1'></div>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-md'>Dr. Odair Michael Bendotti</p>
                    <div className='flex items-center text-sm gap-2'>
                        <Check size={18} className='bg-gray-400 rounded-full p-1 h-4 w-4 text-white' />
                        <p className='text-gray-400'>Cardiologista</p>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <div className='inline-flex max-w-max gap-3 py-1 px-3 rounded-md items-center'>
                        <Calendar size={14} />
                        <p className='text-sm'>Segunda a sexta</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='inline-flex max-w-max gap-3 py-1 px-3 rounded-md items-center'>
                        <Timer size={14} />
                        <p className='text-sm'>Das 08 às 18</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='inline-flex max-w-max gap-3 py-1 px-3 rounded-md items-center'>
                        <CircleDollarSign size={14} />
                        <p className='text-sm'>R$350,00</p>
                    </div>
                </div>
            </div>
            <Separator />
            <div className='flex items-center justify-between gap-4'>
                <Button variant="outline" className='flex-1 cursor-pointer'>Ver detalhes</Button>
                <Button variant="outline" className='cursor-pointer'><Trash2 size={14} /></Button>
            </div>
        </Card>
    );
};

export default DoctorCard