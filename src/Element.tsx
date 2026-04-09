import { ElementAPI } from "@avaya/infinity-elements-api";
import React, { useEffect, useState } from "react";
import styles from "./Element.module.css";

interface ElementProps {
  message?: string;
}

// Initialize ElementAPI
const api = new ElementAPI({
  elementId: "remote-element",
  debug: true,
});

const Element: React.FC<ElementProps> = ({ message = "Hello, World!" }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user info on mount
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserId(userInfo.userId);
      })
      .catch((error) => {
        console.error("Failed to get user info:", error);
        console.info("May not be in iframe");
      });

    // Cleanup on unmount
    return () => {
      api.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{message}</h2>
      <div className={styles.content}>
        {userId ? <p>Welcome, {userId}!</p> : <p>Loading user info...</p>}
      </div>
    </div>
  );
};

export default Element;
