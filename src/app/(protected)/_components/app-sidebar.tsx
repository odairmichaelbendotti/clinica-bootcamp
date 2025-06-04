import { Sidebar, SidebarHeader } from "@/components/ui/sidebar"
import AppSidebarContent from "./app-sidebar-content"
import AppSidebarFooter from "./app-sidebar-footer";

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader />
            <AppSidebarContent />
            <AppSidebarFooter />
        </Sidebar>
    );
};

export default AppSidebar;