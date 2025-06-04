"use client"
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Banknote, Calendar, FileUser, LayoutDashboard, UserSearch } from 'lucide-react';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AppSidebarContent = () => {
    const path = usePathname()
    console.log(path)

    return (
        <SidebarContent>

            <SidebarGroup>
                <SidebarGroupLabel>Funções de administrador</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className={`cursor-pointer h-10 ${path === '/dashboard' && 'bg-gray-200'}`} asChild>
                                <Link href='/dashboard'><LayoutDashboard />Dashboard</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className={`cursor-pointer h-10 ${path === '/agendamentos' && 'bg-gray-200'}`} asChild>
                                <Link href='/agendamentos'><Calendar />Agendamentos</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className={`cursor-pointer h-10 ${path === '/medicos' && 'bg-gray-200'}`} asChild>
                                <Link href='/medicos'><UserSearch />Médicos</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className={`cursor-pointer h-10 ${path === '/pacientes' && 'bg-gray-200'}`} asChild>
                                <Link href='/pacientes'><FileUser />Pacientes</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Funções de administrador</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className={`cursor-pointer h-10 ${path === '/planos' && 'bg-gray-200'}`} asChild>
                                <Link href='/planos'><Banknote />Planos</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

        </SidebarContent>
    );
};

export default AppSidebarContent