import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import GeneralInfoCard from "./components/GeneralInfoCard";
import WorkersCard from "./components/WorkersCard";
import {useHandler} from "use-handler";
import AddUserModal from "./components/AddUserModal";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const openModalHandler = useHandler((isOpen: boolean) => {
        setIsModalOpen(isOpen)
    })

    const closeModalHandler = useHandler(() => {
        setIsModalOpen(false)
    })

  return (
      <Container maxWidth="md" style={{ marginTop: '8px' }}>
          <GeneralInfoCard />
          <WorkersCard onPressButton={openModalHandler} />
          <AddUserModal isOpen={isModalOpen} onClose={closeModalHandler} />
      </Container>
  );
}

export default App;
