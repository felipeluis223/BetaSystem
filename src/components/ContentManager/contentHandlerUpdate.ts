export const handleUpdate = (
    id: string,
    data: PropsData[],
    setSelectedUser: React.Dispatch<React.SetStateAction<PropsData | null>>,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const userToUpdate = data.find((user) => user.id === id);
    if (userToUpdate) {
      setSelectedUser(userToUpdate);
      setShowModal(true);
    }
  };
  