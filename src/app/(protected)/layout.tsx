import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react"
import AppSidebar from "./_components/app-sidebar";

interface ChildrenProps {
    children: ReactNode
}

const LayoutProtected = ({ children }: ChildrenProps) => {
    return (
        <>
            <SidebarProvider open={true}>
                <AppSidebar />
                <main>
                    {children}
                </main>
            </SidebarProvider>
        </>
    );
};

export default LayoutProtected