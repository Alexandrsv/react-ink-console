import { format } from "date-fns";
import { Box, render, Text } from "ink";
import React, { useEffect, useState } from "react";
import BigText from "ink-big-text";

const App = () => {
  const [time, setTime] = useState(format(new Date(), "dd.MM.yyyy HH:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTime = () => {
    setTime(format(new Date(), "dd.MM.yyyy HH:mm:ss"));
  };

  return (
    <Box
      borderStyle={"round"}
      borderColor={"magenta"}
      padding={1}
      flexDirection={"column"}
    >
      <Text color={"redBright"}>
        <BigText text={"React"} />
      </Text>
      <Text>Время - {time}</Text>
    </Box>
  );
};

render(<App />);
