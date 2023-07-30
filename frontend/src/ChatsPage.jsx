import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
 
  return (
    <div style={{ height: "100vh" }}>
<PrettyChatWindow 
projectId="
27484f1d-0460-4649-8179-15efc708d61e"
username={props.user.username}
secret={props.user.username}
style={{height: '100%'}}
/>
    </div>
  );
};

export default ChatsPage;
