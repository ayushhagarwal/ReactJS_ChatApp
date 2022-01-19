import { ChatEngine } from "react-chat-engine";
import "./App.css";

import React from "react";

export default function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="d9b05052-f25b-47ba-9d8b-8c4991054235"
        userName="test"
        userSecret="12345"
      />
    </div>
  );
}

// const App = () => {
//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="d9b05052-f25b-47ba-9d8b-8c4991054235"
//       userName="test"
//       userSecret="12345"
//     />
//   );
// };

// export default App;
