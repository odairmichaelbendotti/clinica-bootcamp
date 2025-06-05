import { Button } from "@/components/ui/button";
import { Header, Page, HeaderContent, HeaderTitle, HeaderDescription, HeaderActions, PageContent } from "@/components/ui/page-container"
import { UserRoundPlus } from 'lucide-react'

const Agendamentos = () => {
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
                    <Button className="cursor-pointer"><UserRoundPlus />Adicionar médicos</Button>
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

export default Agendamentos