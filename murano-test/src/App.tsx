import React, {useState} from 'react';
import {Box, Button, Container} from "@material-ui/core";
import GeneralInfoCard from "./components/GeneralInfoCard";
import WorkersCard from "./components/WorkersCard";
import {useHandler} from "use-handler";
import AddUserModal from "./components/AddUserModal";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const openModalHandler = useHandler(() => {
        setIsModalOpen(true)
    })

    const closeModalHandler = useHandler(() => {
        setIsModalOpen(false)
    })

    const onCancel = useHandler(() => {
        setIsModalOpen(false)
    })

  return (
      <Container maxWidth="md" style={{ marginTop: '8px' }}>
          <GeneralInfoCard />
          <WorkersCard onPressButton={openModalHandler} />
          <AddUserModal isOpen={isModalOpen} onClose={closeModalHandler} onCancel={onCancel} />
          <Box style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
              <Button
                  variant="contained"
                  style={{ backgroundColor: "#f50057", color: "#fff" }}
              >
                  Check Form
              </Button>
          </Box>
      </Container>
  );
}

export default App;
