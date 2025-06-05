import { Button } from "@/components/ui/button";
import { Header, HeaderActions, HeaderContent, HeaderDescription, HeaderTitle, Page, PageContent } from "@/components/ui/page-container";
import { UserRoundPlus } from "lucide-react";
import AddMedic from "./_components/add-medic";

const Medicos = () => {
    return (
        <Page>
            <Header>
                <HeaderContent>
                    <HeaderTitle>Médicos</HeaderTitle>
                    <HeaderDescription>Os médicos aparecerão aqui</HeaderDescription>
                </HeaderContent>
                <HeaderActions>
                    <Button className="cursor-pointer" variant="outline"><UserRoundPlus />Ordenar</Button>
                    <Button className="cursor-pointer" variant="outline"><UserRoundPlus />Filtrar</Button>
                    <AddMedic />
                </HeaderActions>
            </Header>

            <PageContent>
                <p className="w-full bg-red-500">Aqui</p>
                <p>Aqui</p>
                <p>Aqui</p>
                <p>Aqui</p>
            </PageContent>

        </Page>
    );
};

export default Medicos