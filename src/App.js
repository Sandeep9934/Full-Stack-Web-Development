import React, { useState } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import Data from "./Data";

const LeftChild = ({ onItemClick, selectedItemId }) => {
  return (
    <Box sx={{ width: "30%", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <Typography variant="h6">Items</Typography>
      <List>
        {Data.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => onItemClick(item.id)}
            button
            selected={selectedItemId === item.id}
          >
            {item.Name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const RightChild = ({ itemId }) => {
  const selectedItem = Data.find((item) => item.id === itemId);

  return (
    <Box sx={{ width: "70%", padding: "20px" }}>
      <Typography variant="h6">Selected Item</Typography>
      {selectedItem && (
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            marginTop: "10px"
          }}
        >
          <Typography variant="h5">{selectedItem.Name}</Typography>
          <Typography variant="body1">Price: {selectedItem.Price}</Typography>
        </Box>
      )}
    </Box>
  );
};

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(3);

  const onItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <LeftChild onItemClick={onItemClick} selectedItemId={selectedItemId} />
      <RightChild itemId={selectedItemId} />
    </Box>
  );
};

export default App;
