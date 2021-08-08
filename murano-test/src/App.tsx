import React, {useState} from 'react';
import {Box, Button, CircularProgress, Container} from "@material-ui/core";
import GeneralInfoCard from "./components/GeneralInfoCard";
import WorkersCard from "./components/WorkersCard";
import {useHandler} from "use-handler";
import AddUserModal from "./components/AddUserModal";
import Loader from "./components/Loader";
import {IUser} from "./utils/types";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)

    const openModalHandler = useHandler(() => {
        setLoader(true)
        setTimeout (() => {
            setIsModalOpen(true)
            setLoader(false)
        }, 2000)
    })

    const closeModalHandler = useHandler(() => {
        setIsModalOpen(false)
    })

    const onCancel = useHandler(() => {
        setIsModalOpen(false)
    })

    const onAdd = useHandler((user: IUser) => {
        setLoader(true)
        setTimeout(() => {
            users.push(user)
            setUsers(users)
            setIsModalOpen(false)
            setLoader(false)
        }, 2000)
    })

  return (
      <Container maxWidth="md" style={{ marginTop: '8px' }}>
          <GeneralInfoCard />
          <WorkersCard onPressButton={openModalHandler} users={users} />
          {loader ?
             <Loader isOpen={loader} />
              :
              <AddUserModal isOpen={isModalOpen} onClose={closeModalHandler} onAdd={onAdd} onCancel={onCancel} />
          }
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
