import { DefaultTemplate } from "../../components/DefaultTemplates";
import { TechList } from "../../components/TechList";
import { NewTechList } from "../../components/TechList/NewTechList";
import { CreateTechPageModal } from "../CreateTechPageModal";
import { EditTechPageModal } from "../EditTechPageModal";


export const DashBoardPage = () => {
   return (
      <DefaultTemplate>
         <main>
            <div className="containerMd column">
               <TechList>
                  <NewTechList />
               </TechList>
               <CreateTechPageModal />
                <EditTechPageModal />
            </div>
         </main>
      </DefaultTemplate>
   );
};