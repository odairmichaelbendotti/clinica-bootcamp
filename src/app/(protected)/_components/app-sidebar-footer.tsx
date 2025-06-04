"use client"
import { SidebarFooter } from '@/components/ui/sidebar'
import React from 'react'
import { LogOut } from 'lucide-react'
import { signOut } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

const AppSidebarFooter = () => {
    const router = useRouter()
    const handleLogOut = () => {
        signOut()
        router.push('/authentication')
    }

    return (
        <SidebarFooter>
            <div className='flex w-full items-center gap-4'>
                <div className='w-10 h-10 bg-blue-500 rounded-full'></div>
                <div className='flex  items-center  justify-between flex-1'>
                    <p className='text-sm'>Olá, Odair</p>
                    <LogOut size={15} className='cursor-pointer' onClick={handleLogOut} />
                </div>
            </div>
        </SidebarFooter>
    );
};

export default AppSidebarFooter;